import { useCallback, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../util/fetcher";

export default function Login() {
  const [username, onChangeUsername, setUsername] = useInput("");

  const [password, onChangePassword, setPassword] = useInput("");
  const [loginSuccess, setLoginSucess] = useState(false);
  const { data, isLoading, error, mutate } = useSWR(
    "https://whatshot.pintor.dev/api/members/me",
    fetcher
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(username, password);
      if (!username || !password) {
        return;
      }

      axios
        .post("https://whatshot.pintor.dev/api/members/login", {
          username,
          password,
        })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          mutate(res.data, false);
          setLoginSucess(true);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
    [username, password]
  );

  if (data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-24">
      <form onSubmit={onSubmit}>
        <div>
          <label for="id">아이디</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="text"
            id="id"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="mt-8">
          <label for="password">비밀번호</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>

        <button className="text-white bg-primary w-full p-2 rounded-md mt-4">
          간편 로그인하기
        </button>
      </form>
      <div className="mt-4">
        계정이 없으신가요?
        <Link className="ml-2 text-primary" to="/signup">
          회원가입하러 가기
        </Link>
      </div>
    </div>
  );
}

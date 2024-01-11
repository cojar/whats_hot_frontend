import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchErorr, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password, passwordCheck, nickname);

      if (!email || !password || !passwordCheck || !nickname) {
        return;
      }

      axios
        .post(
          "https://whb.pintor.dev/api/members",
          {
            request: JSON.stringify({
              username: nickname,
              password: password,
              passwordConfirm: passwordCheck,
              email: email,
            }),
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          // console.log(res);
          setSignUpSuccess(true);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          // console.log("hiheiwhe");
          setSignUpError(error.response.data.message);
        });
    },
    [email, password, passwordCheck]
  );

  return (
    <div className="mt-24">
      <form onSubmit={onSubmit}>
        <div>
          <label for="email">이메일</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="email"
            id="email"
            onChange={onChangeEmail}
            value={email}
          />
        </div>
        <div className="mt-8">
          <label for="nickname">아이디</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="text"
            id="nickname"
            onChange={onChangeNickname}
            value={nickname}
          />
        </div>
        <div className="mt-8">
          <label for="password">비밀번호</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="password"
            id="password"
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div className="mt-8">
          <label for="passwordCheck">비밀번호 확인</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="password"
            id="passwordCheck"
            onChange={onChangePasswordCheck}
            value={passwordCheck}
          />
        </div>
        {signUpSuccess && (
          <div className="mt-4 text-green-400">회원가입을 완료하였습니다</div>
        )}
        {mismatchErorr && (
          <div className="mt-4 text-red-400">비밀번호가 일치하지 않습니다.</div>
        )}
        {!email && (
          <div className="mt-4 text-red-400">이메일을 입력해주세요</div>
        )}
        {signUpError && <div className="mt-4 text-red-400">{signUpError}</div>}
        <button class=" mt-8 text-white bg-primary w-full p-2 rounded-md mt-4">
          간편 회원가입하기
        </button>
      </form>
      <div className="mt-4">
        이미 계정이 있으신가요?
        <Link className="ml-2 text-primary" to="/login">
          로그인하러 가기
        </Link>
      </div>
    </div>
  );
}

import { Link, useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../util/fetcher";
import axios from "axios";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading, error, mutate } = useSWR(
    "https://whatshot.pintor.dev/api/members/me",
    fetcher,
    {
      dedupingInterval: 10,
    }
  );

  const onLogout = () => {
    axios
      .post(
        "https://whatshot.pintor.dev/api/members/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        window.localStorage.removeItem("accessToken");
        mutate(undefined, false);
        navigate(0);
      })
      .catch((err) => {});
  };

  console.log(location.pathname);
  return (
    <div className="font-bold w-fit ml-auto text-primary">
      {!localStorage.getItem("accessToken") &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Link to="/login">로그인</Link>}
      {localStorage.getItem("accessToken") && (
        <span style={{ cursor: "pointer" }} onClick={onLogout}>
          로그아웃
        </span>
      )}
    </div>
  );
}

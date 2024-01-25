import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
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

  const goBack = () => {
    navigate(-1); // navigate 함수에 -1을 전달하여 뒤로가기를 수행
  };

  return (
    <div className="flex justify-between items-center w-full font-bold ml-auto text-primary">
      <button
        className="cursor-pointer border-none bg-none p-0 text-xl"
        onClick={goBack}
      >
        <IoChevronBackOutline />
      </button>
      {!localStorage.getItem("accessToken") &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Link to="/login">로그인</Link>}
      {localStorage.getItem("accessToken") && (
        <button
          className="cursor-pointer border-none bg-none p-0"
          onClick={onLogout}
        >
          로그아웃
        </button>
      )}
    </div>
  );
}
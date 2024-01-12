import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="font-bold w-fit ml-auto text-primary">
      {!localStorage.getItem("accessToken") &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Link to="/login">로그인</Link>}
      {localStorage.getItem("accessToken") && (
        <Link to="/logout">로그아웃</Link>
      )}
    </div>
  );
}

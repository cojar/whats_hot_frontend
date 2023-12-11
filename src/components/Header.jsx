import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="font-bold w-fit ml-auto text-primary">
      {location.pathname !== "/login" && <Link to="/login">로그인</Link>}
    </div>
  );
}

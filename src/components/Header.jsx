import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="font-bold w-fit ml-auto">
      <Link to="/login">로그인</Link>
    </div>
  );
}

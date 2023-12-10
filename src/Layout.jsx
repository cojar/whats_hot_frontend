import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Layout() {
  return (
    <div className="bg-white max-w-md mx-auto min-h-screen p-3">
      <Header />
      <Outlet />
    </div>
  );
}

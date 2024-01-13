import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import ReviewWrite from "./pages/DetailWrite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/DetailPage/:id" element={<DetailPage />} />
          <Route path="/DetailPage/:id/review/write" element={<ReviewWrite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

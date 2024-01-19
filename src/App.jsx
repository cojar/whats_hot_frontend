import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import ReviewForm from "./pages/ReviewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/DetailPage/:id" element={<DetailPage />} />
          <Route path="/reviewForm/:spotId" element={<ReviewForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

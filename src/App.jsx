import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import restaurantMockItems from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DetailPage/:id" element={<DetailPage restaurantItems={restaurantMockItems} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  //상품 데이터 배열을 items라는 변수에 할당
  const items = [
    {
      id: "1",
      name: "멋진 바지",
      price: "20,000원",
      like: "100개",
      option: ["28", "30", "32"],
    },
    {
      id: "2",
      name: "멋진 셔츠",
      price: "10,000원",
      like: "200개",
      option: ["small", "medium", "large"],
    },
    {
      id: "3",
      name: "멋진 신발",
      price: "30,000원",
      like: "300개",
      option: ["230", "240", "250", "260", "270"],
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products items={items} />} />
          <Route path="/products/:id" element={<Product items={items} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              {" "}
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

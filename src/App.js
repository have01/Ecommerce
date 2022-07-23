import "./App.css";
import Product from "./components/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [cartList, setCartList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Product cartList={cartList} setCartList={setCartList} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartList={cartList} setCartList={setCartList} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "../style/product.css";
import axios from "axios";
import Navbar from "./navbar";
import Productcard from "./productcard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const { cartList, setCartList } = props;
  const [searchinput, setSearchinput] = useState("");
  const [checked, setChecked] = React.useState("");
  const [loading, setloading] = useState(true);
  const onSearch = (e) => {
    setSearchinput(e.target.value);
    console.log(searchinput);
  };
  const handlechecked = (e) => {
    setChecked("red");
  };

  const getAllProducts = () => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((response) => {
        setProducts(response?.data);
        setloading(false);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const addToCart = (item) => {
    toast("Added to cart!");
    const isItemxistance = cartList.some((ele) => ele.id === item.id);
    if (!isItemxistance) {
      const newProductItems = products.map((ele) => {
        if (ele.id === item.id) {
          ele.alreadyAdded = true;
        }
        return ele;
      });
      setProducts(newProductItems);
      setCartList([...cartList, item]);
    }
  };

  return (
    <>
      <Navbar cartLength={cartList.length} />
      <ToastContainer />
      {loading === true ? (
        <div className="loading_container">Loading....</div>
      ) : (
        <Productcard
          handlechecked={handlechecked}
          onSearch={onSearch}
          addToCart={addToCart}
          searchinput={searchinput}
          products={products}
          setSearchinput={setSearchinput}
        />
      )}
    </>
  );
};

export default Product;

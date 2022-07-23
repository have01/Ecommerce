import React, { useEffect, useState } from "react";
import "../style/cart.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import emprtycart from "../assest/emptycart.png";

const Cart = (props) => {
  const { cartList, setCartList } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  const removeFromCart = (id) => {
    const newList = cartList.filter((ele) => ele.id !== id);
    setCartList(newList);
  };

  const handleItemQuantity = (evn, item) => {
    const newList = cartList.map((ele) => {
      item.selectedQuantity = Number(evn.target.value);
      return ele;
    });
    setCartList(newList);
  };

  useEffect(() => {
    const itemTotalPrice = cartList.reduce((acc, crr) => {
      return crr.selectedQuantity
        ? acc + crr.price * crr.selectedQuantity
        : acc + crr.price;
    }, 0);
    setTotalPrice(itemTotalPrice);
    console.log("itemTotalPrice", itemTotalPrice);
  }, [cartList]);

  const cardDetails = (arr) => (
    <div>
      {arr && arr.length
        ? arr.map((s) => {
            <p>
              {s.itemName} : - <span>{s.price}</span>{" "}
            </p>;
          })
        : null}
    </div>
  );

  return (
    <>
      <Navbar cartLength={props?.cartList.length} />
      <div className="cartBox">
        <div className="main_Cart">
          {" "}
          <div className="cart">
            <h1 className="shoping_heading">Shoping Cart</h1> <br />
            <p>You have {props?.cartList.length} items in the cart</p>
            {cartList?.length ? (
              props.cartList.map((item) => {
                const quantityArray = [];
                for (let i = 1; i <= item.quantity; i++) {
                  quantityArray.push(i);
                }
                return (
                  <>
                    <div>
                      <div className="cart_items" key={item.id}>
                        <div className="item_image">
                          {" "}
                          <img src={item.imageURL} alt="" />
                        </div>
                        <div className="item_details">
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                        <div className="item_quantity">
                          <select
                            name="qty"
                            id="qty"
                            onChange={(e) => handleItemQuantity(e, item)}
                          >
                            {quantityArray.length ? (
                              quantityArray.map((ele) => (
                                <option value={ele}>{ele}</option>
                              ))
                            ) : (
                              <option value="1">1</option>
                            )}
                          </select>
                        </div>
                        <div className="item_delete">
                          <button
                            className="btnn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="cart_empty">
                <img src={emprtycart} alt="" srcset="" />
                <h3>Your cart is empty!</h3>
                <h3>Add items to it now.</h3>
                <Link to="/">
                  {" "}
                  <button className="shop_now">Shop now</button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="main_cart_amount">
          {cartList && cartList.length ? (
            <h1> Total amount :₹{totalPrice}</h1>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;

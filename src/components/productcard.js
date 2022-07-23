import React, { useEffect, useState } from "react";
import Filter from "./filter";
import { BiFilterAlt, BiSearch } from "react-icons/bi";

const Productcard = ({
  addToCart,
  onSearch,
  searchinput,
  products,
  setSearchinput,
}) => {
  const [unchecked, setUnchecked] = useState(false);
  const [array, setArray] = useState([]);
  const [modal, setModal] = useState(false);
  const [width, setInnerWidth] = useState(window.innerWidth);
  const filterHandler = (e) => {
    if (e.target.checked) {
      setUnchecked(e.target.checked);
      setSearchinput(e.target.value);
      // console.log(e.target.value);
      if (array.includes(e.target.value)) {
        setArray(array.filter((item) => item !== e.target.value));
      } else {
        setArray([...array, e.target.value]);
      }
    } else {
      setUnchecked(false);
      setSearchinput("");
    }
  };
  // useEffect for windowns width
  useEffect(() => {
    if (window.innerWidth < 768) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [window.innerWidth]);
  // change window width when window is resized
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setInnerWidth(window.innerWidth);
      },
      [window.innerWidth]
    );
  }, [window.innerWidth]);

  return (
    <>
      <div class="search_input">
        <input
          type="input"
          className="search_item"
          placeholder="Search product"
          name="name"
          id="name"
          required
          onChange={onSearch}
        />
        <div className="search_icon">
          <BiSearch fill="#FFF" />
        </div>
        <div
          style={{
            marginLeft: "10px",
            padding: "10px",
          }}
          onClick={() => setModal(!modal)}
          className="search_icon hide"
        >
          <BiFilterAlt fill="#FFF" />
        </div>
      </div>
      <div className="home_treerex">
        {modal && <Filter filterHandler={filterHandler} />}

        <div className="products_container">
          {products
            .filter((value) => {
              if (searchinput === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchinput.toLowerCase())
              ) {
                return value;
              } else if (
                value.type.toLowerCase().includes(searchinput.toLowerCase())
              ) {
                return value;
              } else if (
                value.color.toLowerCase().includes(searchinput.toLowerCase())
              ) {
                return value;
              } else if (
                value.gender.toLowerCase().includes(searchinput.toLowerCase())
              ) {
                return value;
              }
            })
            .map((e) => {
              return (
                <div class="card" key={e.id}>
                  <div className="image_container">
                    <img src={e.imageURL} alt="t-shirt" />
                  </div>
                  <div class="min_details">
                    <p>
                      {" "}
                      {e.name} <br />₹{e.price}
                    </p>
                  </div>
                  {e.alreadyAdded ? (
                    <button type="button" disabled className="btn btn-info">
                      Added
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => addToCart(e)}
                      className="btn btn-info"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Productcard;

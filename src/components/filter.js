import React from "react";

const filter = ({ filterHandler }) => {
  return (
    <>
      <div className="filter_container">
        <p className="color">Color</p>
        <label class="container">
          Green
          <input
            type="checkbox"
            value="green"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Black
          <input
            type="checkbox"
            value="black"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Red
          <input
            type="checkbox"
            value="red"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Blue
          <input
            type="checkbox"
            value="blue"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <p className="Gender">Gender</p>
        <label class="container">
          Male
          <input
            type="checkbox"
            value="men"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Female
          <input
            type="checkbox"
            value="women"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <p className="Gender">Type</p>
        <label class="container">
          Hoodie
          <input
            type="checkbox"
            value="hoodie"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Polo
          <input
            type="checkbox"
            value="polo"
            onChange={(e) => filterHandler(e)}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </>
  );
};

export default filter;

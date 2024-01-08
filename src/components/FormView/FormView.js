import React from "react";
import PropTypes from "prop-types";
import styles from "./formview.module.css";
import { useState } from "react";
import { stocksAppender } from "../assets/stocksData.js";
function FormView() {
  const [stockDetails, setstockDetails] = useState({
    stockName: "",
    entryPrice: "",
    stoploss: "",
    trailingStoploss: "",
    reason: "",
  });
  const handleFormChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setstockDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    let res = await fetch(
      "https://script.google.com/macros/s/AKfycbzIYjuSp9IN5PGzPID09Nrv82ZPS_y7mWMm3w_okGm5r2b2Prhs4-u7DSKKc1rCydXH/exec",
      {
        // Adding method type
        method: "POST",

        mode: "cors",
        credentials: "include", // include, *same-origin, omit
        redirect: "follow",

        // Adding body or contents to send
        body: JSON.stringify(stockDetails),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    let response = await response.json();
    console.log(response);
  };

  // console.log(stockDetails);

  return (
    <div id={styles.formContainer}>
      {/* <div className={styles.caption}>GFS Stock Entry Form</div> */}
      <form className="gfsForm">
        <label className={styles.caption}>GFS Stock Entry Form</label>
        <div class="form-group">
          <label for="exampleInputEmail1">Date</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Stock"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Stock Name</label>
          <input
            type="text"
            class="form-control"
            name="stockName"
            placeholder="Enter Stock Name"
            onChange={handleFormChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Entry Price</label>
          <input
            type="number"
            class="form-control"
            name="entryPrice"
            aria-describedby="emailHelp"
            placeholder="Enter Entry Price"
            onChange={handleFormChange}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Exit Price</label>
          <input
            type="number"
            class="form-control"
            name="exitPrice"
            aria-describedby="emailHelp"
            placeholder="Enter Exit Price"
            onChange={handleFormChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Stoploss</label>
          <input
            type="number"
            class="form-control"
            name="stoploss"
            aria-describedby="emailHelp"
            placeholder="Enter Stoploss"
            onChange={handleFormChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Trailing Stoploss</label>
          <input
            type="number"
            class="form-control"
            name="trailingStoploss"
            aria-describedby="emailHelp"
            placeholder="Enter Trailing Stoploss"
            onChange={handleFormChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Reason</label>
          <input
            type="text"
            class="form-control"
            name="reason"
            aria-describedby="emailHelp"
            placeholder="Enter reason for entry"
            onChange={handleFormChange}
          />
        </div>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormView;

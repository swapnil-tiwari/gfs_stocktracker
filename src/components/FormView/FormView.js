import React from "react";
import PropTypes from "prop-types";
import styles from "./formview.module.css";
function FormView() {
  return (
    <div id={styles.formContainer}>
      {/* <div className={styles.caption}>GFS Stock Entry Form</div> */}
      <form className="gfsForm">
        <label className={styles.caption}>GFS Stock Entry Form</label>
        <div class="form-group">
          <label for="exampleInputEmail1">Date</label>
          <input
            type="email"
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
            id="exampleInputPassword1"
            placeholder="Enter Stock Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Entry Price</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Entry Price"
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
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Exit Price"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Stoploss</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Stoploss"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Trailing Stoploss</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Trailing Stoploss"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Reason</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter reason for entry "
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormView;

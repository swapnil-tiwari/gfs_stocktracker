import React, { Component } from "react";
import PropTypes from "prop-types";

function HeaderView() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Earn IT Invetment Services</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default HeaderView;

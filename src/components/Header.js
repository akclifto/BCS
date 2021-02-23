import React from "react";
import { NavLink } from "react-router-dom";
import cart from "../resources/cart.png";

let auth = true;
const ifAuth = () => {
  if (auth) {
    auth = false;
    // console.log(`ifAUTH: ${auth}`);
    return (
      <NavLink
        to="/login"
        activeClassName="is-active"
        className="nav__login"
        onClick={() => {
          ifAuth();
        }}
      >
        {" "}
        Login / Signup{" "}
      </NavLink>
    );
  } else {
    auth = true;
    // console.log(`ifAUTH: ${auth}`);
    return (
      <NavLink
        to="/"
        activeClassName="is-active"
        className="nav"
        onClick={() => {
          ifAuth();
        }}
      >
        Logout
      </NavLink>
    );
  }
};

const Header = () => (
  <div className="header__container">
    <div className="header">
      <a href="/" className="header__company">
        Best Community Services
      </a>
      <div className="header__nav">
        <NavLink
          to="/home"
          activeClassName="is-active"
          exact={true}
          className="nav"
        >
          {" "}
          Dashboard
        </NavLink>
        <NavLink to="/services" activeClassName="is-active" className="nav">
          {" "}
          Services
        </NavLink>
        <NavLink to="/volunteer" activeClassName="is-active" className="nav">
          {" "}
          Volunteer
        </NavLink>
        <NavLink to="/donate" activeClassName="is-active" className="nav">
          {" "}
          Donate
        </NavLink>
        {ifAuth()}
        <NavLink
          to="/checkout"
          activeClassName="is-active"
          className="cart__nav"
        >
          <img className="cart__img" src={cart} alt="checkout" />
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;

import React from "react";
import "./header.scss";
import icon from "../../assets/Icons/Icon-search.svg";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <section className="header">
        <Link to="/">
          <div onClick={props.handleHome}>
            <img className="header__logo" src={logo} alt="logo" />
          </div>
        </Link>
        <form className="header__form-1">
          <input
            className="header__search"
            type="text"
            name="name"
            placeholder="Search"
          />
          <img className="search-icon" src={icon} alt="icon" />
        </form>
        <div className="header__form">
          <form className="header__form-button">
            <Link to="/upload">
              <input className="header__button" type="submit" value="+UPLOAD" />
            </Link>
          </form>
          <div className="header__avatar"></div>
        </div>
      </section>
    </>
  );
};

export default Header;

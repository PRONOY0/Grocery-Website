import React, { useState } from "react";
import "../pages/Home.css";
import { CiLocationOn } from "react-icons/ci";
import plant from "../resources/Group.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Magnifying from "../pages/Magnifying";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="small-one">
          <div className="location">
            <CiLocationOn className="location-icon" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          <div className="linksAndLogin">
            <p className="first-txt">ENG</p>

            <GoChevronDown className="down-arrow dwnarrow1" />

            <p className="second-txt">USD</p>

            <GoChevronDown className="down-arrow dwnarrow2" />

            <NavLink to="/signin" className="sign-in">
              Sign In
            </NavLink>

            <span className="slash">/</span>

            <NavLink to="/signup" className="sign-up">
              Sign Up
            </NavLink>
          </div>
        </div>

        <div className="middle">
          <div className="home-page-icon">
            <NavLink to="/" className="homePageNavLink">
              <img src={plant} className="plant" />
              <p className="title">Ecobazar</p>
            </NavLink>

            <div className="inputDiv">
              <label htmlFor="searchField">
                <Magnifying className="magnifying" />
              </label>
              <input type="text" className="inputField" id="searchField" />
              <button className="searchBtn">Search</button>
            </div>

            <div className="cartDetails">
              <IoIosHeartEmpty className="heart" />

              <div className="cartItem">
                <BsHandbag className="handbag" />
                <span className="totalItem">0</span>
              </div>

              <div className="totalPriceOfItemsDiv">
                <p className="shoppingcart-txt">Shopping cart:</p>
                <span className="price">$0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="navLinks">
          <div className="diff-nav-links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                <GoChevronDown className="link-opening-arrow" />
              </li>

              <li>
                <NavLink to="/shop">Shop</NavLink>
                <GoChevronDown className="link-opening-arrow" />
              </li>

              <li>
                <NavLink>Pages</NavLink>
                <GoChevronDown className="link-opening-arrow" />
              </li>

              <li>
                <NavLink to="/recipe">Recipes</NavLink>
                <GoChevronDown className="link-opening-arrow" />
              </li>

              <li>
                <NavLink to='/about'>About Us</NavLink>
              </li>

              <li>
                <NavLink to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div className="contact-number">
            <MdOutlinePhoneInTalk className="phone" />
            <p>(219) 555-0114</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

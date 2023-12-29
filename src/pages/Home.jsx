import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./Home.css";
import { NavLink } from "react-router-dom";
import DownArrows from "./DownArrows";
import plant from "../resources/Group.png";
import Magnifying from "./Magnifying";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";

const Home = () => {
  return (
    <div className="container">
      <nav>
        <div className="small-one">
          <div className="location">
            <CiLocationOn className="location-icon" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          <div className="linksAndLogin">
            <p className="first-txt">ENG</p>

            <DownArrows className="down-arrow dwnarrow1" />

            <p className="second-txt">USD</p>

            <DownArrows className="down-arrow dwnarrow2" />

            <NavLink className="sign-in">Sign In</NavLink>

            <span className="slash">/</span>

            <NavLink className="sign-up">Sign Up</NavLink>
          </div>
        </div>

        <div className="middle">
          <div className="home-page-icon">
            <img src={plant} className="plant" />
            <p className="title">Ecobazar</p>

            <div className="inputDiv">
              <label htmlFor="searchField">
                <Magnifying className="magnifying" />
              </label>
              <input type="search" className="inputField" id="searchField" />
              <button className="searchBtn">Search</button>
            </div>

            <div className="cartDetails">
              <IoIosHeartEmpty className="heart"/>

              <div className="cartItem">
                <BsHandbag className="handbag"/>
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
        </div>
      </nav>
    </div>
  );
};

export default Home;

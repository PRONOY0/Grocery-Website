import React from "react";
import "../../pages/Home/Home.css";
import { CiLocationOn } from "react-icons/ci";
import plant from "../../resources/Group.png";
import { BsHandbag } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = React.useState(0);

  React.useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

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
          <NavLink to="/" className="homePageNavLink">
            <img src={plant} className="plant" alt=""/>
            <p className="title">Ecobazar</p>
          </NavLink>

          <div className="cartDetails">
            <NavLink to="/cart" className="cartItem">
              <BsHandbag className="handbag" />
              <span className="totalItem">{cart.length}</span>
            </NavLink>

            <div className="totalPriceOfItemsDiv">
              <p className="shoppingcart-txt">Shopping cart:</p>
              <span className="price">₹{totalAmount}</span>
            </div>
          </div>
        </div>

        <div className="navLinks">
          <ul className="diff-nav-links">
            <li>
              <NavLink to="/" className='nav-hover-links'>Home</NavLink>
              <GoChevronDown className="link-opening-arrow" />
            </li>

            <li>
              <NavLink to="/shop" className='nav-hover-links'>Shop</NavLink>
              <GoChevronDown className="link-opening-arrow" />
            </li>

            <li>
              <NavLink to="/recipe" className='nav-hover-links'>Recipes</NavLink>
              <GoChevronDown className="link-opening-arrow" />
            </li>

            <li>
              <NavLink to="/about" className='nav-hover-links'>About Us</NavLink>
            </li>

            <li>
              <NavLink to="/contact" className='nav-hover-links'>Contact Us</NavLink>
            </li>
          </ul>

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

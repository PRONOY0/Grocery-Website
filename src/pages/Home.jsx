import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GoArrowRight, GoRead } from "react-icons/go";
import FreshFruit from "../resources/Fresh Fruit.png";
import FreshVegetables from "../resources/Fresh vegetables.png";
import MeatFish from "../resources/Meat & Fish.png";
import Snacks from "../resources/Snacks.png";
import Beverages from "../resources/Beverages.png";
import BreadBakery from "../resources/Bread Bakery.png";
import BakingNeeds from "../resources/Baking Needs.png";
import Cooking from "../resources/Cooking.png";
import DiabeticFood from "../resources/Diabetic Food.png";
import DishDetergents from "../resources/Dish Detergents.png";
import { useState, useEffect, useContext } from "react";
import PopUp from "../components/PopUp";
import { RiStarSFill } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEye, FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import plantlogo from "../resources/Group.png";
import { AppContext } from "../context/AppContext";
import { MdAccountCircle } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import latestnewsimage1 from "../resources/news1.jpeg";
import latestnewsimage2 from "../resources/news2.jpeg";
import latestnewsimage3 from "../resources/news3.jpeg";
import pfp1 from "../resources/P1.jpeg";
import pfp2 from "../resources/P2.jpeg";
import pfp3 from "../resources/P3.jpeg";
import Timer from "../components/Timer";
import { useSelector } from "react-redux";

const Home = ({ products }) => {
  const [showPopup, setShowPopup] = useState(false);

  const navigation = useNavigate();

  const { close, subscribe } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (close === true || subscribe === true) {
      setShowPopup(false);
    }
  });

  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);

  const handleClick = (itemId) => {
    navigate(`/singleProduct/${itemId}`);
  };

  function freshFruithandler(value) {
    navigation("/Products", { state: { value } });
  }

  function freshVegetableshandler(value) {
    navigation("/Products", { state: { value } });
  }

  function meathandler(value) {
    navigation("/Products", { state: { value } });
  }

  function beveragesHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function snacksHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function BreadBakeryHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function BakingNeedsHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function CookingHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function DiabeticFoodHandler(value) {
    navigation("/Products", { state: { value } });
  }

  function DishDetergentHandler(value) {
    navigation("/Products", { state: { value } });
  }

  const latestNewsImages = [
    latestnewsimage1,
    latestnewsimage2,
    latestnewsimage3,
  ];

  const [defaultNews, setDefaultNews] = useState(0);

  const [defaultTestimonial, setDefaultTestimonial] = useState(0);

  const profilePhotosOfTestimonials = [pfp1, pfp2, pfp3];

  const prevNews = () => {
    if (defaultNews > 0) {
      setDefaultNews((prev) => prev - 1);
    } else {
      return 0;
    }
  };

  const nextNews = () => {
    if (defaultNews < 2) {
      setDefaultNews((prev) => prev + 1);
    } else {
      return 2;
    }
  };

  const accountOfTheCustomers = [
    "Robert Fox",
    "Dianne Russell",
    "Eleanor Pena",
  ];

  const [namesOfCustomer, setNamesOfCustomer] = useState(0);

  const nextTestimonial = () => {
    if (defaultTestimonial < 2) {
      setDefaultTestimonial((prev) => prev + 1);
      setNamesOfCustomer((prev) => prev + 1);
    } else {
      return 2;
    }
  };

  const previousTestimonial = () => {
    if (defaultTestimonial > 0) {
      setDefaultTestimonial((prev) => prev - 1);
      setNamesOfCustomer((prev) => prev - 1);
    } else {
      return 0;
    }
  };

  const [activeIcons, setActiveIcons] = useState([]);

  const NavClick = (index) => {
    setActiveIcons((prevActiveIcons) =>
      prevActiveIcons.includes(index)
        ? prevActiveIcons.filter((item) => item !== index)
        : [...prevActiveIcons, index]
    );
  };


  const [whichNavClicked,setWhichNavClicked] = useState(3);

  function navClickHandler(navId){
    setWhichNavClicked(navId);
    console.log("this is navId",navId);
    console.log("this is whichNavClicked value",whichNavClicked);
  }

  return (
    <div className="container">
      <div className="POPUP-CLASS">{showPopup && <PopUp />}</div>

      <div className="logoandNameForMobile">
        <div className="Ecobazar-logo-and-text">
          <p>Ecobazar</p>
          <img src={plantlogo} className="plant-logo" />
        </div>

        <NavLink to="/cart" className="cart-items">
          <p>{cart.length}</p>
          <BsHandbag />
        </NavLink>
      </div>

      <div className="bottom-navbar-mobile">
        <NavLink to="/shop" className={`${whichNavClicked===1 ? "navClickedActive" : ""}`} onClick={() => navClickHandler(1)}>
          <FaSearch className="icon" />
        </NavLink>

        <NavLink to="/recipe" className={`${whichNavClicked===2 ? "navClickedActive" : ""}`} onClick={() => navClickHandler(2)}>
          <MdFastfood className="icon" />
        </NavLink>

        <NavLink to="/" className={`${whichNavClicked===3 ? "navClickedActive" : ""}`} onClick={() => navClickHandler(3)}>
          <TiHome className="icon" />
        </NavLink>

        <NavLink to="/contact" className={`${whichNavClicked===4 ? "navClickedActive" : ""}`} onClick={() => navClickHandler(4)}>
          <IoMdCall className="icon" />
        </NavLink>

        <NavLink to="/signin" className={`${whichNavClicked===5 ? "navClickedActive" : ""}`} onClick={() => navClickHandler(5)}>
          <MdAccountCircle className="icon" />
        </NavLink>
      </div>

      <div className="Bannar-forMobile">
        <div className="inside-frame-of-Bannar">
          <p className="bestdeal-formobile">Best Deals</p>
          <h2 className="sale-formobile">Sale of the Month</h2>
          <Timer />
          <button
            className="shopNowBtnForMobile"
            onClick={() => {
              navigation("/shop");
            }}
          >
            Shop Now <GoArrowRight className="goarrowRight" />
          </button>
        </div>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} Bannar`}>
        <div className="Big-Bannar">
          <div className="frame">
            <h1 className="ad-title">Fresh & Healthy Organic Food</h1>

            <div className="description">
              <div className="sales-title">
                <p className="sales-first-part">Sale up to</p>
                <p className="sales-second-part">30% OFF</p>
              </div>

              <p className="shipping-text">Free shipping on all your order</p>
            </div>

            <NavLink className="shopNow-btn" to="/shop">
              Shop now <GoArrowRight className="shop-arrow-icon" />
            </NavLink>
          </div>
        </div>

        <div className="small-bannar">
          <div className="small-bannar-bannar1">
            <div className="info">
              <p className="summersale">SUMMER SALE</p>
              <p className="SeventyFivePercentoff">75% OFF</p>
              <p className="onlyFruits-vegetables">Only Fruit & Vegetables</p>
              <NavLink to="/shop" className="shopNowBtn">
                Shop Now
                <GoArrowRight className="goarrowright" />
              </NavLink>
            </div>
          </div>

          <div className="small-bannar-bannar2">
            <div className="leaf-Banner-info">
              <p className="Best-Deal-leaf-bannar">BEST DEAL</p>
              <p className="special-products-leaf-bannar">
                Special Products <br /> Deal of the Month
              </p>
              <NavLink to="/shop" className="leaf-bannar-ShopNowBtn">
                Shop Now <GoArrowRight className="goarrowright" />{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} features`}>
        <div className="free-shipping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="shippingSvg"
          >
            <path
              d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z"
              fill="#00B307"
            />
          </svg>
          <div className="free-shipping-info">
            <p className="free-shipping-text">Free Shipping</p>
            <p className="free-shipping-order-text">
              Free shipping on all your order
            </p>
          </div>
        </div>

        <div className="customer-support">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            className="CustomerSupportSvg"
          >
            <g clip-path="url(#clip0_629_3527)">
              <path
                d="M34.0182 15.2101V13.6723C34.0182 9.9916 32.7157 6.57143 30.3543 4.03361C27.9342 1.42857 24.6064 0 20.9762 0H19.7073C16.077 0 12.7493 1.42857 10.3291 4.03361C7.96778 6.57143 6.66526 9.9916 6.66526 13.6723V15.2101C3.79971 15.4034 1.5224 17.7899 1.5224 20.7059V23.1092C1.5224 26.1429 3.99299 28.6134 7.0266 28.6134H10.1274C10.6821 28.6134 11.1358 28.1597 11.1358 27.605V16.2017C11.1358 15.6471 10.6821 15.1933 10.1274 15.1933H8.68206V13.6723C8.68206 7.02521 13.4216 2.01681 19.6989 2.01681H20.9678C27.2535 2.01681 31.9846 7.02521 31.9846 13.6723V15.1933H30.5392C29.9846 15.1933 29.5308 15.6471 29.5308 16.2017V27.5966C29.5308 28.1513 29.9846 28.605 30.5392 28.605H31.951C31.5392 33.8655 27.9174 35.084 26.2367 35.3613C25.7745 33.9412 24.4384 32.916 22.8669 32.916H20.3459C18.3964 32.916 16.8081 34.5042 16.8081 36.4538C16.8081 38.4034 18.3964 40 20.3459 40H22.8753C24.5056 40 25.8753 38.8908 26.2871 37.395C27.1106 37.2773 28.4132 36.9832 29.7073 36.2269C31.5308 35.1597 33.6905 32.9832 33.9762 28.5966C36.8585 28.4202 39.1443 26.0252 39.1443 23.1008V20.6975C39.1527 17.7899 36.8838 15.395 34.0182 15.2101ZM9.13585 26.5882H7.04341C5.11904 26.5882 3.55601 25.0252 3.55601 23.1008V20.6975C3.55601 18.7731 5.11904 17.2101 7.04341 17.2101H9.13585V26.5882ZM22.8753 37.9832H20.3459C19.5056 37.9832 18.8249 37.3025 18.8249 36.4622C18.8249 35.6218 19.5056 34.9412 20.3459 34.9412H22.8753C23.7157 34.9412 24.3964 35.6218 24.3964 36.4622C24.3964 37.3025 23.7157 37.9832 22.8753 37.9832ZM37.1359 23.1008C37.1359 25.0252 35.5728 26.5882 33.6485 26.5882H31.556V17.2101H33.6485C35.5728 17.2101 37.1359 18.7731 37.1359 20.6975V23.1008Z"
                fill="#00B307"
              />
            </g>
            <defs>
              <clipPath id="clip0_629_3527">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.333374)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="customer-support-info">
            <p className="customer-support-text">Customer Support 24/7</p>
            <p className="instant-access-text">Instant access to Support</p>
          </div>
        </div>

        <div className="secure-payment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            className="SecurePaymentSvg"
          >
            <g clip-path="url(#clip0_629_3558)">
              <path
                d="M36.6468 34.6678L34.345 8.72697C34.3036 8.21362 33.873 7.82447 33.3514 7.82447H28.4994C28.4911 3.51066 24.9805 0 20.6667 0C16.3528 0 12.8422 3.51066 12.8339 7.82447H7.98191C7.46856 7.82447 7.038 8.21362 6.98832 8.72697L4.68652 34.6678C4.68652 34.7009 4.68652 34.7257 4.68652 34.7589C4.68652 37.6485 7.34436 40 10.6066 40H30.7267C33.9889 40 36.6468 37.6485 36.6468 34.7589C36.6468 34.7257 36.6468 34.7009 36.6468 34.6678ZM20.6667 1.98717C23.8875 1.98717 26.504 4.6036 26.5122 7.82447H14.8211C14.8294 4.6036 17.4458 1.98717 20.6667 1.98717ZM30.7267 38.0046H10.6066C8.45386 38.0046 6.69853 36.5721 6.67369 34.792L8.89269 9.81163H12.8339V13.2975C12.8339 13.8439 13.281 14.291 13.8275 14.291C14.374 14.291 14.8211 13.8439 14.8211 13.2975V9.81163H26.5122V13.2975C26.5122 13.8439 26.9593 14.291 27.5058 14.291C28.0523 14.291 28.4994 13.8439 28.4994 13.2975V9.81163H32.4406L34.6596 34.8002C34.6348 36.5721 32.8794 38.0046 30.7267 38.0046Z"
                fill="#00B307"
              />
              <path
                d="M24.7983 20.6831L18.9361 26.5453L16.5432 24.1524C16.1541 23.7632 15.5248 23.7632 15.1357 24.1524C14.7465 24.5415 14.7465 25.1708 15.1357 25.56L18.2323 28.6566C18.4228 28.8471 18.6795 28.9464 18.9361 28.9464C19.1928 28.9464 19.4412 28.8471 19.6399 28.6566L26.2058 22.0907C26.595 21.7015 26.595 21.0723 26.2058 20.6831C25.8167 20.3022 25.1874 20.3022 24.7983 20.6831Z"
                fill="#00B307"
              />
            </g>
            <defs>
              <clipPath id="clip0_629_3558">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.666687)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="secure-payment-info">
            <p className="secure-payment-security-text">100% Secure Payment</p>
            <p className="secure-payment-descrp">
              We ensure your money is save
            </p>
          </div>
        </div>

        <div className="money-back-guarantee">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="MoneyBackSvg"
          >
            <g clip-path="url(#clip0_629_3586)">
              <path
                d="M38.3959 9.43014C38.3959 9.27818 38.3622 9.12621 38.2946 8.98269C38.1595 8.69565 37.8978 8.50148 37.6108 8.44238L20.4137 0.101309C20.1351 -0.0337695 19.8058 -0.0337695 19.5272 0.101309L2.16124 8.51836C1.82354 8.67877 1.60404 9.01646 1.58716 9.39637V9.40481C1.58716 9.41325 1.58716 9.4217 1.58716 9.43858V30.5614C1.58716 30.9498 1.80666 31.3043 2.16124 31.4732L19.5272 39.8903C19.5357 39.8903 19.5357 39.8903 19.5441 39.8987C19.5694 39.9071 19.5948 39.9156 19.6201 39.9325C19.6285 39.9325 19.637 39.9409 19.6539 39.9409C19.6792 39.9493 19.7045 39.9578 19.7298 39.9662C19.7383 39.9662 19.7467 39.9747 19.7552 39.9747C19.7805 39.9831 19.8143 39.9831 19.8396 39.9916C19.848 39.9916 19.8565 39.9916 19.8649 39.9916C19.8987 39.9916 19.9409 40 19.9747 40C20.0084 40 20.0506 40 20.0844 39.9916C20.0929 39.9916 20.1013 39.9916 20.1097 39.9916C20.1351 39.9916 20.1688 39.9831 20.1942 39.9747C20.2026 39.9747 20.211 39.9662 20.2195 39.9662C20.2448 39.9578 20.2701 39.9493 20.2955 39.9409C20.3039 39.9409 20.3124 39.9325 20.3292 39.9325C20.3546 39.924 20.3799 39.9156 20.4052 39.8987C20.4137 39.8987 20.4137 39.8987 20.4221 39.8903L37.8387 31.4479C38.1849 31.279 38.4128 30.9244 38.4128 30.5361V9.45547C38.3959 9.44702 38.3959 9.43858 38.3959 9.43014ZM19.9662 2.13592L35.0274 9.43858L29.4808 12.1317L14.4196 4.82904L19.9662 2.13592ZM19.9662 16.7412L4.90501 9.43858L12.0979 5.95188L27.1591 13.2545L19.9662 16.7412ZM3.61333 11.068L18.9531 18.5057V37.3575L3.61333 29.9198V11.068ZM20.9793 37.3575V18.5057L28.1807 15.0106V19.9409C28.1807 20.4981 28.6365 20.954 29.1937 20.954C29.7509 20.954 30.2068 20.4981 30.2068 19.9409V14.0228L36.3698 11.0342V29.886L20.9793 37.3575Z"
                fill="#00B307"
              />
            </g>
            <defs>
              <clipPath id="clip0_629_3586">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="money-back-guarantee-info">
            <p className="money-back-guarantee-text">Money-Back Guarantee</p>
            <p className="money-back-guarantee-desc">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${showPopup ? "lightHOME" : "OGHOME"} Popular-Categories`}
      >
        <h1 className="Popular-Categories-heading">Popular Categories</h1>

        <ul className="Popular-Categories-first-ul">
          <li
            className="Fresh-Fruit categories-formobile"
            onClick={() => {
              freshFruithandler(1);
            }}
          >
            <img
              src={FreshFruit}
              className="Fresh-fruit-img list-items-image"
            />
            <h2 className="fresh-fruit-title">Fresh Fruit</h2>
          </li>

          <li
            className="Fresh-Vegetables categories-formobile"
            onClick={() => {
              freshVegetableshandler(2);
            }}
          >
            <img
              src={FreshVegetables}
              className="Fresh-Vegetables-img list-items-image"
            />
            <h2 className="fresh-vegetables-title">Fresh Vegetables</h2>
          </li>

          <li
            className="Meat-Fish categories-formobile"
            onClick={() => {
              meathandler(3);
            }}
          >
            <img src={MeatFish} className="Meat-Fish-img list-items-image" />
            <h2 className="Meat-Fish-title">Meat & Fish</h2>
          </li>

          <li
            className="Snacks categories-formobile"
            onClick={() => {
              snacksHandler(4);
            }}
          >
            <img src={Snacks} className="Snacks-img list-items-image" />
            <h2 className="Snacks-title">Snacks</h2>
          </li>

          <li
            className="Beverages categories-formobile"
            onClick={() => {
              beveragesHandler(5);
            }}
          >
            <img src={Beverages} className="Beverages-img list-items-image" />
            <h2 className="Beverages-title">Beverages</h2>
          </li>

          <li
            className="Bread-Bakery categories-formobile"
            onClick={() => {
              BreadBakeryHandler(6);
            }}
          >
            <img
              src={BreadBakery}
              className="Bread-Bakery-img list-items-image"
            />
            <h2 className="Bread-Bakery-title">Bread & Bakery</h2>
          </li>

          <li
            className="Baking-Needs categories-formobile"
            onClick={() => {
              BakingNeedsHandler(7);
            }}
          >
            <img
              src={BakingNeeds}
              className="Baking-Needs-img list-items-image"
            />
            <h2 className="Bread-Needs-title">Baking Needs</h2>
          </li>

          <li
            className="Cooking categories-formobile"
            onClick={() => {
              CookingHandler(8);
            }}
          >
            <img src={Cooking} className="Cooking-img list-items-image" />
            <h2 className="Cooking-title">Cooking</h2>
          </li>

          <li
            className="Diabetic-Food categories-formobile"
            onClick={() => {
              DiabeticFoodHandler(9);
            }}
          >
            <img
              src={DiabeticFood}
              className="Diabetic-Food-img list-items-image"
            />
            <h2 className="Diabetic-Food-title">Diabetic Food</h2>
          </li>

          <li
            className="Dish-Detergents categories-formobile"
            onClick={() => {
              DishDetergentHandler(10);
            }}
          >
            <img
              src={DishDetergents}
              className="Dish-Detergents-img list-items-image"
            />
            <h2 className="Dish-Detergents-title">Dish Detergents</h2>
          </li>
        </ul>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} popular-products`}>
        <div className="popular-products-heading">
          <h2>Popular Products</h2>
          <NavLink to="/shop" className="viewAllBtn">
            View All <GoArrowRight className="goarrowright" />
          </NavLink>
        </div>

        <div className="popular-products-items">
          {products.map((item, id) => {
            if (item.PopularProducts === "Yes") {
              return (
                <div className="item" key={id}>
                  <img src={item.images} className="items-image" />

                  <div className="items-name-eye">
                    <p className="items-name">{item.productName}</p>
                    <FaEye
                      className="eye"
                      onClick={() => handleClick(item.id)}
                    />
                  </div>

                  <p className="items-price">₹{item.price}</p>

                  <div className="rating-star">
                    <RiStarSFill className="filled-star" />
                    <RiStarSFill className="filled-star" />
                    <RiStarSFill className="filled-star" />
                    <RiStarSFill className="not-filled-star" />
                    <RiStarSFill className="not-filled-star" />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div
        className={`${showPopup ? "lightHOME" : "OGHOME"} home-discount-bannar`}
      >
        <div className="home-discount-bannar-description">
          <div className="summersalediscount">
            <p>Summer Sale</p>
            <p>
              <span className="thirtysevernpercentoff">37%</span> OFF
            </p>
          </div>

          <p className="summersalediscountdesc">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
        </div>

        <button
          onClick={() => {
            navigation("/shop");
          }}
        >
          Shop Now <GoArrowRight />{" "}
        </button>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} latest-news`}>
        <h2>Latest News</h2>

        <div className="all-latest-news">
          <div className="news1">
            <div className="news1-pic"></div>

            <div className="news1-desc">
              <div className="news1-desc-section1">
                <div className="food">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M17.1583 11.6748L11.1833 17.6498C11.0285 17.8048 10.8447 17.9277 10.6424 18.0116C10.4401 18.0955 10.2232 18.1386 10.0042 18.1386C9.78513 18.1386 9.56825 18.0955 9.36592 18.0116C9.16359 17.9277 8.97978 17.8048 8.82499 17.6498L1.66666 10.4998V2.1665H9.99999L17.1583 9.32484C17.4687 9.63711 17.643 10.0595 17.643 10.4998C17.643 10.9401 17.4687 11.3626 17.1583 11.6748V11.6748Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.83331 6.33301H5.84165"
                      stroke="#B3B3B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Food</p>
                </div>

                <div className="byadmin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M9.99993 9.66667C11.8409 9.66667 13.3333 8.17428 13.3333 6.33333C13.3333 4.49238 11.8409 3 9.99993 3C8.15898 3 6.6666 4.49238 6.6666 6.33333C6.6666 8.17428 8.15898 9.66667 9.99993 9.66667Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                    <path
                      d="M12.4999 12.1665H7.49995C5.19828 12.1665 3.13745 14.2915 4.65161 16.024C5.68161 17.2023 7.38495 17.9998 9.99995 17.9998C12.6149 17.9998 14.3174 17.2023 15.3474 16.024C16.8624 14.2907 14.8008 12.1665 12.4999 12.1665Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                  </svg>

                  <p>By Admin</p>
                </div>

                <div className="comments">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>65 Comments</p>
                </div>
              </div>

              <div className="news1-desc-section2-heading">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </div>

              <button className="latestnewsbtn">
                Read More <GoArrowRight />
              </button>
            </div>
          </div>

          <div className="news2">
            <div className="news2-pic"></div>

            <div className="news2-desc">
              <div className="news2-desc-section1">
                <div className="food">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M17.1583 11.6748L11.1833 17.6498C11.0285 17.8048 10.8447 17.9277 10.6424 18.0116C10.4401 18.0955 10.2232 18.1386 10.0042 18.1386C9.78513 18.1386 9.56825 18.0955 9.36592 18.0116C9.16359 17.9277 8.97978 17.8048 8.82499 17.6498L1.66666 10.4998V2.1665H9.99999L17.1583 9.32484C17.4687 9.63711 17.643 10.0595 17.643 10.4998C17.643 10.9401 17.4687 11.3626 17.1583 11.6748V11.6748Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.83331 6.33301H5.84165"
                      stroke="#B3B3B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Food</p>
                </div>

                <div className="byadmin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M9.99993 9.66667C11.8409 9.66667 13.3333 8.17428 13.3333 6.33333C13.3333 4.49238 11.8409 3 9.99993 3C8.15898 3 6.6666 4.49238 6.6666 6.33333C6.6666 8.17428 8.15898 9.66667 9.99993 9.66667Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                    <path
                      d="M12.4999 12.1665H7.49995C5.19828 12.1665 3.13745 14.2915 4.65161 16.024C5.68161 17.2023 7.38495 17.9998 9.99995 17.9998C12.6149 17.9998 14.3174 17.2023 15.3474 16.024C16.8624 14.2907 14.8008 12.1665 12.4999 12.1665Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                  </svg>

                  <p>By Admin</p>
                </div>

                <div className="comments">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>65 Comments</p>
                </div>
              </div>

              <div className="news2-desc-section2-heading">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </div>

              <button className="latestnewsbtn">
                Read More <GoArrowRight />{" "}
              </button>
            </div>
          </div>

          <div className="news3">
            <div className="news3-pic"></div>

            <div className="news3-desc">
              <div className="news3-desc-section1">
                <div className="food">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M17.1583 11.6748L11.1833 17.6498C11.0285 17.8048 10.8447 17.9277 10.6424 18.0116C10.4401 18.0955 10.2232 18.1386 10.0042 18.1386C9.78513 18.1386 9.56825 18.0955 9.36592 18.0116C9.16359 17.9277 8.97978 17.8048 8.82499 17.6498L1.66666 10.4998V2.1665H9.99999L17.1583 9.32484C17.4687 9.63711 17.643 10.0595 17.643 10.4998C17.643 10.9401 17.4687 11.3626 17.1583 11.6748V11.6748Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.83331 6.33301H5.84165"
                      stroke="#B3B3B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Food</p>
                </div>

                <div className="byadmin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M9.99993 9.66667C11.8409 9.66667 13.3333 8.17428 13.3333 6.33333C13.3333 4.49238 11.8409 3 9.99993 3C8.15898 3 6.6666 4.49238 6.6666 6.33333C6.6666 8.17428 8.15898 9.66667 9.99993 9.66667Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                    <path
                      d="M12.4999 12.1665H7.49995C5.19828 12.1665 3.13745 14.2915 4.65161 16.024C5.68161 17.2023 7.38495 17.9998 9.99995 17.9998C12.6149 17.9998 14.3174 17.2023 15.3474 16.024C16.8624 14.2907 14.8008 12.1665 12.4999 12.1665Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                  </svg>

                  <p>By Admin</p>
                </div>

                <div className="comments">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>65 Comments</p>
                </div>
              </div>

              <div className="news3-desc-section2-heading">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </div>

              <button className="latestnewsbtn">
                Read More <GoArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-news-for-mobile">
        <button onClick={prevNews} className="button-news-for-mobile">
          <GoArrowRight className="prev-news-btn" />
        </button>

        <div className="news-section-for-mobile">
          <img
            src={latestNewsImages[defaultNews]}
            className="latest-news-image-formobile"
          />

          <div className="news-middle-section-formobile">
            <div className="food-formobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className="formobile-icons"
              >
                <path
                  d="M17.1583 11.6748L11.1833 17.6498C11.0285 17.8048 10.8447 17.9277 10.6424 18.0116C10.4401 18.0955 10.2232 18.1386 10.0042 18.1386C9.78513 18.1386 9.56825 18.0955 9.36592 18.0116C9.16359 17.9277 8.97978 17.8048 8.82499 17.6498L1.66666 10.4998V2.1665H9.99999L17.1583 9.32484C17.4687 9.63711 17.643 10.0595 17.643 10.4998C17.643 10.9401 17.4687 11.3626 17.1583 11.6748V11.6748Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83331 6.33301H5.84165"
                  stroke="#B3B3B3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Food</p>
            </div>

            <div className="byadmin-formobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className="formobile-icons"
              >
                <path
                  d="M9.99993 9.66667C11.8409 9.66667 13.3333 8.17428 13.3333 6.33333C13.3333 4.49238 11.8409 3 9.99993 3C8.15898 3 6.6666 4.49238 6.6666 6.33333C6.6666 8.17428 8.15898 9.66667 9.99993 9.66667Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                />
                <path
                  d="M12.4999 12.1665H7.49995C5.19828 12.1665 3.13745 14.2915 4.65161 16.024C5.68161 17.2023 7.38495 17.9998 9.99995 17.9998C12.6149 17.9998 14.3174 17.2023 15.3474 16.024C16.8624 14.2907 14.8008 12.1665 12.4999 12.1665Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                />
              </svg>

              <p>By Admin</p>
            </div>

            <div className="comments-formobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                className="formobile-icons"
              >
                <path
                  d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>65 Comments</p>
            </div>
          </div>

          <h3 className="news-description">
            Curabitur porttitor orci eget neque accumsan venenatis. Nunc
            fermentum.
          </h3>

          <button className="read-more-formobile">
            Read more <GoArrowRight />{" "}
          </button>
        </div>

        <button onClick={nextNews} className="button-news-for-mobile">
          <GoArrowRight className="fwd-news-btn" />
        </button>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} testimonials`}>
        <h2 className="testimonials-heading">Client Testimonials</h2>

        <div className="testimonial-card">
          <div className="testimonial-main-section">
            <div className="testimonial-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="26"
                viewBox="0 0 32 26"
                fill="none"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
                  fill="#00B307"
                />
              </svg>
            </div>

            <div className="testimonial-desc">
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>

            <div className="pic-name-star">
              <div className="reviewer">
                <div className="pfp1"></div>

                <div className="name-customer">
                  <h3>Robert Fox</h3>
                  <span>Customer</span>
                </div>
              </div>

              <div className="testimonial-stars">
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
              </div>
            </div>
          </div>

          <div className="testimonial-main-section">
            <div className="testimonial-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="26"
                viewBox="0 0 32 26"
                fill="none"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
                  fill="#00B307"
                />
              </svg>
            </div>

            <div className="testimonial-desc">
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>

            <div className="pic-name-star">
              <div className="reviewer">
                <div className="pfp2"></div>

                <div className="name-customer">
                  <h3>Dianne Russell</h3>
                  <span>Customer</span>
                </div>
              </div>

              <div className="testimonial-stars">
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
              </div>
            </div>
          </div>

          <div className="testimonial-main-section">
            <div className="testimonial-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="26"
                viewBox="0 0 32 26"
                fill="none"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
                  fill="#00B307"
                />
              </svg>
            </div>

            <div className="testimonial-desc">
              <p>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>

            <div className="pic-name-star">
              <div className="reviewer">
                <div className="pfp3"></div>

                <div className="name-customer">
                  <h3>Eleanor Pena</h3>
                  <span>Customer</span>
                </div>
              </div>

              <div className="testimonial-stars">
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
                <RiStarSFill className="rating-star" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-for-mobile">
        <button
          onClick={previousTestimonial}
          className="button-testimonial-for-mobile"
        >
          <GoArrowRight className="prev-news-btn" />
        </button>

        <div className="testimonial-section-for-mobile">
          <h2 className="testimonials-heading">Client Testimonials</h2>

          <img
            src={profilePhotosOfTestimonials[defaultTestimonial]}
            className="testimonial-image-formobile"
          />

          <p className="testimonial-description">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            className="testimonial-icon"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
              fill="#00B307"
            />
          </svg>

          <h3 className="name-of-the-customer">
            {accountOfTheCustomers[namesOfCustomer]}
          </h3>

          <p className="customer-text-formobile">Customer</p>

          <div className="stars-for-rating-formobile">
            <RiStarSFill className="stars-filled-formobile" />
            <RiStarSFill className="stars-filled-formobile" />
            <RiStarSFill className="stars-filled-formobile" />
            <RiStarSFill className="stars-notfilled-formobile" />
            <RiStarSFill className="stars-notfilled-formobile" />
          </div>

          <div className="current-testimonial">
            <div
              className={`${
                defaultTestimonial === 0
                  ? "activated-testimonial"
                  : "noActivatedTestimonial"
              } activatedCircles`}
            ></div>
            <div
              className={`${
                defaultTestimonial === 1
                  ? "activated-testimonial"
                  : "noActivatedTestimonial"
              } activatedCircles`}
            ></div>
            <div
              className={`${
                defaultTestimonial === 2
                  ? "activated-testimonial"
                  : "noActivatedTestimonial"
              } activatedCircles`}
            ></div>
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="button-testimonial-for-mobile"
        >
          <GoArrowRight className="fwd-news-btn" />
        </button>
      </div>

      <div
        className={`${showPopup ? "lightHOME" : "OGHOME"} companies-name-info`}
      >
        <div className="gridlaganevalabox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="32"
            viewBox="0 0 82 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00036 8.70355C8.61529 8.1764 9.40674 7.91258 10.1099 7.91258C11.429 7.91258 12.7476 8.52799 14.0662 9.58278L14.6816 10.1104L16.4396 7.64877L15.9998 7.20891C14.3296 5.80253 12.5716 5.09886 10.5493 5.09886C9.05467 5.09886 7.64828 5.62649 6.2419 6.50572C4.83552 7.47273 3.95629 8.70307 3.69247 10.1977C3.34088 11.7801 3.69247 13.1865 4.83552 14.2413C5.53871 14.945 6.68176 15.5604 8.35196 16.2631C9.58278 16.7907 10.3738 17.2301 10.7253 17.5822C11.1652 18.1098 11.3408 18.812 11.1652 19.6918C10.9892 20.5705 10.5498 21.2742 9.75834 21.7136C9.05515 22.2412 8.2637 22.4172 7.47273 22.4172C5.62649 22.4172 4.04455 21.6258 2.63721 19.8673L2.19783 19.2529L0 21.6258L0.439854 22.0651C1.14305 22.9449 2.10957 23.6485 3.3404 24.263C4.65948 24.8784 5.88983 25.2309 7.12065 25.2309C8.70307 25.2309 10.1095 24.7906 11.4281 23.8236C12.9222 22.8566 13.8897 21.5375 14.1535 19.8673C14.5929 18.1098 14.1535 16.7025 13.0105 15.5604C12.3951 14.945 11.1642 14.2413 9.40578 13.5381H9.318C7.29621 12.6589 6.41698 11.6919 6.59254 10.6371C6.76954 9.84612 7.20939 9.14293 8.00036 8.70355ZM26.198 0H23.2092L21.9783 5.53823H17.9347L17.3193 8.2637H21.3634L19.1656 18.7252C18.6379 21.0981 18.814 22.8566 19.781 23.9114C20.3964 24.7901 21.5394 25.2305 23.0341 25.2305C25.7591 25.2305 28.1329 23.7353 30.2425 20.7465L30.8579 19.8668L27.8691 19.1641L27.6053 19.6035C26.2862 21.4493 24.8803 22.4167 23.3857 22.4167C22.7703 22.4167 22.3304 22.3285 22.0666 21.9774C21.8028 21.6253 21.715 20.9216 21.9783 19.9546L24.44 8.26274H30.9457L31.5611 5.53727H24.9671L26.198 0ZM46.5934 7.03335C45.5386 5.71427 44.1313 5.09886 42.286 5.09886C39.6483 5.09886 37.3627 6.24142 35.5164 8.35196C33.934 10.1982 32.8792 12.4838 32.3516 15.121C31.4724 18.6374 31.9117 21.2747 33.4064 23.2082C34.549 24.5273 36.1319 25.2309 38.2414 25.2309C40.0877 25.2309 42.4606 24.7024 45.186 23.5607L45.8015 23.2964L45.0978 20.3081L44.3073 20.7475C42.1977 21.8905 40.2632 22.4177 38.593 22.4177C37.3622 22.4177 36.4834 22.0656 35.9558 21.4497C35.0766 20.4827 34.8128 18.7252 35.1644 16.1753H47.3839L47.5599 15.5604C48.3509 11.6924 47.9993 8.79133 46.5934 7.03335ZM41.8452 7.9121C42.8131 7.9121 43.6036 8.2637 44.219 9.05515C45.0105 10.1104 45.2738 11.5168 44.9227 13.3626H35.7798C36.2196 11.8679 37.0106 10.6371 38.0659 9.5823C39.2967 8.52751 40.527 7.9121 41.8452 7.9121ZM59.2518 5.09886C57.4943 5.09886 55.9109 5.71427 54.5928 6.94509V5.01156L51.6035 5.45093V6.1546C51.7795 7.91258 51.6035 10.0226 51.0759 12.3082L46.8562 32H49.9338L51.603 24.2635C52.6974 24.9006 53.9418 25.2347 55.2082 25.2314C57.054 25.2314 58.9002 24.44 60.5709 23.0336C62.7687 21.1869 64.1751 18.7262 64.8783 15.4731C65.6688 11.8689 65.3177 9.14389 63.7352 7.20939C62.5927 5.80253 61.0985 5.09886 59.2518 5.09886ZM54.329 11.0769C55.8241 8.96737 57.3182 7.9121 58.9007 7.9121C59.8677 7.9121 60.6591 8.35196 61.2736 9.05515C62.3284 10.286 62.4166 12.3078 61.889 15.0328C61.2736 18.1098 60.0432 20.2194 58.1087 21.4497C57.1417 22.0651 56.0869 22.4177 55.0322 22.4177C54.0652 22.4177 53.0986 21.9783 52.2189 21.0986L54.329 11.0769ZM74.5488 13.5386C72.4393 12.6594 71.4713 11.6924 71.7356 10.6376C71.9116 9.8466 72.351 9.14341 73.0537 8.70355C73.7574 8.1764 74.4611 7.91258 75.2515 7.91258C76.5706 7.91258 77.8888 8.52799 79.2078 9.58278L79.8232 10.1104L81.5817 7.64877L81.1423 7.20891C79.4721 5.80253 77.6254 5.09886 75.6919 5.09886C74.1968 5.09886 72.7904 5.62649 71.3835 6.50572C69.9771 7.47273 69.0984 8.70307 68.8346 10.1977C68.4835 11.7801 68.8346 13.1865 70.0654 14.2413C70.6808 14.8567 71.8239 15.5604 73.4941 16.2631L75.867 17.5822C76.3063 18.1098 76.4824 18.812 76.3063 19.6918C76.1313 20.5705 75.6036 21.2742 74.9 21.7136C74.1963 22.2412 73.4058 22.4172 72.6139 22.4172C70.7681 22.4172 69.1862 21.6258 67.8671 19.8673L67.3394 19.2529L65.2299 21.6258L65.581 22.0651C66.2847 22.9449 67.2512 23.6485 68.4825 24.263C69.7133 24.8784 71.0314 25.2309 72.2627 25.2309C73.8452 25.2309 75.2511 24.7906 76.5702 23.8236C78.0643 22.8566 79.0313 21.5375 79.2956 19.8673C79.735 18.1098 79.2956 16.7025 78.2408 15.5604C77.5372 14.9455 76.3063 14.2418 74.5488 13.5386Z"
              fill="#00B307"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="32"
            viewBox="0 0 67 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.50477 4.43062H5.71068C5.33393 4.17376 4.62467 3.84668 3.45718 3.84668C2.61212 3.84668 1.97929 4.08258 1.50477 4.43062ZM6.41683 4.43062H10.816C10.2976 4.08258 9.57204 3.84668 8.55859 3.84668C7.48849 3.84668 6.79591 4.17376 6.41683 4.43062ZM0.911133 5.01456H11.4445C11.2677 4.78747 11.0554 4.5903 10.816 4.43062H6.41683C6.17201 4.59629 6.05793 4.73248 6.05793 4.73248C6.05793 4.73248 5.95318 4.59629 5.71068 4.43062H1.50477C1.28042 4.59638 1.08057 4.79296 0.911133 5.01456Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.559082 5.5789H11.7866C11.6947 5.37844 11.58 5.18927 11.4448 5.01514H0.910997C0.771317 5.19672 0.655306 5.388 0.559082 5.5789Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.318804 6.16206H11.991C11.9408 5.96153 11.8722 5.76606 11.7861 5.57812H0.558975C0.458872 5.77678 0.380496 5.97505 0.318804 6.16206ZM0.166321 6.74639H2.85282C3.02587 6.54541 3.31105 6.36382 3.77704 6.36382C4.24341 6.36382 4.5088 6.54579 4.65935 6.74639H7.63685C7.81261 6.54541 8.10283 6.36382 8.57774 6.36382C9.02627 6.36382 9.2936 6.54579 9.45268 6.74639H12.0895C12.0716 6.54949 12.0385 6.35426 11.9906 6.16245H0.318804C0.256039 6.35378 0.205115 6.5488 0.166321 6.74639Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0961958 7.31035H2.59685V7.26999C2.59685 7.26999 2.63953 6.99413 2.85293 6.74658H0.166423C0.10512 7.06125 0.0961958 7.26999 0.0961958 7.26999V7.31035ZM4.85772 7.31035H7.37854V7.26999C7.37854 7.26999 7.42161 6.99413 7.63772 6.74658H4.66022C4.77277 6.89969 4.84121 7.08072 4.8581 7.26999V7.31035H4.85772ZM9.6786 7.31035H12.0993V7.26999C12.0993 7.26999 12.1187 7.06086 12.09 6.74658H9.45317C9.64795 6.99413 9.6786 7.26999 9.6786 7.26999V7.31035ZM0.0950317 7.89428H2.59685V7.31035H0.0961958L0.0950317 7.89428ZM4.85772 7.89428H7.37854V7.31035H4.85772V7.89428ZM9.6786 7.89428H12.0993V7.31035H9.6786V7.89428Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0938981 8.47896H2.59727V7.89502H0.0954503L0.0938981 8.47896ZM4.85775 8.47896H7.37857V7.89502H4.85775V8.47896ZM9.67863 8.47896H12.0994V7.89502H9.67863V8.47896ZM0.0923462 9.04272H2.59688V8.47896H0.0935103L0.0923462 9.04272ZM4.85775 9.04272H7.37857V8.47896H4.85775V9.04272ZM9.67863 9.04272H12.0994V8.47896H9.67863V9.04272Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0916182 9.62593H2.59731V9.04199H0.0923941L0.0916182 9.62593ZM4.85779 9.62593H7.37862V9.04199H4.85779V9.62593ZM9.67868 9.62593H12.0994V9.04199H9.67868V9.62593ZM0.0904541 10.1897H2.59731V9.62593H0.0916182L0.0904541 10.1897ZM4.85779 10.1897H7.37862V9.62593H4.85779V10.1897ZM9.67868 10.1897H12.0994V9.62593H9.67868V10.1897Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0888106 10.7743H2.59683V10.1899H0.0899747L0.0888106 10.7743ZM4.8577 10.7743H7.37853V10.1899H4.8577V10.7743ZM9.67858 10.7743H12.0993V10.1899H9.67858V10.7743ZM0.0876465 11.3582H2.59722V10.7743H0.0891984L0.0876465 11.3582ZM4.8577 11.3582H7.37853V10.7743H4.8577V11.3582ZM9.67858 11.3582H12.0993V10.7743H9.67858V11.3582Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0864258 11.9217H2.59717V11.3579H0.0875899L0.0864258 11.9217ZM4.85765 11.9217H7.37847V11.3579H4.85765V11.9217ZM9.67853 11.9217H12.0992V11.3579H9.67853V11.9217Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0853271 12.5062H2.59723V11.9219H0.0864909L0.0853271 12.5062ZM4.85771 12.5062H7.37854V11.9219H4.85771V12.5062ZM9.67859 12.5062H12.0993V11.9219H9.67859V12.5062Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0837402 13.0898H2.5972V12.5059H0.0852925L0.0837402 13.0898ZM4.85768 13.0898H7.3785V12.5059H4.85768V13.0898ZM9.67856 13.0898H12.0993V12.5059H9.67856V13.0898Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0830598 13.6536H2.59729V13.0898H0.0838358L0.0830598 13.6536ZM4.85777 13.6536H7.3786V13.0898H4.85777V13.6536ZM9.67865 13.6536H12.0994V13.0898H9.67865V13.6536ZM0.0815079 14.2375H2.5969V13.6536H0.082672L0.0815079 14.2375ZM4.85777 14.2375H7.3786V13.6536H4.85777V14.2375ZM9.67865 14.2375H12.0994V13.6536H9.67865V14.2375ZM0.0799561 14.8219H2.5969V14.2379H0.0815079L0.0799561 14.8219ZM4.85777 14.8219H7.3786V14.2379H4.85777V14.8219ZM9.67865 14.8219H12.0994V14.2379H9.67865V14.8219Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0788008 15.3855H2.59691V14.8218H0.0799649L0.0788008 15.3855ZM4.85778 15.3855H7.37861V14.8218H4.85778V15.3855ZM9.67866 15.3855H12.0994V14.8218H9.67866V15.3855ZM0.0776367 15.9695H2.59691V15.3855H0.0788008L0.0776367 15.9695ZM4.85778 15.9695H7.37861V15.3855H4.85778V15.9695ZM9.67866 15.9695H12.0994V15.3855H9.67866V15.9695Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.076416 16.5537H2.59724V15.9697H0.0779683L0.076416 16.5537ZM4.85772 16.5537H7.37855V15.9697H4.85772V16.5537ZM9.67861 16.5537H12.0993V15.9697H9.67861V16.5537Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0751997 17.117H2.59719V16.5532H0.0763635L0.0751997 17.117ZM4.85767 17.117H7.3785V16.5532H4.85767V17.117ZM9.67855 17.117H12.0993V16.5532H9.67855V17.117ZM0.0740356 17.7013H2.59719V17.117H0.0751997L0.0740356 17.7013ZM4.85767 17.7013H7.3785V17.117H4.85767V17.7013ZM9.67855 17.7013H12.0993V17.117H9.67855V17.7013Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0725797 18.2654H2.5969V17.7017H0.0737434L0.0725797 18.2654ZM4.85777 18.2654H7.37859V17.7017H4.85777V18.2654ZM9.67865 18.2654H12.0994V17.7017H9.67865V18.2654ZM0.0714156 18.8497H2.59729V18.2654H0.0729674L0.0714156 18.8497ZM4.85777 18.8497H7.37859V18.2654H4.85777V18.8497ZM9.67865 18.8497H12.0994V18.2654H9.67865V18.8497ZM0.0702515 19.4333H2.59729V18.8497H0.0714156L0.0702515 19.4333ZM4.85777 19.4333H7.37859V18.8497H4.85777V19.4333ZM9.67865 19.4333H12.0994V18.8497H9.67865V19.4333Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0686079 19.9981H2.59719V19.4336H0.0701598L0.0686079 19.9981ZM4.85768 19.9981H7.3785V19.4336H4.85768V19.9981ZM9.67856 19.9981H12.0993V19.4336H9.67856V19.9981ZM0.0674438 20.5817H2.59681V19.9981H0.0682198L0.0674438 20.5817ZM4.85768 20.5817H7.3785V19.9981H4.85768V20.5817ZM9.67856 20.5817H12.0993V19.9981H9.67856V20.5817Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0663102 21.1654H2.59684V20.5811H0.0674743L0.0663102 21.1654ZM4.85771 21.1654H7.37853V20.5811H4.85771V21.1654ZM9.67859 21.1654H12.0993V20.5811H9.67859V21.1654ZM0.0647583 21.7295H2.59684V21.1658H0.0663102L0.0647583 21.7295ZM4.85771 21.7295H7.37853V21.1658H4.85771V21.7295ZM9.67859 21.7295H12.0993V21.1658H9.67859V21.7295Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0640259 22.3138H2.59727V21.7295H0.06519L0.0640259 22.3138ZM4.85775 22.3138H7.37858V21.7295H4.85775V22.3138ZM9.67863 22.3138H12.0994V21.7295H9.67863V22.3138Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0623824 22.897H2.59679V22.3135H0.0635461L0.0623824 22.897ZM4.85766 22.897H7.37848V22.3135H4.85766V22.897ZM9.67854 22.897H12.0993V22.3135H9.67854V22.897ZM0.0612183 23.4608H2.59679V22.897H0.0623824L0.0612183 23.4608ZM4.85766 23.4608H7.37848V22.897H4.85766V23.4608ZM9.67854 23.4608H12.0993V22.897H9.67854V23.4608Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0600671 24.0453H2.5968V23.4609H0.0612312L0.0600671 24.0453ZM4.85767 24.0453H7.3785V23.4609H4.85767V24.0453ZM9.67855 24.0453H12.0993V23.4609H9.67855V24.0453ZM0.0592911 24.6296H2.59719V24.0453H0.0604552L0.0592911 24.6296ZM4.85767 24.6296H7.3785V24.0453H4.85767V24.6296ZM9.67855 24.6296H12.0993V24.0453H9.67855V24.6296ZM0.0577393 25.1933H2.59719V24.6296H0.0592911L0.0577393 25.1933ZM4.85767 25.1933H7.3785V24.6296H4.85767V25.1933ZM9.67855 25.1933H12.0993V24.6296H9.67855V25.1933Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0566406 25.7764H2.59726V25.1929H0.0578047L0.0566406 25.7764ZM4.85774 25.7764H7.37856V25.1929H4.85774V25.7764ZM9.67862 25.7764H12.0993V25.1929H9.67862V25.7764Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 3.60493H31.0546L30.7244 3.021V3.60493ZM30.7244 4.20905H31.3968L31.0546 3.60493H30.7244V4.20905Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 4.8131H31.7387L31.3968 4.20898H30.7244V4.8131ZM35.6256 4.8131H37.9862V4.22916H35.6256V4.8131Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 5.41749H32.0809L31.7387 4.81299H30.7244V5.41749ZM35.6256 5.41749H37.9862V4.81299H35.6256V5.41749Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 6.00142H32.4111L32.0809 5.41748H30.7244V6.00142ZM35.6256 6.00142H37.9862V5.41748H35.6256V6.00142Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 6.60558H32.7533L32.4111 6.00146H30.7244V6.60558ZM35.6256 6.60558H37.9862V6.00146H35.6256V6.60558ZM30.7244 7.20969H33.0951L32.7533 6.60558H30.7244V7.20969ZM35.6256 7.20969H37.9862V6.60558H35.6256V7.20969Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 7.8132H33.4373L33.0951 7.20947H30.7244V7.8132ZM35.6256 7.8132H37.9862V7.20947H35.6256V7.8132ZM30.7244 8.39753H33.7675L33.4369 7.8132H30.7241V8.39753H30.7244ZM35.6256 8.39753H37.9862V7.8132H35.6256V8.39753Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 9.00206H34.1093L33.7675 8.39795H30.7244V9.00206ZM35.6256 9.00206H37.9862V8.39795H35.6256V9.00206ZM30.7244 9.60618H34.4519L34.1093 9.00206H30.7244V9.60618ZM35.6256 9.60618H37.9862V9.00206H35.6256V9.60618Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 10.2105H34.7938L34.4519 9.60596H30.7244V10.2105ZM35.6256 10.2105H37.9862V9.60596H35.6256V10.2105Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 10.7939H35.1239L34.7934 10.21H30.7244V10.7939ZM35.6256 10.7939H37.9862V10.21H35.6256V10.7939ZM30.7244 11.398H35.4658L35.1239 10.7939H30.7244V11.398ZM35.6256 11.398H37.9862V10.7939H35.6256V11.398Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 12.0021H37.9862V11.3979H35.6256V11.6804L35.4658 11.3979H30.7244V12.0021ZM30.7244 12.6062H33.0447V12.0626L33.3946 12.6062H37.9862V12.0021H30.7244V12.6062Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 13.1909H33.0447V12.6069H30.7244V13.1909ZM33.7698 13.1909H37.9862V12.6069H33.3946L33.7698 13.1909Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 13.795H33.0447V13.1909H30.7244V13.795ZM34.1586 13.795H37.9862V13.1909H33.7698L34.1586 13.795Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 14.3985H33.0447V13.7944H30.7244V14.3985ZM34.5474 14.3985H37.9862V13.7944H34.1586L34.5474 14.3985Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 14.9833H33.0447V14.3989H30.7244V14.9833ZM34.9226 14.9833H37.9862V14.3989H34.5474L34.9226 14.9833Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 15.587H33.0447V14.9829H30.7244V15.587ZM35.311 15.587H37.9862V14.9829H34.9226L35.311 15.587Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 16.191H33.0447V15.5869H30.7244V16.191ZM35.6997 16.191H37.9862V15.5869H35.311L35.6997 16.191ZM30.7244 16.7951H33.0447V16.191H30.7244V16.7951ZM35.7257 16.7951H37.9862V16.191H35.6997L35.7253 16.2314V16.7951H35.7257ZM30.7244 17.3795H33.0447V16.7951H30.7244V17.3795ZM35.7257 17.3795H37.9862V16.7951H35.7257V17.3795Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 17.983H33.0447V17.3789H30.7244V17.983ZM35.7257 17.983H37.9862V17.3789H35.7257V17.983ZM30.7244 18.5871H33.0447V17.983H30.7244V18.5871ZM35.7257 18.5871H37.9862V17.983H35.7257V18.5871Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 19.1918H33.0447V18.5869H30.7244V19.1918ZM35.7257 19.1918H37.9862V18.5869H35.7257V19.1918Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 19.7754H33.0447V19.1919H30.7244V19.7754ZM35.7257 19.7754H37.9862V19.1919H35.7257V19.7754ZM30.7244 20.3803H33.0447V19.7754H30.7244V20.3803ZM35.7257 20.3803H37.9862V19.7754H35.7257V20.3803Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 20.9845H33.0447V20.3804H30.7244V20.9845ZM35.7257 20.9845H37.9862V20.3804H35.7257V20.9845Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 21.588H33.0447V20.9839H30.7244V21.588ZM35.7257 21.588H37.9862V20.9839H35.7257V21.588ZM30.7244 22.1723H33.0447V21.588H30.7244V22.1723ZM35.7257 22.1723H37.9862V21.588H35.7257V22.1723Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 22.777H33.0447V22.1729H30.7244V22.777ZM35.7257 22.777H37.9862V22.1729H35.7257V22.777Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 23.3805H33.0447V22.7764H30.7244V23.3805ZM35.7257 23.3805H37.9862V22.7764H35.7257V23.3805Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 23.9845H33.0447V23.3804H30.7244V23.9845ZM35.7257 23.9845H37.9862V23.3804H35.7257V23.9845Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 24.5692H33.0447V23.9849H30.7244V24.5692ZM35.7257 24.5692H37.9862V23.9849H35.7257V24.5692ZM30.7244 25.1733H33.0447V24.5692H30.7244V25.1733ZM35.7257 25.1733H37.9862V24.5692H35.7257V25.1733Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7244 25.777H33.0447V25.1729H30.7244V25.777ZM35.7257 25.777H37.9862V25.1729H35.7257V25.777Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.9573 0.846225H53.81V0C53.81 0 53.0642 0.255303 51.9573 0.846225Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.5248 1.69164H53.81V0.846191H51.9573C51.4678 1.10726 50.9899 1.38934 50.5248 1.69164Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.351 2.51756H53.8099V1.69189H50.5247C50.1235 1.95275 49.7321 2.22816 49.351 2.51756ZM48.3158 3.36339H53.8099V2.51756H49.351C48.9962 2.7874 48.6509 3.06951 48.3158 3.36339ZM47.4156 4.20923H52.919C53.4653 3.95276 53.8103 3.84684 53.8103 3.84684V3.36339H48.3162C48.0064 3.63489 47.706 3.917 47.4156 4.20923Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.6281 5.05472H51.4168C51.8965 4.737 52.3985 4.45419 52.9188 4.2085H47.4154C47.1438 4.48191 46.8813 4.76413 46.6281 5.05472ZM45.9395 5.90056H50.2815C50.6437 5.59749 51.0227 5.31522 51.4168 5.05511H46.6281C46.3895 5.32937 46.1598 5.61133 45.9395 5.90056Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.3346 6.74623H49.3683C49.658 6.4488 49.9628 6.16648 50.2816 5.90039H45.9395C45.7289 6.17579 45.5272 6.45788 45.3346 6.74623ZM44.8178 7.57189H48.6349C48.8667 7.28553 49.1115 7.01002 49.3686 6.74623H45.335C45.1565 7.01201 44.9846 7.2871 44.8178 7.57189Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.3564 8.41761H48.0082C48.2047 8.12671 48.4138 7.8445 48.6348 7.57178H44.8177C44.6557 7.84918 44.5019 8.13124 44.3564 8.41761ZM43.9579 9.26384H47.4887C47.6555 8.96741 47.8289 8.68572 48.0086 8.418H44.3567C44.2171 8.69193 44.0836 8.97362 43.9579 9.26384Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.6169 10.1095H47.058C47.1908 9.82225 47.3343 9.5401 47.4883 9.26367H43.9575C43.8363 9.54245 43.7227 9.8245 43.6169 10.1095Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.33 10.9547H46.706C46.815 10.6622 46.9326 10.3797 47.0575 10.1089H43.6164C43.5151 10.3844 43.4197 10.6664 43.33 10.9547ZM43.0984 11.7804H46.4266C46.5132 11.496 46.6063 11.2209 46.7064 10.9547H43.3304C43.2458 11.2279 43.1684 11.5032 43.0984 11.7804Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.9052 12.6266H46.2032C46.2707 12.336 46.3448 12.0539 46.4267 11.7808H43.0984C43.0269 12.061 42.9625 12.3431 42.9052 12.6266ZM42.7574 13.4724H46.0333C46.0825 13.1822 46.1392 12.9005 46.2032 12.6266H42.9052C42.8497 12.9032 42.8005 13.1853 42.7574 13.4724Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.6511 14.318H45.9142C45.9468 14.0286 45.9871 13.7465 46.0333 13.4722H42.7574C42.7155 13.7533 42.68 14.0353 42.6511 14.318ZM42.5809 15.1638H45.8416C45.8591 14.8752 45.8832 14.5931 45.9146 14.318H42.6515C42.6218 14.5994 42.5983 14.8814 42.5809 15.1638ZM42.5522 15.9895H45.8114C45.8153 15.7086 45.825 15.4331 45.8416 15.1642H42.5809C42.5657 15.4391 42.5562 15.7142 42.5522 15.9895Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.5541 16.8351H45.8203C45.8123 16.6338 45.8083 16.4324 45.8082 16.231C45.8082 16.1499 45.8098 16.07 45.8113 15.9893H42.5521C42.5506 16.1029 42.5475 16.2166 42.5475 16.3319C42.5475 16.5018 42.5506 16.6694 42.5541 16.8351ZM50.5492 16.8351H53.8099V16.3319H50.5492V16.8351Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.5976 17.6821H45.8796C45.852 17.4005 45.8324 17.1182 45.8207 16.8354H42.5545C42.5627 17.1226 42.577 17.4046 42.5976 17.6821ZM50.5492 17.6821H53.81V16.8354H50.5492V17.6821Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.6764 18.528H45.9895C45.9441 18.2472 45.9075 17.9651 45.8797 17.6821H42.5976C42.6178 17.9685 42.6438 18.2513 42.6764 18.528ZM50.5492 18.528H53.81V17.6821H50.5492V18.528Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.8013 19.3732H46.1532C46.0898 19.093 46.0352 18.8109 45.9895 18.5273H42.6764C42.7113 18.8149 42.7536 19.0965 42.8013 19.3732ZM50.5493 19.3732H53.81V18.5273H50.5493V19.3732Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.9704 20.2189H46.3759C46.2924 19.9395 46.2181 19.6574 46.1532 19.373H42.8013C42.8513 19.6609 42.9076 19.943 42.9704 20.2189ZM50.5492 20.2189H53.81V19.373H50.5492V20.2189Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.1804 21.0445H46.6534C46.5515 20.7727 46.4589 20.4974 46.376 20.2192H42.9705C43.0342 20.5005 43.1036 20.7756 43.1804 21.0445ZM50.5493 21.0445H53.81V20.2192H50.5493V21.0445ZM43.4462 21.8911H47.0057C46.8784 21.6131 46.7609 21.3308 46.6534 21.0445H43.1804C43.2623 21.3332 43.3508 21.616 43.4462 21.8911ZM50.5493 21.8911H53.81V21.0445H50.5493V21.8911Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.7681 22.7365H47.4335C47.2802 22.46 47.1373 22.1778 47.0052 21.8906H43.4457C43.5469 22.1797 43.6544 22.4614 43.7681 22.7365ZM50.5492 22.7365H53.8099V21.8906H50.5492V22.7365Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.1511 23.5822H47.9477C47.7655 23.307 47.5942 23.0248 47.434 22.7363H43.7686C43.8888 23.0258 44.0169 23.3079 44.1511 23.5822ZM50.5492 23.5822H53.81V22.7363H50.5492V23.5822Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.5989 24.4279H48.5615C48.345 24.1548 48.1402 23.8726 47.9477 23.582H44.1511C44.2935 23.873 44.4437 24.1543 44.5989 24.4279ZM50.5492 24.4279H53.81V23.582H50.5492V24.4279Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.1052 25.2535H49.2777C49.0266 24.9894 48.7876 24.714 48.5614 24.4282H44.5988C44.7584 24.7088 44.9273 24.9841 45.1052 25.2535ZM50.5492 25.2535H53.8099V24.4282H50.5492V25.2535Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7032 26.0995H50.1819C49.8639 25.8356 49.562 25.5529 49.2778 25.2529H45.1053C45.2952 25.5417 45.4946 25.824 45.7032 26.0995ZM50.5493 26.0995H53.81V25.2529H50.5493V26.0995Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.3903 26.9454H53.81V26.0996H50.5493V26.3817C50.5493 26.3817 50.4116 26.2886 50.1819 26.0996H45.7032C45.9226 26.3892 46.1518 26.6713 46.3903 26.9454Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47.1806 27.7911H53.8099V26.9453H46.3902C46.6486 27.2425 46.9132 27.5234 47.1806 27.7911Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.0925 28.6369H53.81V27.791H47.1807C47.4745 28.0837 47.7786 28.3658 48.0925 28.6369Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.1489 29.4826H53.8103V28.6367H48.0928C48.434 28.9319 48.7863 29.214 49.1489 29.4826ZM50.3567 30.3086H53.8099V29.4826H49.1485C49.5406 29.7732 49.9436 30.0487 50.3567 30.3086ZM51.8467 31.1544H53.8103V30.3086H50.3571C50.8926 30.6442 51.397 30.9255 51.8467 31.1544Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.81 32.0001V31.1543H51.8463C53.015 31.7495 53.81 32.0001 53.81 32.0001Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 17.158H61.7322V16.9966H59.3518V17.158ZM64.5134 17.158H66.9938V16.9966H64.5134V17.158ZM59.3518 17.7415H61.7322V17.158H59.3518V17.7415ZM64.5134 17.7415H66.9938V17.158H64.5134V17.7415Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 18.326H61.7322V17.7417H59.3518V18.326ZM64.5134 18.326H66.9938V17.7417H64.5134V18.326Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 18.9092H61.7322V18.3257H59.3518V18.9092ZM64.5134 18.9092H66.9938V18.3257H64.5134V18.9092ZM59.3518 19.4936H61.7322V18.9092H59.3518V19.4936ZM64.5134 19.4936H66.9938V18.9092H64.5134V19.4936Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 20.0785H61.7322V19.4941H59.3518V20.0785ZM64.5134 20.0785H66.9938V19.4941H64.5134V20.0785ZM59.3518 20.6628H61.7322V20.0785H59.3518V20.6628ZM64.5134 20.6628H66.9938V20.0785H64.5134V20.6628Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 21.2457H61.7322V20.6621H59.3518V21.2457ZM64.5134 21.2457H66.9938V20.6621H64.5134V21.2457ZM59.3518 21.8498H61.7322V21.2457H59.3518V21.8498ZM64.5134 21.8498H66.9938V21.2457H64.5134V21.8498ZM59.3518 22.4341H61.7322V21.8498H59.3518V22.4341ZM64.5134 22.4341H66.9938V21.8498H64.5134V22.4341Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.4103 23.0184H61.9928C61.7814 22.7243 61.7321 22.4341 61.7321 22.4341H59.3517C59.3517 22.4341 59.3482 22.6696 59.4103 23.0184ZM64.4073 23.0184H66.9522C66.9809 22.8244 66.991 22.6653 66.9937 22.5629V22.4341H64.5133C64.5133 22.4341 64.542 22.7243 64.4073 23.0184ZM59.5605 23.602H62.9842C62.4817 23.5298 62.1764 23.2729 61.9928 23.0184H59.4103C59.4413 23.1903 59.4883 23.3897 59.5605 23.602ZM63.5607 23.602H66.8191C66.8851 23.3897 66.9258 23.1903 66.9518 23.0184H64.407C64.2906 23.2729 64.0504 23.5298 63.5607 23.602Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.8142 24.1864H66.5836C66.6853 23.9885 66.7617 23.7902 66.8192 23.6021H63.5608C63.3696 23.6299 63.1754 23.6299 62.9842 23.6021H59.5605C59.6241 23.7898 59.7064 23.9885 59.8142 24.1864Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.2205 24.7704H66.1965C66.3471 24.5907 66.4769 24.3947 66.5837 24.186H59.8143C59.9277 24.3952 60.064 24.5911 60.2205 24.7704ZM60.9053 25.3539H65.531C65.7809 25.1939 66.0052 24.9971 66.1965 24.7704H60.2205C60.419 24.9973 60.6498 25.1939 60.9053 25.3539Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.531 25.3535H60.9053C61.4601 25.7019 62.2117 25.9378 63.2325 25.9378C64.2483 25.9378 64.9901 25.7023 65.531 25.3535Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.8932 4.26948H65.4697C64.9156 3.92029 64.1609 3.68555 63.1327 3.68555C62.155 3.68516 61.4306 3.92029 60.8932 4.26948ZM60.2286 4.85342H66.151C65.9541 4.6261 65.7244 4.4293 65.4697 4.26948H60.8932C60.6444 4.43066 60.4205 4.6274 60.2286 4.85342Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.8309 5.43745H66.5495C66.4385 5.22875 66.3049 5.03292 66.151 4.85352H60.2286C60.0756 5.03345 59.9423 5.2292 59.8309 5.43745ZM59.5775 6.02139H66.7963C66.7313 5.81983 66.6486 5.62442 66.5491 5.43745H59.8305C59.7304 5.62487 59.6458 5.82017 59.5775 6.02139ZM59.4239 6.60572H61.949C62.1348 6.33373 62.477 6.08192 63.1122 6.08192C63.7578 6.08192 64.1059 6.33334 64.2929 6.60572H66.9398C66.9068 6.40775 66.859 6.21255 66.7966 6.02178H59.5779C59.5131 6.21261 59.4616 6.40773 59.4239 6.60572Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3534 7.18931H61.7376C61.7605 6.98057 61.833 6.78034 61.9491 6.60537H59.424C59.3731 6.87115 59.358 7.08105 59.3534 7.18931ZM64.5075 7.18931H66.9938V7.14314C66.9881 6.96273 66.9701 6.78293 66.9399 6.60498H64.293C64.4482 6.82963 64.4936 7.06825 64.5075 7.18931ZM59.3518 7.79342H61.7322V7.26962C61.7322 7.26962 61.7322 7.23936 61.7376 7.18931H59.3534C59.351 7.24091 59.3518 7.26962 59.3518 7.26962V7.79342ZM64.5134 7.79342H66.9938V7.18931H64.5075C64.5137 7.23936 64.5137 7.26962 64.5137 7.26962V7.79342H64.5134Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 8.37778H61.7322V7.79346H59.3518V8.37778ZM64.5134 8.37778H66.9938V7.79346H64.5134V8.37778ZM59.3518 8.96172H61.7322V8.37778H59.3518V8.96172ZM64.5134 8.96172H66.9938V8.37778H64.5134V8.96172Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 9.54536H61.7322V8.96143H59.3518V9.54536ZM64.5134 9.54536H66.9938V8.96143H64.5134V9.54536ZM59.3518 10.1297H61.7322V9.54575H59.3518V10.1297ZM64.5134 10.1297H66.9938V9.54575H64.5134V10.1297Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 10.7138H61.7322V10.1299H59.3518V10.7138ZM64.5134 10.7138H66.9938V10.1299H64.5134V10.7138ZM59.3518 11.2978H61.7322V10.7138H59.3518V11.2978ZM64.5134 11.2978H66.9938V10.7138H64.5134V11.2978ZM59.3518 11.8817H61.7322V11.2978H59.3518V11.8817ZM64.5134 11.8817H66.9938V11.2978H64.5134V11.8817Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 12.4653H61.7322V11.8813H59.3518V12.4653ZM64.5134 12.4653H66.9938V11.8813H64.5134V12.4653Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 13.0497H61.7322V12.4653H59.3518V13.0497ZM64.5134 13.0497H66.9938V12.4653H64.5134V13.0497Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 13.6337H61.7322V13.0498H59.3518V13.6337ZM64.5134 13.6337H66.9938V13.0498H64.5134V13.6337ZM59.3518 14.2181H61.7322V13.6341H59.3518V14.2181ZM64.5134 14.2181H66.9938V13.6341H64.5134V14.2181ZM59.3518 14.8222H61.7322V14.2181H59.3518V14.8222ZM64.5134 14.8222H66.9938V14.2181H64.5134V14.8222Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 15.4057H61.7322V14.8218H59.3518V15.4057ZM64.5134 15.4057H66.9938V14.8218H64.5134V15.4057ZM59.3518 15.9897H61.7322V15.4057H59.3518V15.9897ZM64.5134 15.9897H66.9938V15.4057H64.5134V15.9897Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.3518 16.5736H61.7322V15.9893H59.3518V16.5736ZM64.5134 16.5736H66.9938V15.9893H64.5134V16.5736ZM66.9938 16.9965V16.5736H64.5134V16.9965H66.9938ZM61.7322 16.5736H59.3518V16.9965H61.7322V16.5736Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4387 4.43062H24.0508C23.5099 4.08258 22.7662 3.84668 21.7422 3.84668C20.723 3.84668 19.9803 4.08258 19.4387 4.43062ZM18.7721 5.01456H24.7135C24.5236 4.78723 24.3 4.5903 24.0504 4.43062H19.4387C19.1883 4.59059 18.9636 4.78746 18.7721 5.01456Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.3958 5.5789H25.0856C24.9828 5.37788 24.8582 5.18882 24.7139 5.01514H18.7721C18.6265 5.18878 18.5003 5.37782 18.3958 5.5789Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.1556 6.16206H25.3204C25.2599 5.96074 25.1814 5.76529 25.0857 5.57812H18.3958C18.2987 5.76531 18.2183 5.96072 18.1556 6.16206ZM18.0214 6.74639H20.6539C20.8351 6.50156 21.1688 6.26294 21.7822 6.26294C22.4151 6.26294 22.7499 6.50156 22.9261 6.74639H25.4488C25.4214 6.54871 25.3786 6.35348 25.3208 6.16245H18.1556C18.0885 6.37702 18.047 6.57683 18.0214 6.74639Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 7.31035H20.4417V7.26999C20.4417 7.26999 20.463 7.0046 20.6539 6.74658H18.0214C17.9736 7.06125 17.981 7.26999 17.981 7.26999V7.31035ZM23.1224 7.31035H25.483V7.14428C25.4789 7.01117 25.4674 6.87839 25.4484 6.74658H22.9257C23.1119 7.0046 23.1224 7.26999 23.1224 7.26999V7.31035ZM17.981 7.89428H20.4417V7.31035H17.981V7.89428ZM23.1224 7.89428H25.483V7.31035H23.1224V7.89428Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 8.47896H20.4417V7.89502H17.981V8.47896ZM23.1224 8.47896H25.483V7.89502H23.1224V8.47896ZM17.981 9.04272H20.4417V8.47896H17.981V9.04272ZM23.1224 9.04272H25.483V8.47896H23.1224V9.04272Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 9.62593H20.4417V9.04199H17.981V9.62593ZM23.1224 9.62593H25.483V9.04199H23.1224V9.62593ZM17.981 10.1897H20.4417V9.62593H17.981V10.1897ZM23.1224 10.1897H25.483V9.62593H23.1224V10.1897Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 10.7743H20.4417V10.1899H17.981V10.7743ZM23.1224 10.7743H25.483V10.1899H23.1224V10.7743ZM17.981 11.3582H20.4417V10.7743H17.981V11.3582ZM23.1224 11.3582H25.483V10.7743H23.1224V11.3582Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 11.9217H20.4417V11.3579H17.981V11.9217ZM23.1224 11.9217H25.483V11.3579H23.1224V11.9217Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 12.5062H20.4417V11.9219H17.981V12.5062ZM23.1224 12.5062H25.483V11.9219H23.1224V12.5062Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 13.0898H20.4417V12.5059H17.981V13.0898ZM23.1224 13.0898H25.483V12.5059H23.1224V13.0898Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 13.6536H20.4417V13.0898H17.981V13.6536ZM23.1224 13.6536H25.483V13.0898H23.1224V13.6536ZM17.981 14.2375H20.4417V13.6536H17.981V14.2375ZM23.1224 14.2375H25.483V13.6536H23.1224V14.2375ZM17.981 14.8219H20.4417V14.2379H17.981V14.8219ZM23.1224 14.8219H25.483V14.2379H23.1224V14.8219Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 15.3855H20.4417V14.8218H17.981V15.3855ZM23.1224 15.3855H25.483V14.8218H23.1224V15.3855ZM17.981 15.9695H20.4417V15.3855H17.981V15.9695ZM23.1224 15.9695H25.483V15.3855H23.1224V15.9695Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 16.5537H20.4417V15.9697H17.981V16.5537ZM23.1224 16.5537H25.483V15.9697H23.1224V16.5537Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.981 17.117H20.4417V16.5532H17.981V17.117ZM23.1224 17.117H25.483V16.5532H23.1224V17.117ZM17.981 17.7013H20.4417V17.117H17.981V17.7013ZM23.1224 17.7013H25.483V17.117H23.1224V17.7013Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9811 18.2654H20.4417V17.7017H17.9811V18.2654ZM23.1224 18.2654H25.483V17.7017H23.1224V18.2654ZM17.9811 18.8497H20.4417V18.2654H17.9811V18.8497ZM23.1224 18.8497H25.483V18.2654H23.1224V18.8497ZM14.8872 19.4333H25.483V18.8497H23.1224V18.9906H20.4417V18.8497H17.9811V18.9906H14.6L14.8872 19.4333Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.253 19.9981H25.483V19.4336H14.8871L15.253 19.9981ZM15.6313 20.5817H25.483V19.9981H15.253L15.6313 20.5817Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.01 21.1655H25.483V20.5815H15.6313L16.01 21.1655ZM18.0811 21.7296H20.4017V21.4072H23.1825V21.7296H25.483V21.1655H16.01L16.1407 21.3672H18.0811V21.7296Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0811 22.3138H20.4017V21.7295H18.0811V22.3138ZM23.1825 22.3138H25.483V21.7295H23.1825V22.3138Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0811 22.897H20.4017V22.3135H18.0811V22.897ZM23.1825 22.897H25.483V22.3135H23.1825V22.897ZM18.0811 23.4608H20.4017V22.897H18.0811V23.4608ZM23.1825 23.4608H25.483V22.897H23.1825V23.4608Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0811 24.0453H20.4017V23.4609H18.0811V24.0453ZM23.1825 24.0453H25.483V23.4609H23.1825V24.0453ZM18.0811 24.6296H20.4017V24.0453H18.0811V24.6296ZM23.1825 24.6296H25.483V24.0453H23.1825V24.6296ZM18.0811 25.1933H20.4017V24.6296H18.0811V25.1933ZM23.1825 25.1933H25.483V24.6296H23.1825V25.1933Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0811 25.7764H20.4017V25.1929H18.0811V25.7764ZM23.1825 25.7764H25.483V25.1929H23.1825V25.7764Z"
              fill="#CCCCCC"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="32"
            viewBox="0 0 61 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.1014 27.7551C23.5174 29.8774 20.1029 31.1692 16.5037 31.1692C8.01343 31.1692 1.20744 24.3399 1.20744 15.9653C1.20744 7.56744 8.01343 0.738103 16.5037 0.738103C22.1332 0.738103 27.0245 3.78355 29.7006 8.39789C30.0696 8.49024 30.3467 8.58259 30.7154 8.67494C28.0397 3.50685 22.6869 0 16.5037 0C7.64404 0 0.468994 7.10604 0.468994 15.9653C0.468994 24.802 7.64438 32 16.5037 32C20.6566 32 24.4402 30.3391 27.3012 27.7551H26.1014Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5339 27.0173H60.4084V20.7417H18.5339V27.0173Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6563 9.50508L20.4716 10.3359H18.4413C17.8876 16.2424 17.5185 21.0178 17.1494 23.2331C16.319 27.2013 12.6275 29.416 10.2281 29.416C9.39766 29.416 8.38251 29.0473 8.38251 28.0321C8.38251 27.4784 8.84391 27.017 9.39766 27.017C10.2281 27.017 10.8742 27.6627 11.3356 28.4009C12.6278 27.6627 12.8122 27.017 13.3659 24.4326C13.6429 23.2331 14.381 14.6732 14.7501 10.3359H13.0889L13.2736 9.50508H14.9348L15.1195 8.02888C16.0423 2.58408 20.0105 1.93799 21.4874 1.93799C22.2255 1.93799 23.7021 2.30704 23.7021 3.32219C23.7021 3.96794 23.1483 4.24499 22.5946 4.24499C21.5794 4.24499 21.118 3.69124 20.6563 2.86044C18.995 3.59889 18.7183 7.65948 18.5336 9.50474H20.6563V9.50508ZM20.4719 17.0725C20.4719 12.7356 23.2407 8.95168 27.947 8.95168C30.9005 8.95168 32.561 10.2439 32.561 13.1046C32.561 17.4419 29.7926 21.1105 25.0859 21.1105C22.1332 21.1105 20.4719 19.8183 20.4719 17.0725ZM28.7778 13.7507C28.7778 12.6432 28.6855 9.96717 27.0246 9.96717C24.6252 9.96717 24.2558 14.6735 24.2558 16.4271C24.2558 17.4423 24.3482 20.188 26.0091 20.188C28.4084 20.1877 28.7778 15.504 28.7778 13.7507ZM33.5765 17.0725C33.5765 12.7356 36.4376 8.95168 41.144 8.95168C44.0051 8.95168 45.735 10.2439 45.735 13.1046C45.735 17.4419 42.8972 21.1105 38.1909 21.1105C35.3298 21.1105 33.5765 19.8183 33.5765 17.0725ZM41.9744 13.7507C41.9744 12.6432 41.8824 9.96717 40.2212 9.96717C37.7295 9.96717 37.4528 14.6735 37.4528 16.4271C37.4528 17.4423 37.4528 20.188 39.1137 20.188C41.605 20.1877 41.9744 15.504 41.9744 13.7507ZM60.0397 19.7263C58.3781 20.4644 56.3478 21.1101 54.964 21.1101C54.2259 21.1101 54.3176 20.0023 54.3176 19.5412C54.3176 18.9882 54.3176 18.249 54.5026 16.7962L54.4099 16.7035C53.4871 18.6184 51.6415 21.1101 49.2421 21.1101C47.3962 21.1101 46.5654 19.1722 46.5654 17.5343C46.5654 13.4733 49.7952 9.13638 54.4099 9.13638H55.3327C55.7021 6.27529 55.7021 5.07578 55.7021 4.15264C55.7021 3.87594 55.7021 3.59889 55.425 3.59889C55.148 3.59889 54.7793 3.69124 53.8561 3.96794L53.6718 3.22984C55.5177 2.58409 57.548 2.21469 59.3933 2.12234C59.5783 2.12234 59.6703 2.12234 59.6703 2.49139C59.6703 4.89074 57.8244 17.4416 57.8244 18.7111C57.8244 18.9882 57.8244 19.4492 58.1938 19.4492C58.3781 19.4492 59.0246 19.2642 59.7627 18.9878L60.0397 19.7263ZM54.0405 15.781C54.6869 14.2121 54.8713 12.6432 55.2407 10.2439C55.0556 10.1512 54.8713 10.1512 54.7793 10.1512C51.9182 10.1512 50.5337 14.3965 50.5337 16.7035C50.5337 17.2572 50.6263 18.6184 51.4568 18.6184C52.6566 18.6188 53.6718 16.7038 54.0405 15.781Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.0257 22.2178H22.0408L23.3327 24.1558V22.2178H24.1635V25.909H23.425L21.8561 23.7871V25.909H21.0257V22.2178ZM26.5625 22.2178H29.4236V22.9563H27.67V23.6017H28.7778V24.4325H27.67V25.0782H29.4236V25.909H26.5625V22.2178ZM32.4694 22.9563H31.4542V22.2178H34.5917V22.9563H33.5765V25.909H32.4694V22.9563ZM36.4376 22.2178H37.5444L38.0065 24.1558H38.0982L38.5596 22.2178H39.4831L39.9441 24.1558H40.0368L40.4982 22.2178H41.3283L40.4055 25.909H39.4831L38.929 23.8787L38.3752 25.909H37.4528L36.4376 22.2178ZM45.0892 26.0017C44.0051 26.0017 43.2666 25.2636 43.2666 24.0634C43.2666 22.8639 44.0047 22.1255 45.0892 22.1255C46.1971 22.1255 46.8425 22.8636 46.8425 24.0634C46.8425 25.2633 46.1967 26.0017 45.0892 26.0017ZM44.4435 24.0631C44.4435 25.0782 44.7205 25.2633 45.0892 25.2633C45.4586 25.2633 45.735 25.0782 45.735 24.0631C45.735 23.0486 45.4586 22.8636 45.0892 22.8636C44.6278 22.8636 44.4435 23.1406 44.4435 24.0631ZM49.0571 22.2178H50.9031C52.1026 22.2178 52.3796 22.7709 52.3796 23.233C52.3796 23.6944 52.1026 24.0631 51.6415 24.1558L52.3796 25.909H51.1801L50.6264 24.3401H50.165V25.909H49.0571V22.2178ZM50.165 23.6944H50.7187C50.9951 23.6944 51.2724 23.5093 51.2724 23.325C51.2724 23.0486 51.0874 22.8636 50.7187 22.8636H50.165V23.6944ZM54.6869 22.2178H55.7944V23.6944L56.9016 22.2178H57.9167L56.9939 23.4173L58.1011 25.909H56.9939L56.2558 24.3401L55.7944 24.9866V25.909H54.6869V22.2178Z"
              fill="white"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="32"
            viewBox="0 0 84 32"
            fill="none"
          >
            <g clip-path="url(#clip0_629_3413)">
              <path
                d="M73.5415 18.3893C73.2176 18.3893 72.9747 18.3083 72.7857 18.1194C72.6238 17.9574 72.5158 17.6875 72.5158 17.3636V7.40416C72.5158 7.08028 72.5968 6.81037 72.7857 6.64843C72.9747 6.48649 73.2176 6.40552 73.5415 6.40552H75.3498C75.7547 6.40552 76.1055 6.43251 76.4024 6.4595C76.6993 6.51348 76.9692 6.59445 77.1582 6.75639C77.3741 6.91833 77.509 7.13426 77.617 7.45814C77.725 7.75504 77.7789 8.18688 77.7789 8.6997V16.0951C77.7789 16.7698 77.698 17.2557 77.509 17.5795C77.3201 17.9034 77.0502 18.1194 76.6993 18.2273C76.3485 18.3353 75.8896 18.3893 75.3498 18.3623L73.5415 18.3893ZM67.7385 0.602578C67.4146 0.629568 67.1447 0.71054 66.9828 0.872482C66.8208 1.03442 66.7399 1.30433 66.7399 1.62821V23.1666C66.7399 23.4904 66.8208 23.7334 67.0098 23.9223C67.1717 24.0842 67.4416 24.1922 67.7655 24.1922H75.2688C76.8343 24.1922 78.1838 24.0303 79.2634 23.7064C80.343 23.3825 81.2067 22.8697 81.8545 22.2219C82.5023 21.5741 82.9881 20.7104 83.258 19.6848C83.5549 18.6592 83.6898 17.4716 83.6898 16.0951V8.6997C83.6898 7.32319 83.5549 6.13561 83.258 5.10998C82.9611 4.08434 82.5023 3.24764 81.8545 2.59987C81.2067 1.92511 80.343 1.43928 79.2634 1.1154C78.1838 0.791511 76.8613 0.629568 75.2688 0.629568L67.7385 0.602578ZM57.914 14.8265C57.914 15.4743 57.887 16.0681 57.86 16.5809C57.806 17.0937 57.6981 17.5256 57.5361 17.9034C57.3742 18.2813 57.1043 18.5512 56.7264 18.7401C56.3756 18.9291 55.8897 19.037 55.2689 19.037C54.6482 19.037 54.1623 18.9291 53.8115 18.7401C53.4336 18.5512 53.1907 18.2813 53.0018 17.9034C52.8398 17.5526 52.7318 17.0937 52.6779 16.5809C52.6239 16.0681 52.5969 15.4743 52.6239 14.8265V9.96825C52.6239 9.32048 52.6509 8.72669 52.6779 8.21387C52.7318 7.70106 52.8398 7.26921 53.0018 6.89134C53.1637 6.51348 53.4336 6.24357 53.8115 6.05464C54.1623 5.86571 54.6482 5.75775 55.2689 5.75775C55.8897 5.75775 56.3756 5.86571 56.7264 6.05464C57.1043 6.24357 57.3472 6.51348 57.5361 6.89134C57.6981 7.24222 57.806 7.70106 57.86 8.21387C57.914 8.72669 57.914 9.32048 57.914 9.96825V14.8265ZM63.69 8.18688C63.69 7.80902 63.663 7.35018 63.609 6.81037C63.555 6.27056 63.447 5.70376 63.2581 5.08299C63.0692 4.46221 62.7993 3.86842 62.4484 3.27463C62.0705 2.68084 61.5847 2.14103 60.9639 1.6552C60.3431 1.16938 59.5604 0.764521 58.6158 0.467626C57.6711 0.170732 56.5375 0.0357795 55.215 0.00878906C53.8924 0.00878906 52.7588 0.170732 51.8142 0.467626C50.8695 0.764521 50.0868 1.16938 49.466 1.6552C48.8452 2.14103 48.3594 2.68084 47.9815 3.27463C47.6037 3.86842 47.3338 4.4892 47.1718 5.08299C46.9829 5.70376 46.8749 6.27056 46.8209 6.81037C46.767 7.35018 46.74 7.80902 46.74 8.18688V16.6079C46.74 16.9858 46.767 17.4446 46.8209 17.9844C46.8749 18.5242 46.9829 19.091 47.1718 19.7118C47.3338 20.3326 47.6307 20.9264 47.9815 21.5201C48.3594 22.1139 48.8452 22.6537 49.466 23.1666C50.0868 23.6524 50.8695 24.0572 51.8142 24.3271C52.7588 24.624 53.8924 24.786 55.215 24.786C56.5375 24.786 57.6711 24.624 58.6158 24.3271C59.5604 24.0303 60.3431 23.6524 60.9639 23.1666C61.5847 22.6807 62.0705 22.1409 62.4484 21.5201C62.8263 20.9264 63.0962 20.3056 63.2581 19.7118C63.4201 19.091 63.555 18.5242 63.609 17.9844C63.663 17.4446 63.69 16.9858 63.69 16.6079V8.18688ZM38.292 14.8265C38.292 15.4743 38.265 16.0681 38.238 16.5809C38.184 17.0937 38.0761 17.5256 37.9141 17.9034C37.7522 18.2813 37.4823 18.5512 37.1044 18.7401C36.7535 18.9291 36.2677 19.037 35.6469 19.037C35.0261 19.037 34.5403 18.9291 34.1894 18.7401C33.8116 18.5512 33.5687 18.2813 33.3797 17.9034C33.2178 17.5526 33.1098 17.0937 33.0558 16.5809C33.0019 16.0681 32.9749 15.4743 33.0019 14.8265V9.96825C33.0019 9.32048 33.0289 8.72669 33.0558 8.21387C33.1098 7.70106 33.2178 7.26921 33.3797 6.89134C33.5417 6.51348 33.8116 6.24357 34.1894 6.05464C34.5403 5.86571 35.0261 5.75775 35.6469 5.75775C36.2677 5.75775 36.7535 5.86571 37.1044 6.05464C37.4823 6.24357 37.7252 6.51348 37.9141 6.89134C38.0761 7.24222 38.184 7.70106 38.238 8.21387C38.292 8.72669 38.292 9.32048 38.292 9.96825V14.8265ZM44.0949 8.18688C44.0949 7.80902 44.0679 7.35018 44.014 6.81037C43.96 6.27056 43.852 5.70376 43.6631 5.08299C43.4741 4.46221 43.2042 3.86842 42.8534 3.27463C42.4755 2.68084 41.9897 2.14103 41.3689 1.6552C40.7481 1.16938 39.9654 0.764521 39.0207 0.467626C38.0761 0.170732 36.9425 0.0357795 35.6199 0.00878906C34.2974 0.00878906 33.1638 0.170732 32.2191 0.467626C31.2745 0.764521 30.4918 1.16938 29.871 1.6552C29.2502 2.14103 28.7644 2.68084 28.3865 3.27463C28.0086 3.86842 27.7387 4.4892 27.5768 5.08299C27.3879 5.70376 27.2799 6.27056 27.2259 6.81037C27.1719 7.35018 27.1449 7.80902 27.1449 8.18688V16.6079C27.1449 16.9858 27.1719 17.4446 27.2259 17.9844C27.2799 18.5242 27.3879 19.091 27.5768 19.7118C27.7387 20.3326 28.0356 20.9264 28.3865 21.5201C28.7644 22.1139 29.2502 22.6537 29.871 23.1666C30.4918 23.6524 31.2745 24.0572 32.2191 24.3271C33.1638 24.624 34.2974 24.786 35.6199 24.786C36.9425 24.786 38.0761 24.624 39.0207 24.3271C39.9654 24.0303 40.7481 23.6524 41.3689 23.1666C41.9897 22.6807 42.4755 22.1409 42.8534 21.5201C43.2312 20.9264 43.5011 20.3056 43.6631 19.7118C43.825 19.091 43.96 18.5242 44.014 17.9844C44.0679 17.4446 44.0949 16.9858 44.0949 16.6079V8.18688ZM24.176 0.602578C24.8508 0.602578 25.1746 0.953453 25.1746 1.60122V5.37988C25.1746 5.70376 25.0937 5.94668 24.9317 6.13561C24.7698 6.32454 24.4999 6.40552 24.176 6.40552H15.3771C15.0532 6.40552 14.8103 6.48649 14.6214 6.64843C14.4325 6.81037 14.3515 7.08028 14.3515 7.40416V23.1936C14.3515 23.5174 14.2705 23.7603 14.1086 23.9493C13.9466 24.1112 13.6767 24.2192 13.3528 24.2192H9.38525C9.06137 24.2192 8.81846 24.1382 8.62952 23.9493C8.46758 23.7603 8.35962 23.5174 8.35962 23.1936V1.62821C8.35962 1.30433 8.44059 1.03442 8.62952 0.872482C8.81846 0.71054 9.06137 0.629568 9.38525 0.629568L24.176 0.602578Z"
                fill="#CCCCCC"
              />
              <path
                d="M82.1513 29.4545C82.1513 29.4275 82.1243 29.4275 82.1243 29.4005C82.1243 29.3735 82.1243 29.3735 82.1513 29.3465L83.5008 27.5112C83.5548 27.4302 83.5548 27.3762 83.5278 27.3492C83.5008 27.3222 83.4468 27.2683 83.3659 27.2683H82.3942C82.3402 27.2683 82.2862 27.2683 82.2592 27.2952C82.2323 27.3222 82.1783 27.3492 82.1513 27.4032L81.0987 28.8337C81.0717 28.8607 81.0717 28.8607 81.0447 28.8607C81.0177 28.8607 81.0177 28.8337 81.0177 28.8067V27.4842C81.0177 27.3492 80.9637 27.2952 80.8288 27.2952H80.073C80.019 27.2952 79.9651 27.3222 79.9381 27.3492C79.9111 27.3762 79.8841 27.4302 79.8841 27.5112V31.7756C79.8841 31.8296 79.9111 31.8836 79.9381 31.9106C79.9651 31.9376 80.019 31.9646 80.073 31.9646H80.8288C80.8827 31.9646 80.9367 31.9376 80.9907 31.9106C81.0447 31.8836 81.0447 31.8296 81.0447 31.7756V31.0469V30.9929C81.0447 30.9659 81.0447 30.9659 81.0717 30.9389L81.3416 30.5611C81.3416 30.5341 81.3686 30.5341 81.3956 30.5341C81.4225 30.5341 81.4225 30.5341 81.4495 30.5611L82.2862 31.8296C82.3132 31.8836 82.3402 31.9106 82.3942 31.9376C82.4212 31.9646 82.4752 31.9646 82.5292 31.9646H83.5278C83.6088 31.9646 83.6627 31.9376 83.6897 31.8836C83.7167 31.8296 83.7167 31.7756 83.6628 31.7217L82.1513 29.4545ZM76.1054 27.2683C76.0515 27.2683 75.9975 27.2952 75.9705 27.3222C75.9435 27.3492 75.9165 27.4032 75.9165 27.4842V30.4531C75.9165 30.5341 75.9165 30.6151 75.9435 30.723C75.9435 30.831 75.9705 30.9389 76.0245 31.0739C76.0515 31.1819 76.1054 31.3168 76.1864 31.4248C76.2674 31.5327 76.3484 31.6407 76.4833 31.7487C76.6183 31.8566 76.7532 31.9106 76.9421 31.9916C77.1311 32.0456 77.347 32.0725 77.6169 32.0725C77.8868 32.0725 78.1027 32.0456 78.2917 31.9916C78.4806 31.9376 78.6425 31.8566 78.7505 31.7487C78.8855 31.6407 78.9664 31.5327 79.0474 31.4248C79.1284 31.3168 79.1823 31.1819 79.2093 31.0739C79.2363 30.9659 79.2633 30.831 79.2633 30.723C79.2633 30.6151 79.2903 30.5341 79.2903 30.4531V27.4842C79.2903 27.3492 79.2363 27.2952 79.1014 27.2952H78.3456C78.2917 27.2952 78.2377 27.3222 78.2107 27.3492C78.1837 27.3762 78.1567 27.4302 78.1567 27.5112V30.4801C78.1567 30.5881 78.1297 30.669 78.1027 30.75C78.0757 30.831 78.0218 30.885 77.9408 30.912C77.8598 30.9389 77.7788 30.9659 77.6439 30.9659C77.5089 30.9659 77.428 30.9389 77.347 30.912C77.266 30.885 77.2121 30.831 77.1851 30.75C77.1581 30.669 77.1311 30.5881 77.1311 30.4801C77.1311 30.3721 77.1041 30.2642 77.1311 30.1292V27.5112C77.1311 27.3762 77.0771 27.3222 76.9421 27.3222L76.1054 27.2683ZM75.2418 30.777C75.3767 30.777 75.4307 30.831 75.4307 30.9659V31.7217C75.4307 31.7756 75.4037 31.8296 75.3767 31.8566C75.3497 31.8836 75.2957 31.9106 75.2148 31.9106H74.459C74.4051 31.9106 74.3511 31.8836 74.3241 31.8566C74.2971 31.8296 74.2701 31.7756 74.2701 31.7217V30.9659C74.2701 30.912 74.2971 30.858 74.3241 30.804C74.3511 30.777 74.4051 30.75 74.459 30.75L75.2418 30.777ZM72.6237 30.0753V30.4261C72.6237 30.5341 72.5967 30.6151 72.5697 30.696C72.5427 30.777 72.4887 30.831 72.4078 30.858C72.3268 30.885 72.2458 30.912 72.1109 30.912C71.9759 30.912 71.8949 30.885 71.814 30.858C71.733 30.831 71.679 30.777 71.652 30.696C71.625 30.6151 71.5981 30.5341 71.5981 30.4261C71.5981 30.3182 71.5711 30.2102 71.5981 30.0753V29.1306V28.7797C71.5981 28.6718 71.625 28.5908 71.652 28.5098C71.679 28.4288 71.733 28.3749 71.814 28.3479C71.8949 28.3209 71.9759 28.2939 72.1109 28.2939C72.2458 28.2939 72.3268 28.3209 72.4078 28.3479C72.4887 28.3749 72.5427 28.4288 72.5697 28.5098C72.5967 28.5908 72.6237 28.6718 72.6237 28.7797V30.0753ZM73.7843 28.7527C73.7843 28.6718 73.7843 28.5908 73.7573 28.4828C73.7573 28.3749 73.7303 28.2669 73.7033 28.1319C73.6763 28.024 73.6223 27.889 73.5414 27.7811C73.4604 27.6731 73.3794 27.5651 73.2445 27.4572C73.1095 27.3492 72.9746 27.2952 72.7856 27.2143C72.5967 27.1603 72.3808 27.1333 72.1109 27.1333C71.841 27.1333 71.625 27.1603 71.4361 27.2143C71.2472 27.2683 71.0852 27.3492 70.9773 27.4572C70.8423 27.5651 70.7614 27.6731 70.6804 27.7811C70.5994 27.889 70.5454 28.024 70.5184 28.1319C70.4914 28.2399 70.4645 28.3749 70.4375 28.4828C70.4375 28.5908 70.4105 28.6718 70.4105 28.7527V30.4261C70.4105 30.5071 70.4105 30.5881 70.4375 30.696C70.4375 30.804 70.4645 30.912 70.5184 31.0469C70.5454 31.1549 70.5994 31.2898 70.6804 31.3978C70.7614 31.5057 70.8423 31.6137 70.9773 31.7217C71.1122 31.8296 71.2472 31.8836 71.4361 31.9646C71.625 32.0186 71.841 32.0456 72.1109 32.0456C72.3808 32.0456 72.5967 32.0186 72.7856 31.9646C72.9746 31.9106 73.1365 31.8296 73.2445 31.7217C73.3794 31.6137 73.4604 31.5057 73.5414 31.3978C73.6223 31.2898 73.6763 31.1549 73.7033 31.0469C73.7303 30.9389 73.7573 30.804 73.7573 30.696C73.7573 30.5881 73.7843 30.5071 73.7843 30.4261V28.7527ZM66.7128 30.4261C66.7128 30.5071 66.7128 30.5881 66.7398 30.696C66.7398 30.804 66.7668 30.912 66.8208 31.0469C66.8477 31.1549 66.9017 31.2898 66.9827 31.3978C67.0637 31.5057 67.1446 31.6137 67.2796 31.7217C67.4145 31.8296 67.5495 31.8836 67.7384 31.9646C67.9274 32.0186 68.1433 32.0456 68.4132 32.0456C68.6561 32.0456 68.845 32.0186 69.034 31.9646C69.1959 31.9106 69.3579 31.8566 69.4658 31.7756C69.5738 31.6947 69.6817 31.6137 69.7627 31.5057C69.8437 31.3978 69.8977 31.2898 69.9516 31.1819C70.0056 31.0739 70.0326 30.9659 70.0326 30.858C70.0596 30.75 70.0596 30.669 70.0596 30.5611C70.0596 30.5071 70.0596 30.4801 70.0326 30.4261C70.0056 30.3991 69.9786 30.3721 69.9246 30.3721L69.1689 30.2102C69.1149 30.1832 69.034 30.2102 69.007 30.2372C68.953 30.2642 68.926 30.3182 68.926 30.3991C68.926 30.5071 68.899 30.5881 68.845 30.669C68.818 30.75 68.7641 30.804 68.6831 30.831C68.6021 30.858 68.5211 30.885 68.3862 30.885C68.2512 30.885 68.1703 30.858 68.0893 30.831C68.0083 30.804 67.9543 30.75 67.9274 30.669C67.9004 30.5881 67.8734 30.5071 67.8734 30.3991C67.8734 30.2912 67.8464 30.1832 67.8734 30.0483V29.1036V28.7527C67.8734 28.6448 67.9004 28.5638 67.9274 28.4828C67.9543 28.4018 68.0083 28.3479 68.0893 28.3209C68.1703 28.2939 68.2512 28.2669 68.3862 28.2669C68.4942 28.2669 68.6021 28.2939 68.6831 28.3209C68.7641 28.3479 68.818 28.4018 68.845 28.4828C68.872 28.5638 68.899 28.6448 68.899 28.7257C68.899 28.8067 68.926 28.8607 68.98 28.8877C69.034 28.9147 69.0879 28.9417 69.1689 28.9417L69.8977 28.7797C69.9516 28.7797 69.9786 28.7527 70.0056 28.7257C70.0326 28.6987 70.0326 28.6448 70.0326 28.6178C70.0326 28.5368 70.0056 28.4288 70.0056 28.3209L69.9246 27.997C69.8707 27.889 69.8167 27.7811 69.7357 27.6731C69.6547 27.5651 69.5468 27.4842 69.4388 27.4032C69.3039 27.3222 69.1689 27.2683 69.007 27.2143C68.845 27.1603 68.6291 27.1333 68.3862 27.1333C68.1163 27.1333 67.9004 27.1603 67.7114 27.2143C67.5225 27.2683 67.3606 27.3492 67.2526 27.4572C67.1176 27.5651 67.0367 27.6731 66.9557 27.7811C66.8747 27.889 66.8208 28.024 66.7938 28.1319C66.7668 28.2399 66.7398 28.3749 66.7128 28.4828C66.7128 28.5908 66.6858 28.6718 66.6858 28.7527V30.4261H66.7128ZM66.092 30.777C66.227 30.777 66.2809 30.831 66.2809 30.9659V31.7217C66.2809 31.7756 66.254 31.8296 66.227 31.8566C66.2 31.8836 66.146 31.9106 66.065 31.9106H65.3093C65.2553 31.9106 65.2013 31.8836 65.1743 31.8566C65.1474 31.8296 65.1204 31.7756 65.1204 31.7217V30.9659C65.1204 30.912 65.1474 30.858 65.1743 30.804C65.2013 30.777 65.2553 30.75 65.3093 30.75L66.092 30.777Z"
                fill="#CCCCCC"
              />
              <path
                d="M16.6727 13.4227C14.1626 13.2068 1.90892 15.204 0.991245 13.0448C-0.547208 9.45508 12.3272 11.4794 14.0546 11.5333C14.9183 11.5603 15.9979 11.7223 16.6187 11.5603C17.0505 11.4254 17.3474 10.7236 17.8333 10.4537C18.9129 9.80596 20.6673 10.1568 22.1787 10.2918C23.2044 10.3728 24.203 10.4807 25.2826 10.5617C23.7442 10.7776 22.0977 10.9935 20.4783 11.2095C20.2894 11.2365 19.9925 11.1555 19.8575 11.3714C21.504 11.6413 23.3663 11.6953 25.1477 11.8302C23.3933 12.1001 21.423 12.1541 19.6956 12.478C19.8036 12.6669 20.1274 12.613 20.3164 12.64C21.8548 12.7479 23.5552 12.8829 25.1747 12.9638C23.5012 13.2337 21.5579 13.2877 19.8845 13.6116C19.9385 13.8815 20.2894 13.8005 20.4513 13.8005C21.9898 13.9895 23.7172 14.2054 25.3096 14.3404C23.5552 14.4753 21.396 14.8802 19.5876 14.9881C18.1841 15.0691 17.3474 14.2594 16.6727 13.4227Z"
                fill="#CCCCCC"
              />
              <path
                d="M12.3272 13.6387C14.2705 13.4767 15.9169 13.3418 16.6727 13.3958C17.0236 13.8276 17.3744 14.2325 17.8603 14.5294C18.3191 14.8263 18.8589 15.0152 19.5606 14.9612C20.5593 14.9072 21.6659 14.7453 22.7455 14.6103C23.5282 14.5024 24.284 14.3944 24.9857 14.3404C24.284 14.2865 23.5822 14.2055 22.8535 14.1245C22.0168 14.0435 21.2071 13.9356 20.4513 13.8276H20.3164C20.1274 13.8276 19.8845 13.8276 19.8575 13.6117V13.5847H19.8845C20.8022 13.3958 21.8278 13.2878 22.8535 13.2068C23.5552 13.1529 24.257 13.0719 24.9047 12.9909C23.6902 12.9099 22.4216 12.829 21.2341 12.748C20.9372 12.721 20.6403 12.694 20.3434 12.694H20.2084C20.0195 12.694 19.8036 12.694 19.6956 12.5321L19.6686 12.5051H19.6956C20.6673 12.3162 21.7199 12.2082 22.7725 12.1272C23.4743 12.0732 24.203 11.9923 24.8778 11.9113C24.5269 11.8843 24.149 11.8573 23.7981 11.8303C22.4486 11.7494 21.0721 11.6684 19.8575 11.4795H19.8036L19.8306 11.4525C19.9385 11.2905 20.1274 11.2905 20.2894 11.2905H20.4513L21.7469 11.1286C22.8265 10.9936 23.9331 10.8317 24.9587 10.6967C24.3379 10.6428 23.7172 10.5888 23.1234 10.5348C22.7995 10.5078 22.5026 10.4808 22.1517 10.4538L21.342 10.3728C20.0465 10.2379 18.697 10.076 17.8333 10.6158C17.6173 10.7507 17.4284 10.9666 17.2665 11.1826C17.0505 11.4255 16.8616 11.6684 16.6187 11.7494C16.1868 11.8573 15.5391 11.8303 14.8913 11.7763C14.5944 11.7494 14.2975 11.7224 14.0276 11.7224C13.7307 11.7224 13.1099 11.6414 12.3002 11.5604C9.38526 11.1016 3.90621 10.5348 1.77397 11.4525C1.01824 11.7763 0.694354 12.2622 1.01824 13.0449C1.63902 14.5294 7.79283 14.0166 12.3272 13.6387ZM16.6727 13.4498C15.9169 13.3958 14.2705 13.5307 12.3272 13.6927C7.79283 14.0705 1.61203 14.5834 0.964258 13.0449C0.613382 12.2352 0.964258 11.7224 1.74698 11.3715C3.90621 10.4538 9.38527 11.0206 12.3272 11.3175C13.1369 11.3985 13.7577 11.4795 14.0546 11.4795C14.3245 11.4795 14.6214 11.5064 14.9183 11.5334C15.5661 11.5874 16.1868 11.6144 16.6187 11.5064C16.8346 11.4525 17.0236 11.2095 17.2395 10.9666C17.4284 10.7507 17.5903 10.5348 17.8333 10.3998C18.7239 9.86003 20.0735 10.022 21.396 10.1569L22.2057 10.2379C22.5026 10.2649 22.8535 10.2919 23.1774 10.3189C23.8791 10.3728 24.5809 10.4538 25.3096 10.4808L25.6065 10.5078L25.3366 10.5618C24.23 10.7237 23.0424 10.8857 21.8548 11.0476L20.5593 11.2096H20.3974C20.2624 11.2096 20.1005 11.2096 19.9925 11.3175C21.2071 11.5064 22.5566 11.5874 23.9061 11.6684C24.3649 11.6954 24.7968 11.7224 25.2556 11.7494L25.5255 11.7763L25.2556 11.8033C24.4999 11.9113 23.6902 11.9923 22.8805 12.0732C21.8548 12.1812 20.8022 12.2622 19.8575 12.4511C19.9385 12.5591 20.1274 12.5591 20.2894 12.5591H20.4243C20.7212 12.5861 21.0181 12.6131 21.315 12.6131C22.6106 12.721 23.9601 12.802 25.2556 12.883L25.5255 12.9099L25.2556 12.9639C24.4999 13.0719 23.7172 13.1529 22.9345 13.2338C21.9358 13.3418 20.9372 13.4228 20.0195 13.6117C20.0735 13.7736 20.2624 13.7466 20.4243 13.7466H20.5593C21.342 13.8276 22.1517 13.9356 22.9614 14.0435C23.7712 14.1245 24.6079 14.2325 25.3906 14.2865V14.3404C24.6079 14.3944 23.7172 14.5294 22.8265 14.6373C21.7469 14.7723 20.6403 14.9342 19.6416 14.9882C18.9399 15.0422 18.3731 14.8533 17.9142 14.5564C17.3744 14.2865 16.9966 13.8816 16.6727 13.4498Z"
                fill="#CCCCCC"
              />
            </g>
            <defs>
              <clipPath id="clip0_629_3413">
                <rect
                  width="82.6446"
                  height="32"
                  fill="white"
                  transform="translate(0.883301)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="132"
            height="32"
            viewBox="0 0 132 32"
            fill="none"
          >
            <g clip-path="url(#clip0_629_3421)">
              <path
                d="M113.182 0C111.112 0 109.419 1.6718 109.424 3.74189C109.419 5.82247 111.127 7.48903 113.203 7.48379C115.273 7.48903 116.929 5.82247 116.929 3.74189C116.924 1.67704 115.252 0 113.182 0ZM45.2513 0.062889C43.1707 0.062889 41.4937 1.71897 41.4937 3.78906C41.4937 5.86964 43.176 7.5624 45.2513 7.56764C47.3162 7.56764 48.9932 5.86964 48.9932 3.78906C48.9984 1.71897 47.3162 0.062889 45.2513 0.062889ZM101.149 4.26597C99.0842 4.26597 97.3915 5.93777 97.3915 8.00786C97.3915 10.078 99.079 11.7655 101.149 11.7655C103.224 11.7655 104.891 10.0832 104.891 8.00786C104.896 5.94301 103.224 4.26597 101.149 4.26597ZM125.288 4.26597C123.223 4.26597 121.53 5.93777 121.53 8.00786C121.53 10.078 123.223 11.7655 125.288 11.7655C127.369 11.7655 129.014 10.078 129.014 8.00786C129.014 5.93777 127.369 4.26073 125.288 4.26597ZM57.0901 4.32886C55.0253 4.32886 53.3325 6.02162 53.3325 8.08647C53.3325 10.1618 55.0201 11.8284 57.0901 11.8284C59.1498 11.8284 60.832 10.1566 60.832 8.08647C60.832 6.02162 59.155 4.32886 57.0901 4.32886ZM33.1923 4.42843C31.1275 4.42319 29.4504 6.09499 29.4504 8.15984V8.17557C29.4504 10.2509 31.117 11.9384 33.1923 11.9332C35.252 11.9332 36.9342 10.2457 36.9342 8.17557C36.9342 6.10023 35.252 4.42843 33.1923 4.42843ZM114.466 13.17C114.466 13.17 107.019 13.2172 106.93 13.2172C105.661 13.2172 104.587 14.2968 104.587 15.5598L104.571 29.1019H104.587C104.645 30.7055 105.986 32 107.6 32C109.23 32 110.572 30.7055 110.63 29.1019V24.3957C110.63 24.3957 113.606 24.38 113.706 24.38C114.854 24.38 115.807 23.4681 115.807 22.3151C115.807 21.1569 114.859 20.2136 113.706 20.2136H110.63V18.961H114.471C116.064 18.961 117.343 17.6875 117.338 16.0943C117.333 14.5169 116.059 13.17 114.466 13.17ZM128.17 13.17C128.17 13.17 120.723 13.2172 120.634 13.2172C119.355 13.2172 118.292 14.2915 118.292 15.5598V29.1019H118.307C118.36 30.7055 119.68 32 121.305 32C122.94 32 124.25 30.7108 124.303 29.1019H124.318V24.3957C124.318 24.3957 127.29 24.38 127.395 24.38C128.542 24.38 129.496 23.4681 129.496 22.3151C129.496 21.1569 128.542 20.2136 127.395 20.2136H124.313V18.961H128.155C129.737 18.961 131.021 17.6875 131.021 16.0943C131.021 14.5169 129.753 13.1648 128.17 13.17ZM60.7639 13.2014C59.176 13.2014 57.8972 14.4802 57.8972 16.0524C57.8972 16.1572 57.9182 16.2673 57.9287 16.3773L57.9129 29.0757L57.9287 29.2224C58.0073 30.7213 59.2493 31.9266 60.7796 31.9266C62.3676 31.9266 63.6463 30.6531 63.6463 29.0757C63.6463 28.8922 63.6306 28.7193 63.5992 28.5568V24.7887L67.8651 30.5169C67.928 30.6112 67.9961 30.7055 68.059 30.8104L68.0747 30.8418C68.625 31.4812 69.4583 31.8847 70.3702 31.8847C72.0315 31.8847 73.3679 30.5431 73.3679 28.887C73.3731 28.3105 73.2107 27.7445 72.8962 27.2571L72.8491 27.1942C72.8071 27.1261 72.7705 27.058 72.718 27.0003L68.8609 21.8225L72.0001 18.0282H71.9843C72.3931 17.5303 72.6499 16.8962 72.6499 16.1887C72.6447 14.5745 71.3345 13.2434 69.7203 13.2434C68.6617 13.2434 67.7446 13.8041 67.231 14.6426L63.5992 19.0239V16.4821C63.6149 16.3406 63.6306 16.1887 63.6306 16.0419C63.6306 14.4802 62.3466 13.2014 60.7639 13.2014ZM2.54446 13.2172C1.14518 13.2172 0.0236568 14.3596 0.0236568 15.738C0.0236568 15.738 0.00793457 29.1857 0.00793457 29.4111C0.00793457 30.8418 1.09801 31.9161 2.52873 31.9161L9.03774 31.9319C12.2346 31.9319 14.834 29.3482 14.834 26.1513C14.834 24.3433 14.0269 22.7344 12.7325 21.6757C13.4924 20.7743 13.9693 19.6056 13.9693 18.3217C13.9745 15.5126 11.6424 13.2067 8.80715 13.2119H2.54446V13.2172ZM46.4934 13.301C41.3784 13.301 37.2172 17.4569 37.2172 22.5771C37.2172 27.6973 41.3784 31.869 46.4934 31.869C51.6136 31.869 55.7747 27.6973 55.7695 22.5771C55.7695 17.4569 51.6136 13.301 46.4934 13.301ZM25.5094 13.3325C20.384 13.3325 16.2438 17.4989 16.249 22.6295C16.249 27.7445 20.3787 31.8952 25.5094 31.8899C30.6401 31.8899 34.7855 27.7445 34.7855 22.6295C34.7855 17.5041 30.6401 13.3325 25.5094 13.3325ZM93.8068 13.3325C88.6656 13.3325 84.494 17.5146 84.494 22.661C84.494 27.7969 88.6604 31.9738 93.8068 31.9738C98.9427 31.9738 103.12 27.7969 103.12 22.661C103.12 17.5146 98.948 13.3325 93.8068 13.3325ZM5.06525 17.4307H7.39215C8.16778 17.4307 8.79142 18.0439 8.79142 18.83C8.79142 19.5952 8.16254 20.1978 7.39215 20.1978C7.31878 20.1978 5.06525 20.2136 5.06525 20.2136V17.4307ZM78.2994 18.6518C76.2293 18.6518 74.5628 20.3393 74.5575 22.4094C74.5628 24.4795 76.2293 26.167 78.2994 26.167C80.3748 26.167 82.0571 24.4795 82.0571 22.4094C82.0518 20.3446 80.3643 18.6518 78.2994 18.6518ZM46.4934 18.7357C48.6211 18.7357 50.3505 20.4599 50.3505 22.5929C50.3505 24.7154 48.6211 26.4343 46.4934 26.4343C44.3656 26.4343 42.6519 24.7049 42.6519 22.5771C42.6466 20.4599 44.3604 18.7409 46.4776 18.7357H46.4934ZM25.5094 18.7671C27.6319 18.7671 29.3666 20.4913 29.3666 22.6243C29.3666 24.752 27.6371 26.471 25.5094 26.4658C23.4026 26.471 21.6732 24.752 21.6679 22.6243C21.6679 20.4913 23.3974 18.7671 25.5094 18.7671ZM93.8068 18.7986C95.9398 18.7986 97.664 20.5123 97.664 22.6557C97.664 24.7835 95.9346 26.5129 93.8068 26.5129C91.6738 26.5129 89.9444 24.7835 89.9496 22.6557C89.9444 20.528 91.6633 18.8038 93.7911 18.7986H93.8068ZM5.06525 24.1703L8.02628 24.186C8.83335 24.186 9.49368 24.8254 9.49368 25.6325C9.48844 26.4501 8.83859 27.0999 8.02628 27.0999H5.08098L5.06525 24.1703ZM128.039 27.0999C126.687 27.0999 125.613 28.1847 125.613 29.5421C125.618 30.9047 126.682 31.9843 128.039 31.9843C129.391 31.9843 130.482 30.8994 130.482 29.5421C130.487 28.1952 129.397 27.1051 128.05 27.0999C128.05 27.0999 128.045 27.0999 128.039 27.0999ZM128.039 27.3462C129.245 27.3462 130.235 28.3262 130.235 29.5421C130.235 30.7527 129.245 31.738 128.039 31.738C126.829 31.738 125.859 30.7475 125.859 29.5421C125.859 28.3262 126.829 27.3462 128.039 27.3462ZM126.934 28.0956V30.9256H127.521V29.8199H128.123C128.296 29.8199 128.422 29.8408 128.48 29.9037C128.542 29.9561 128.579 30.0819 128.579 30.2601V30.5221C128.579 30.6112 128.59 30.6846 128.595 30.7684C128.605 30.8156 128.626 30.8732 128.642 30.9309H129.292V30.868C129.234 30.8366 129.192 30.7632 129.177 30.6898C129.166 30.6426 129.161 30.5588 129.161 30.4278V30.2496C129.161 30.0504 129.135 29.9037 129.077 29.8094C129.025 29.7098 128.92 29.6364 128.799 29.584C128.946 29.5316 129.077 29.4373 129.14 29.3063C129.208 29.1805 129.234 29.0495 129.239 28.9132C129.239 28.7979 129.224 28.7088 129.192 28.6197C129.15 28.5306 129.093 28.452 129.03 28.3734C128.962 28.2843 128.867 28.2214 128.768 28.1795C128.658 28.1323 128.522 28.1061 128.328 28.0956H126.934ZM127.521 28.5988H128.202C128.333 28.5988 128.417 28.6145 128.48 28.6459C128.595 28.7036 128.658 28.8136 128.658 28.9866C128.658 29.1386 128.59 29.2434 128.48 29.2958C128.411 29.3272 128.322 29.3429 128.186 29.3429H127.521V28.5988Z"
                fill="#CCCCCC"
              />
            </g>
            <defs>
              <clipPath id="clip0_629_3421">
                <rect
                  width="131.019"
                  height="32"
                  fill="white"
                  transform="translate(0.00268555)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="32"
            viewBox="0 0 96 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.83049 25.5529L9.5362 25.4493L9.55815 25.4044L1.25467 24.0751L1.2123 23.9148L8.17475 23.8153C8.17475 23.8153 8.11706 23.6769 7.93942 23.3339L0.775837 22.193L0.751334 22.0327L7.45344 21.9362L7.34879 21.4686L0.552757 20.4537L0.5451 20.2562L7.14715 20.1612L7.0961 19.6748L0.496094 18.59L0.507324 18.4287L7.09814 18.3337C7.06394 18.1454 7.11907 17.7645 7.11907 17.7645L0.600742 16.7722L0.62984 16.6098L7.21606 16.5333C7.21504 16.4393 7.25333 16.0937 7.25333 16.0937L0.84271 14.9426L0.871808 14.7808L7.52031 14.6848C7.52031 14.6848 7.5637 14.3203 7.63976 14.1309L1.2317 13.1529L1.27866 12.9905L7.94095 12.8945C7.94095 12.8945 8.07929 12.5086 8.15586 12.3662L1.7774 11.4039L1.82437 11.26L8.59896 11.1625C8.59896 11.1625 8.79498 10.7546 8.84042 10.6443L2.51096 9.66474L2.5763 9.52027L9.47137 9.42123C9.47137 9.42123 9.65616 9.05828 9.82564 8.80457L3.50283 7.82547L3.56766 7.69887L10.6587 7.61465C10.6587 7.61465 10.8721 7.27874 11.0585 7.10365L4.66672 6.14599L4.78567 6.00101L12.0355 5.89687C12.0355 5.89687 12.3183 5.58854 12.5205 5.42876L6.23594 4.46957L6.33702 4.32459L13.7242 4.21229L14.2071 3.78399L8.48257 2.5471L8.46878 2.54863C10.9257 0.991663 13.9748 0.0508471 17.6488 0.00184092C24.4785 -0.0905561 30.2454 3.29036 30.4378 11.2288L21.5585 11.3483C21.2645 8.53402 19.5865 7.57482 17.196 7.60698C12.0309 7.67641 9.80012 13.2141 9.87056 18.4654C9.91906 22.0505 11.4878 24.4207 15.2868 24.3686C17.8055 24.3349 19.9276 23.4105 20.8337 20.9219L16.565 20.9785L17.8433 14.4291L30.3077 14.2611L27.0334 31.084L21.0996 31.1636L21.3161 28.2156L21.2298 28.1309C19.3022 30.8038 16.2858 31.9544 13.0417 31.9983C6.70048 32.084 3.4186 28.9471 1.83968 25.5785L1.83049 25.5529ZM47.5706 14.4944C46.6609 13.9574 45.5338 13.5873 44.0825 13.6041C42.2754 13.6245 40.3126 14.3591 40.3391 16.6313C40.3759 19.8345 46.8922 19.7871 46.9499 24.7969C46.983 27.6714 45.0218 30.9528 40.4223 31.0054C38.2048 31.0314 36.6111 30.5567 35.071 29.9717L35.9184 27.4433C37.0486 28.1421 38.6152 28.6169 39.9568 28.602C42.8589 28.5684 44.0702 26.7475 44.0513 25.1594C44.0069 21.2721 37.4988 22.0316 37.4376 16.7206C37.3972 13.2432 40.5505 11.2355 43.6991 11.1992C45.2867 11.1809 46.8508 11.4642 48.3088 12.0497L47.5706 14.4944ZM58.5138 30.2218C57.1758 30.5659 55.7827 30.8283 54.3871 30.8441C50.9924 30.8829 47.9371 29.55 47.88 24.6218C47.8355 20.7616 50.4946 16.2678 55.4228 16.2106C58.79 16.1718 60.7022 18.176 60.741 21.489C60.7512 22.4191 60.6512 23.2149 60.5235 24.0373L50.6947 24.1512C50.6437 24.4408 50.6196 24.7346 50.6228 25.0287C50.6565 27.9578 52.4733 28.7853 54.9649 28.7567C56.2513 28.7419 57.6439 28.3979 58.8972 27.8624L58.5138 30.2218ZM58.0921 22.1491C58.1432 21.7381 58.1661 21.4094 58.1621 21.0801C58.1442 19.4379 57.1171 18.2725 55.1732 18.2944C53.0654 18.3184 51.4712 20.172 50.9479 22.2318L58.0921 22.1491ZM62.4042 18.5936C62.5078 18.0172 62.6635 17.2765 62.763 16.4541L65.173 16.4261L64.76 18.6487H64.8146C65.6202 17.3245 67.1118 16.0754 69.5483 16.0473C69.7944 16.0442 70.2334 16.0942 70.7286 16.2806L70.1793 18.5588C69.6846 18.3735 69.2732 18.2954 69.0818 18.2985C65.9061 18.3342 64.3848 21.8019 64.0489 23.5309L62.6768 30.4194L60.1034 30.4495L62.4042 18.5936ZM71.5234 16.352L74.0967 16.3229L71.3008 30.3193L68.7275 30.3494L71.5234 16.352ZM74.9099 13.1922L72.0073 13.2253L72.5755 10.3161L75.4781 10.2829L74.9099 13.1922ZM84.3262 29.9227C82.9883 30.2667 81.5952 30.5291 80.1995 30.5449C76.8048 30.5848 73.7496 29.2509 73.6929 24.3227C73.648 20.4624 76.3071 15.9687 81.2353 15.9115C84.6024 15.8732 86.5147 17.8779 86.5535 21.1899C86.5637 22.121 86.4636 22.9158 86.336 23.7392L76.5072 23.852C76.4562 24.1417 76.4321 24.4354 76.4352 24.7295C76.4689 27.6587 78.2857 28.4862 80.7774 28.4576C82.0638 28.4438 83.4564 28.0987 84.7096 27.5642L84.3262 29.9227ZM83.9046 21.8499C83.9556 21.439 83.9786 21.1102 83.9745 20.781C83.9556 19.1388 82.9296 17.9733 80.9857 17.9953C78.8779 18.0203 77.2837 19.8728 76.7604 21.9326L83.9046 21.8499Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M95.2566 18.5424C94.5409 18.1943 93.4143 17.8512 92.4561 17.8625C91.3335 17.8752 89.8588 18.1933 89.8746 19.5904C89.9027 21.9713 94.6675 22.0259 94.7124 25.9138C94.7512 29.2819 91.6694 30.4121 89.48 30.4371C87.2624 30.4632 86.437 30.1712 85.3931 29.8271L85.8596 27.6045C86.8775 28.0032 87.9506 28.3743 89.0721 28.361C90.4688 28.3452 91.9956 27.752 91.9762 26.1644C91.9492 23.7825 87.1813 23.4813 87.1404 19.9498C87.1067 16.9926 90.0497 15.8088 92.3499 15.7822C93.5812 15.768 94.8446 16.0543 95.9998 16.5066L95.2566 18.5424Z"
              fill="#CCCCCC"
            />
          </svg>
        </div>
      </div>

      <div className={`${showPopup ? "lightHOME" : "OGHOME"} footer`}>
        <div className="foot-one">
          <div className="newletter-desc">
            <h1 className="newletter-desc-h1">Subcribe our Newsletter</h1>
            <p>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className="newsletter-subscription-field">
            <input
              type="email"
              className="newsletter-email"
              placeholder="Your email address"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="icon-Div">
            <div className="social-media">
              <FaFacebook className="social-media-icon" />
            </div>

            <div className="social-media">
              <FaInstagram className="social-media-icon" />
            </div>

            <div className="social-media">
              <FaPinterest className="social-media-icon" />
            </div>

            <div className="social-media">
              <FaSquareXTwitter className="social-media-icon" />
            </div>
          </div>
        </div>

        <div className="foot-two">
          <div className="foot-two-phase1">
            <div className="foot-two-phase1-part1">
              <div className="HomepagIcon">
                <h2>Ecobazar</h2>
                <img src={plantlogo} />
              </div>

              <div className="homepageicon-div">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </div>

              <div className="homepageicon-phonenumber">
                <p className="para-for-phoennumber">(219)555-0114</p>{" "}
                <p className="para-for-phoennumber">or</p>{" "}
                <p className="para-for-phoennumber">Proxy@gmail.com</p>
              </div>
            </div>

            <div className="foot-two-phase1-part2">
              <h3>My Account</h3>
              <div className="links">
                <NavLink to="/signin" className="footer-all-links">
                  My Account
                </NavLink>
                <NavLink to="/paymentGateway" className="footer-all-links">
                  Order History
                </NavLink>
                <NavLink to="/Cart" className="footer-all-links">
                  Shoppin Cart
                </NavLink>
                <NavLink to="/Cart" className="footer-all-links">
                  Wishlist
                </NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part3">
              <h3>Helps</h3>
              <div className="help-links">
                <NavLink to="/contact" className="footer-all-links">
                  Contact
                </NavLink>
                <NavLink to="/FAQs" className="footer-all-links">
                  Faqs
                </NavLink>
                <NavLink className="footer-all-links">
                  Terms & Condition
                </NavLink>
                <NavLink className="footer-all-links">Privacy Policy</NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part4">
              <h3>Proxy</h3>
              <div className="proxy-links">
                <NavLink to="/about" className="footer-all-links">
                  About
                </NavLink>
                <NavLink to="/shop" className="footer-all-links">
                  Shop
                </NavLink>
                <NavLink to="/Products" className="footer-all-links">
                  Product
                </NavLink>
                <NavLink to="/Cart" className="footer-all-links">
                  Track Order
                </NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part5">
              <h3>Categories</h3>
              <div className="categories-links">
                <NavLink to="/" className="footer-all-links">
                  Fruits & Vegetables
                </NavLink>
                <NavLink to="/" className="footer-all-links">
                  Meat & Fish
                </NavLink>
                <NavLink to="/" className="footer-all-links">
                  Bread & Bakery
                </NavLink>
                <NavLink to="/" className="footer-all-links">
                  Beauty & Health
                </NavLink>
              </div>
            </div>
          </div>

          <div className="foot-two-phase2">
            <div className="foot-two-phase2-copyrightcontent">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </div>

            <div className="cards">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="15"
                  viewBox="0 0 33 15"
                  fill="none"
                  className="svgsForFooter"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.50757 2.04236C6.12986 2.5081 5.52552 2.87545 4.92118 2.82298C4.84564 2.19323 5.14151 1.52413 5.48775 1.11086C5.86546 0.631998 6.52645 0.290888 7.06155 0.264648C7.1245 0.92063 6.87899 1.56349 6.50757 2.04236ZM7.05445 2.94759C6.52204 2.91566 6.03624 3.11444 5.64384 3.275C5.39133 3.37832 5.17749 3.46582 5.01481 3.46582C4.83225 3.46582 4.60959 3.37364 4.35958 3.27015C4.032 3.13454 3.65749 2.97951 3.26475 2.98695C2.36453 3.00007 1.52727 3.53141 1.06773 4.37763C0.123447 6.07006 0.822213 8.5759 1.73502 9.95346C2.18197 10.6357 2.71707 11.3835 3.42213 11.3573C3.73231 11.3451 3.95544 11.2464 4.18636 11.1443C4.45221 11.0268 4.72838 10.9046 5.1596 10.9046C5.57587 10.9046 5.83997 11.0236 6.09348 11.1377C6.33453 11.2463 6.56602 11.3505 6.90966 11.3441C7.6399 11.331 8.09945 10.6619 8.54641 9.9797C9.02875 9.2475 9.24072 8.5329 9.27288 8.42445L9.27665 8.41191C9.27588 8.41111 9.26993 8.40826 9.25941 8.40325C9.09818 8.32633 7.86576 7.73842 7.85394 6.1619C7.84207 4.83863 8.83146 4.16819 8.9872 4.06265C8.99668 4.05623 9.00307 4.0519 9.00596 4.04964C8.37644 3.07879 7.39439 2.97383 7.05445 2.94759ZM12.1086 11.272V1.04524H15.7913C17.6924 1.04524 19.0207 2.40968 19.0207 4.40386C19.0207 6.39805 17.6672 7.7756 15.7409 7.7756H13.632V11.272H12.1086ZM13.6337 2.38347H15.3901C16.7121 2.38347 17.4675 3.11817 17.4675 4.41045C17.4675 5.70274 16.7121 6.44399 15.3838 6.44399H13.6337V2.38347ZM24.0505 10.0453C23.6476 10.8456 22.76 11.3507 21.8031 11.3507C20.3867 11.3507 19.3983 10.4717 19.3983 9.14662C19.3983 7.83466 20.3552 7.08028 22.1241 6.96877L24.0253 6.85069V6.28655C24.0253 5.45345 23.5028 5.00083 22.5711 5.00083C21.8031 5.00083 21.2428 5.41409 21.1295 6.04384H19.7571C19.8012 4.71875 20.9973 3.75446 22.6152 3.75446C24.3589 3.75446 25.4921 4.70564 25.4921 6.18159V11.272H24.0819V10.0453H24.0505ZM22.213 10.1372C21.4009 10.1372 20.8847 9.73044 20.8847 9.10726C20.8847 8.4644 21.382 8.09049 22.3326 8.03145L24.026 7.91994V8.4972C24.026 9.45493 23.2454 10.1372 22.213 10.1372ZM30.1713 11.6721C29.5607 13.463 28.8619 14.0534 27.3763 14.0534C27.263 14.0534 26.8853 14.0402 26.7971 14.014V12.7873C26.8916 12.8004 27.1245 12.8136 27.2441 12.8136C27.9177 12.8136 28.2954 12.5184 28.5283 11.7509L28.6668 11.2982L26.0858 3.85286H27.6784L29.4726 9.89444H29.5041L31.2982 3.85286H32.8468L30.1713 11.6721Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="12"
                  viewBox="0 0 32 12"
                  fill="none"
                  className="svgsForFooter"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.22982 10.989H5.5037L3.45943 2.96061C3.3624 2.59131 3.15638 2.26482 2.85333 2.11094C2.09703 1.72424 1.26364 1.41649 0.354492 1.26128V0.952183H4.74607C5.35217 0.952183 5.80675 1.41649 5.88251 1.95573L6.94319 7.74685L9.66799 0.952183H12.3184L8.22982 10.989ZM13.8327 10.989H11.2581L13.3781 0.952183H15.9527L13.8327 10.989ZM19.2856 3.73268C19.3614 3.1921 19.8159 2.88301 20.3463 2.88301C21.1797 2.8054 22.0875 2.96062 22.8451 3.34598L23.2997 1.18501C22.5421 0.875918 21.7087 0.720703 20.9524 0.720703C18.4535 0.720703 16.6352 2.11095 16.6352 4.04043C16.6352 5.50828 17.9232 6.27901 18.8323 6.74331C19.8159 7.20628 20.1947 7.51537 20.119 7.97834C20.119 8.6728 19.3614 8.98189 18.6051 8.98189C17.6959 8.98189 16.7868 8.7504 15.9547 8.3637L15.5001 10.526C16.4093 10.9114 17.3929 11.0666 18.302 11.0666C21.1039 11.1429 22.8451 9.75395 22.8451 7.66925C22.8451 5.04398 19.2856 4.8901 19.2856 3.73268ZM31.8554 10.989L29.8111 0.952183H27.6153C27.1608 0.952183 26.7062 1.26128 26.5547 1.72424L22.7692 10.989H25.4196L25.9486 9.52246H29.205L29.5081 10.989H31.8554ZM27.9923 3.65506L28.7486 7.43776H26.6286L27.9923 3.65506Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="20"
                  viewBox="0 0 41 20"
                  fill="none"
                  className="svgsForFooter"
                >
                  <path
                    d="M15.5293 19.6767L40.6764 12.0664V15.7061C40.6764 17.899 38.8987 19.6767 36.7058 19.6767H15.5293Z"
                    fill="#FD6020"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.9044 1.05881C37.2878 1.05881 38.0488 1.69879 38.0488 2.90765C38.1179 3.83207 37.4954 4.61427 36.6653 4.75649L38.533 7.38753H37.0803L35.4893 4.8276H35.351V7.38753H34.175V1.05881H35.9044ZM35.3506 3.97431H35.6964C36.4574 3.97431 36.8032 3.61876 36.8032 2.97878C36.8032 2.4099 36.4574 2.05436 35.6964 2.05436H35.3506V3.97431ZM30.0933 7.38753H33.4136V6.32089H31.2692V4.61427H33.3444V3.54763H31.2692V2.12545H33.4136V1.05881H30.0933V7.38753ZM26.6349 5.32536L25.0439 1.05881H23.7988L26.3582 7.52975H26.9808L29.5402 1.05881H28.2951L26.6349 5.32536ZM12.5927 4.25873C12.5927 6.03646 13.9762 7.52976 15.7055 7.52976C16.2589 7.52976 16.7431 7.38754 17.2274 7.17421V5.75203C16.8815 6.17868 16.3973 6.46312 15.8439 6.46312C14.7371 6.46312 13.8378 5.60981 13.8378 4.47206V4.32984C13.7687 3.1921 14.6679 2.19657 15.7747 2.12546C16.3281 2.12546 16.8815 2.4099 17.2274 2.83655V1.41437C16.8123 1.12993 16.2589 1.05882 15.7747 1.05882C13.9762 0.916603 12.5927 2.4099 12.5927 4.25873ZM10.4467 3.47653C9.75494 3.1921 9.54742 3.04988 9.54742 2.69433C9.6166 2.26768 9.96246 1.91213 10.3775 1.98324C10.7234 1.98324 11.0692 2.19657 11.3459 2.481L11.9685 1.62769C11.4843 1.20104 10.8617 0.916601 10.2392 0.916601C9.27073 0.845492 8.44064 1.62769 8.37147 2.62322V2.69433C8.37147 3.54764 8.71733 4.04541 9.82412 4.40095C10.1008 4.47206 10.3775 4.61428 10.6542 4.7565C10.8617 4.89872 11.0001 5.11204 11.0001 5.39648C11.0001 5.89425 10.585 6.3209 10.17 6.3209H10.1008C9.54742 6.3209 9.0632 5.96535 8.85568 5.46759L8.09477 6.24979C8.50981 7.03199 9.3399 7.45865 10.17 7.45865C11.2768 7.52976 12.176 6.67645 12.2452 5.5387V5.32537C12.176 4.47206 11.8302 4.04541 10.4467 3.47653ZM6.43519 7.38753H7.61114V1.05881H6.43519V7.38753ZM0.970459 1.05881H2.69981H3.04568C4.70585 1.12992 6.02015 2.5521 5.95098 4.25872C5.95098 5.18314 5.53594 6.03645 4.8442 6.67644C4.22163 7.1742 3.46072 7.45864 2.69981 7.38753H0.970459V1.05881ZM2.4924 6.32086C3.04579 6.39197 3.66835 6.17864 4.0834 5.8231C4.49844 5.39644 4.70596 4.82757 4.70596 4.18758C4.70596 3.61871 4.49844 3.04984 4.0834 2.62318C3.66835 2.26764 3.04579 2.05431 2.4924 2.12542H2.14653V6.32086H2.4924Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7534 0.912109C19.0241 0.912109 17.5714 2.33429 17.5714 4.18313C17.5714 5.96086 18.9549 7.45416 20.7534 7.52527C22.5519 7.59637 23.9354 6.10308 24.0046 4.25424C23.9354 2.4054 22.5519 0.912109 20.7534 0.912109V0.912109Z"
                    fill="#FD6020"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="19"
                  viewBox="0 0 31 19"
                  fill="none"
                  className="svgsForFooter"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5583 18.3925C26.5147 18.3925 30.5327 14.4223 30.5327 9.52487C30.5327 4.62741 26.5147 0.657227 21.5583 0.657227C19.3369 0.657227 17.3041 1.45468 15.7369 2.77567C14.1698 1.45469 12.137 0.657234 9.9156 0.657234C4.95916 0.657234 0.941162 4.62741 0.941162 9.52488C0.941162 14.4223 4.95916 18.3925 9.9156 18.3925C12.137 18.3925 14.1698 17.5951 15.737 16.2741C17.3041 17.5951 19.3369 18.3925 21.5583 18.3925Z"
                    fill="#ED0006"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7363 16.274C17.6658 14.6475 18.8893 12.2274 18.8893 9.52487C18.8893 6.82238 17.6658 4.40225 15.7363 2.77576C17.3035 1.45472 19.3364 0.657227 21.5578 0.657227C26.5142 0.657227 30.5322 4.62741 30.5322 9.52487C30.5322 14.4223 26.5142 18.3925 21.5578 18.3925C19.3364 18.3925 17.3035 17.595 15.7363 16.274Z"
                    fill="#F9A000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.737 16.2736C17.6665 14.6471 18.8899 12.227 18.8899 9.5245C18.8899 6.82201 17.6665 4.40188 15.737 2.77539C13.8075 4.40188 12.584 6.82201 12.584 9.5245C12.584 12.227 13.8075 14.6471 15.737 16.2736Z"
                    fill="#FF5E00"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="svgsForFooter"
                >
                  <g clip-path="url(#clip0_2030_5996)">
                    <rect width="11" height="11" fill="#1A1A1A" />
                    <path
                      d="M8.70833 5.04199H2.29167C1.78541 5.04199 1.375 5.4524 1.375 5.95866V9.16699C1.375 9.67325 1.78541 10.0837 2.29167 10.0837H8.70833C9.21459 10.0837 9.625 9.67325 9.625 9.16699V5.95866C9.625 5.4524 9.21459 5.04199 8.70833 5.04199Z"
                      stroke="white"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.20837 5.04199V3.20866C3.20837 2.60087 3.44982 2.01798 3.87959 1.58821C4.30936 1.15843 4.89225 0.916992 5.50004 0.916992C6.10783 0.916992 6.69072 1.15843 7.12049 1.58821C7.55026 2.01798 7.79171 2.60087 7.79171 3.20866V5.04199"
                      stroke="white"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2030_5996">
                      <rect width="11" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>
                  Secure <br /> Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

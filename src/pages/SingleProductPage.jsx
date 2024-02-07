import React, {useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import productsData from "../Data";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import plantlogo from "../resources/Group.png";
import { BsHandbag } from "react-icons/bs";
import "./SingleProduct.css";
import { FaStar } from "react-icons/fa6";
import "react-slideshow-image/dist/styles.css";
import {useDispatch, useSelector } from "react-redux";
import {addToCart,removeFromCart} from "../Slices/Slice/cartSlice"
import { MdAccountCircle } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const SingleProductPage = () => {

  const dispath = useDispatch();
  const {cart} = useSelector((state)=> state);

  const [description, setDescription] = useState(true);
  const [Ainfo, setAinfo] = useState(false);
  const [CFeedBack, setCFeedBack] = useState(false);
  const [result, setResult] = useState(1);

  const { itemId } = useParams();
  const selectedProduct = productsData.find((product) => product.id === itemId);
  const discountPrice = selectedProduct.price - selectedProduct.price * 0.39;
  const [arrayNumber, setarrayNumber] = useState(0);

  function arrowDownHandler() {
    if (arrayNumber < 4) {
      setarrayNumber((prev) => prev + 1);
    } else {
      return 4;
    }
  }

  function arrowUpHandler() {
    if (arrayNumber > 0) {
      setarrayNumber((prev) => prev - 1);
    } else {
      return 0;
    }
  }

  const [activeNav, setActiveNav] = useState("/"); // Initially set to the home route

  const handleNavClick = (route) => {
    setActiveNav(route);
  };

  return (
    <div>
      <div className="track-of-path">
        <div className="track">
          <GoHome className="home" />

          <GoChevronRight className="rightIcon" />

          <div className="Account-txt">{selectedProduct.category}</div>

          <GoChevronRight className="rightIcon" />

          <div className="login-createAccount-text">
            <p className="login">{selectedProduct.productName}</p>
          </div>
        </div>
      </div>

      <div className="bottom-navbar-mobile">
      <NavLink
        to="/shop"
        className={activeNav === "/shop" ? "navClickedActive" : ""}
        onClick={() => handleNavClick("/shop")}
      >
        <FaSearch className="icon" />
      </NavLink>

      <NavLink
        to="/recipe"
        className={activeNav === "/recipe" ? "navClickedActive" : ""}
        onClick={() => handleNavClick("/recipe")}
      >
        <MdFastfood className="icon" />
      </NavLink>

      <NavLink
        to="/"
        className={activeNav === "/" ? "navClickedActive" : ""}
        onClick={() => handleNavClick("/")}
      >
        <TiHome className="icon" />
      </NavLink>

      <NavLink
        to="/contact"
        className={activeNav === "/contact" ? "navClickedActive" : ""}
        onClick={() => handleNavClick("/contact")}
      >
        <IoMdCall className="icon" />
      </NavLink>

      <NavLink
        to="/signin"
        className={activeNav === "/signin" ? "navClickedActive" : ""}
        onClick={() => handleNavClick("/signin")}
      >
        <MdAccountCircle className="icon" />
      </NavLink>
      </div>

      <div className="product-description">
        <div className="product-images-section">
          <div className="images-div-box">
            <button className="arrowBtn arrowUp" onClick={arrowUpHandler}>
              <GoChevronUp className="arrowIcon" />
            </button>

            <img
              src={selectedProduct.images}
              className={`${
                arrayNumber === 0 ? "greenBox" : "nogreenBox"
              } diff-imgs-selection`}
              alt={`${selectedProduct.productName}`}
            />
            <img
              src={selectedProduct.images}
              className={`${
                arrayNumber === 1 ? "greenBox" : "nogreenBox"
              } diff-imgs-selection`}
              alt={`${selectedProduct.productName}`}
            />
            <img
              src={selectedProduct.images}
              className={`${
                arrayNumber === 2 ? "greenBox" : "nogreenBox"
              } diff-imgs-selection`}
              alt={`${selectedProduct.productName}`}
            />
            <img
              src={selectedProduct.images}
              className={`${
                arrayNumber === 3 ? "greenBox" : "nogreenBox"
              } diff-imgs-selection`}
              alt={`${selectedProduct.productName}`}
            />
            <img
              src={selectedProduct.images}
              className={`${
                arrayNumber === 4 ? "greenBox" : "nogreenBox"
              } diff-imgs-selection`}
              alt={`${selectedProduct.productName}`}
            />
            <button className="arrowBtn arrowDwn" onClick={arrowDownHandler}>
              <GoChevronDown className="arrowIcon" />
            </button>
          </div>

          <div className="main-item-image">
            <img
              src={selectedProduct.images}
              alt={`${selectedProduct.productName}`}
            />
          </div>
        </div>

        <div className="item-description-box">
          <div className="frame219">
            <div className="frame-220">
              <div className="heading-InStock">
                <h1>{selectedProduct.productName}</h1>

                <div>In Stock</div>
              </div>

              <div className="rating-sku">
                <div className="ratingSKUstars">
                  <FaStar className="stars" />
                  <FaStar className="stars" />
                  <FaStar className="stars" />
                  <FaStar className="stars" />
                  <FaStar className="stars" />
                </div>

                <p className="reviews4">4 Review</p>

                <span className="dot">.</span>

                <div className="sku215">
                  <p className="SKU">SKU:</p>
                  <span>2,51,594</span>
                </div>
              </div>

              <div className="price-and-discount">
                <div className="price-and-discountOnly">
                  <span className="discount-price">
                    ₹{selectedProduct.price}
                  </span>
                  <p className="price">₹{discountPrice.toFixed(2)}</p>
                </div>

                <p className="off39">39% Off</p>
              </div>
            </div>
          </div>

          <div className="frame-223">
            <div className="frame-222">
              <div className="frame-221">
                <p>Brand:</p>

                <div className="patta-Jan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="14"
                    viewBox="0 0 32 14"
                    fill="none"
                  >
                    <path
                      d="M5.13333 7.00159C17.2644 -5.59603 31.2617 7.00159 31.2617 7.00159C31.2617 7.00159 17.2644 19.5992 5.13333 7.00159Z"
                      fill="#36C63F"
                    />
                    <path
                      d="M22.8938 12.196C27.954 10.6073 31.4454 7.49925 31.5916 7.36769L32 7.00006L31.5916 6.63244C31.4454 6.50087 27.954 3.39274 22.8938 1.80404C19.902 0.864788 16.9897 0.661537 14.2377 1.20004C10.858 1.86129 7.72564 3.64642 4.92432 6.50543L-2.44735e-07 6.50543L-2.87974e-07 7.49463L4.92432 7.49463C7.7257 10.3536 10.8579 12.1388 14.2377 12.8C16.9897 13.3385 19.9021 13.1353 22.8938 12.196ZM14.4097 11.8258C11.5163 11.256 8.80595 9.80057 6.33845 7.49463L13.3259 7.49463L15.9805 10.1493L16.6798 9.44982L14.7247 7.49469L20.5294 7.49469L20.5294 6.5055L17.0575 6.5055L19.0127 4.5503L18.3133 3.85092L15.6587 6.5055L10.992 6.5055L12.4806 5.01687L11.7812 4.31749L9.59314 6.50556L6.33839 6.50556C8.80595 4.19961 11.5163 2.74417 14.4097 2.17429C16.9942 1.66529 19.7388 1.8551 22.5674 2.73842C26.4272 3.9438 29.4068 6.133 30.4887 7.00013C29.4067 7.86732 26.4272 10.0564 22.5674 11.2618C19.7389 12.1451 16.9942 12.3349 14.4097 11.8258Z"
                      fill="#009F06"
                    />
                    <path
                      opacity="0.3"
                      d="M22.3945 7.49332L22.3945 6.50421L21.4615 6.50421L21.4615 7.49332L22.3945 7.49332Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M24.2617 7.49332L24.2617 6.50421L23.3287 6.50421L23.3287 7.49332L24.2617 7.49332Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                  <p className="brandJanuary">January</p>
                </div>
              </div>

              <div className="share-product-section">
                <p>Share item:</p>
                <FaFacebook className="icons-share" />
                <FaPinterest className="icons-share" />
                <FaInstagram className="icons-share" />
                <FaSquareXTwitter className="icons-share" />
              </div>
            </div>

            <p className="productDescx">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
          </div>

          <div className="CTA">
            <div className="coutner">
                <button className="minus" onClick={() => {setResult((prev) => prev - 1);}} disabled={result === 1}>
                -
                </button>

                <div className="counter-result">{result}
                </div>

                <button className="add" onClick={() => {setResult((prev) => prev + 1);}} disabled={result === 6}>
                  +
                </button>
            </div>

            <div>
                {
                  cart.some((p)=>p.id=== selectedProduct.id) ? 
                  (
                    <button className="add-and-remove-item-button" onClick={()=>{dispath(removeFromCart(selectedProduct.id))}}>Remove from Cart <BsHandbag/></button>
                  )

                  :

                  (
                    <button className="add-and-remove-item-button" onClick={()=>{dispath(addToCart(selectedProduct))}}>Add to Cart <BsHandbag/></button>
                  )
                }
            </div>
          </div>

          <div className="small-details">
            <p>
              Category: <span>{selectedProduct.category}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="middle-section-of-products">
        <div className="navigation-between-products">
          <div className="all-nav-links">
            <NavLink
              onClick={() => {
                setDescription(true);
                setCFeedBack(false);
                setAinfo(false);
              }}
              className={`${description ? "GreenUL" : "nonGreenUL"}`}
            >
              Descriptions
            </NavLink>

            <NavLink
              onClick={() => {
                setDescription(false);
                setCFeedBack(false);
                setAinfo(true);
              }}
              className={`${Ainfo ? "GreenUL" : "nonGreenUL"}`}
            >
              Additional Information
            </NavLink>

            <NavLink
              onClick={() => {
                setDescription(false);
                setAinfo(false);
                setCFeedBack(true);
              }}
              className={`${CFeedBack ? "GreenUL" : "nonGreenUL"}`}
            >
              Customer Feedback
            </NavLink>
          </div>
        </div>

        <div className="allproductInfos">
          {description ? (
            <div className="product-details-info">
              <div className="products-info">
                <p className="information-about-product">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit. Nulla mauris tellus,
                  feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus
                  faucibus elementum tincidunt, turpis mi viverra velit,
                  pellentesque tristique neque mi eget nulla. Proin luctus
                  elementum neque et pharetra.{" "}
                </p>

                <ul className="all-checked-infos">
                  <li>
                    <div className="she-is-the-one">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M10.4173 3.125L4.68815 8.85417L2.08398 6.25"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="all-checked-infos-text">
                      100 g of fresh leaves provides.
                    </p>
                  </li>

                  <li>
                    <div className="she-is-the-one">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M10.4173 3.125L4.68815 8.85417L2.08398 6.25"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="all-checked-infos-text">
                      Aliquam ac est at augue volutpat elementum.
                    </p>
                  </li>

                  <li>
                    <div className="she-is-the-one">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M10.4173 3.125L4.68815 8.85417L2.08398 6.25"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="all-checked-infos-text">
                      Quisque nec enim eget sapien molestie.
                    </p>
                  </li>

                  <li>
                    <div className="she-is-the-one">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M10.4173 3.125L4.68815 8.85417L2.08398 6.25"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="all-checked-infos-text">
                      Proin convallis odio volutpat finibus posuere.
                    </p>
                  </li>
                </ul>

                <p className="last-info">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                  Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>

              <div className="thisgigga-container">
                <div className="thisgiggaIMAGE"></div>
                <div className="featuresOfThis-gigga">
                  <div className="first-features">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_460_43081)">
                        <path
                          d="M28.0671 24.7501C28.326 24.7501 28.5359 24.5402 28.5359 24.2813V13.0313C28.5359 12.4718 28.3178 11.8995 27.9219 11.4198L24.4454 7.20769C24.2633 6.987 24.0539 6.801 23.8265 6.65287C23.8405 6.50962 23.8484 6.36494 23.8484 6.21887V0.968872C23.8484 0.709997 23.6385 0.500122 23.3797 0.500122C23.1208 0.500122 22.9109 0.709997 22.9109 0.968872C22.9109 0.968872 22.91 6.26356 22.9096 6.28593C22.7762 6.26231 22.6409 6.25012 22.5047 6.25012H16.4422C16.0154 6.25012 15.597 6.36987 15.2224 6.58994C15.2062 6.59575 15.1902 6.60225 15.1744 6.60994L10.605 8.83568C10.0987 9.08962 9.69392 9.51556 9.46498 10.035C9.46248 10.0407 9.46011 10.0464 9.45786 10.0521L7.56861 14.8441C7.47367 15.085 7.59192 15.3572 7.83279 15.4522C7.88923 15.4744 7.94736 15.4849 8.00461 15.4849C8.19148 15.4849 8.36811 15.3724 8.44079 15.188L10.3264 10.4052C10.4682 10.0884 10.7161 9.82887 11.0204 9.67612L13.4347 8.50019L11.0249 11.4199C10.6641 11.857 10.4734 12.4143 10.4734 13.0314V29.2189C10.4734 29.4074 10.49 29.592 10.52 29.7719L5.68992 27.6316C4.59879 27.1482 4.10429 25.864 4.58779 24.769C4.58986 24.7642 4.59186 24.7594 4.59386 24.7547L7.64904 17.1619C7.74567 16.9217 7.62936 16.6487 7.38917 16.5521C7.14886 16.4554 6.87598 16.5718 6.77929 16.8119L3.72679 24.3976C3.04042 25.9632 3.74942 27.7971 5.31011 28.4886L10.9741 30.9984C10.981 31.0014 10.9881 31.0037 10.9951 31.0064C11.57 31.9046 12.5639 32.5001 13.6922 32.5001H25.2547C27.0333 32.5001 28.5359 30.9974 28.5359 29.2188V26.4688C28.5359 26.2099 28.326 26.0001 28.0672 26.0001C27.8083 26.0001 27.5984 26.2099 27.5984 26.4688V29.2188C27.5984 30.4893 26.5251 31.5626 25.2547 31.5626H13.6922C12.4343 31.5626 11.4109 30.5112 11.4109 29.2188V13.0313C11.4109 12.6289 11.5243 12.2875 11.748 12.0166L15.2244 7.80444C15.548 7.41244 15.9919 7.18756 16.4422 7.18756H22.5047C22.593 7.18756 22.681 7.1965 22.7679 7.21337C22.4745 8.21406 21.7476 9.04906 20.766 9.4675C20.5094 9.03819 20.0401 8.75006 19.5046 8.75006C18.6947 8.75006 18.0359 9.40894 18.0359 10.2188C18.0359 11.0287 18.6947 11.6876 19.5046 11.6876C20.2535 11.6876 20.8729 11.1239 20.962 10.3986C22.2244 9.92112 23.179 8.90937 23.6044 7.67444C23.6452 7.7155 23.6847 7.75869 23.7224 7.80444L27.1989 12.0166C27.4565 12.3287 27.5984 12.6891 27.5984 13.0314V24.2814C27.5984 24.5402 27.8082 24.7501 28.0671 24.7501ZM19.5046 10.7501C19.2117 10.7501 18.9734 10.5117 18.9734 10.2188C18.9734 9.92587 19.2117 9.68756 19.5046 9.68756C19.7975 9.68756 20.0359 9.92587 20.0359 10.2188C20.0359 10.5117 19.7975 10.7501 19.5046 10.7501Z"
                          fill="#00B307"
                        />
                        <path
                          d="M15.4424 25.4375C15.5623 25.4375 15.6823 25.3917 15.7738 25.3002L23.7738 17.3002C23.9569 17.1171 23.9569 16.8203 23.7738 16.6373C23.5908 16.4542 23.294 16.4542 23.111 16.6373L15.111 24.6373C14.8121 24.9159 15.0414 25.4517 15.4424 25.4375Z"
                          fill="#00B307"
                        />
                        <path
                          d="M16.4414 20.5C17.5614 20.5 18.4727 19.5887 18.4727 18.4687C18.4727 17.3487 17.5614 16.4375 16.4414 16.4375H16.3789C15.2589 16.4375 14.3477 17.3487 14.3477 18.4687C14.3477 19.5887 15.2589 20.5 16.3789 20.5H16.4414ZM15.2852 18.4687C15.2852 17.8657 15.7758 17.375 16.3789 17.375H16.4414C17.0445 17.375 17.5352 17.8657 17.5352 18.4687C17.5352 19.0718 17.0445 19.5625 16.4414 19.5625H16.3789C15.7758 19.5625 15.2852 19.0718 15.2852 18.4687Z"
                          fill="#00B307"
                        />
                        <path
                          d="M22.5039 25.4375H22.5664C23.6864 25.4375 24.5977 24.5262 24.5977 23.4062C24.5977 22.2862 23.6864 21.375 22.5664 21.375H22.5039C21.3839 21.375 20.4727 22.2862 20.4727 23.4062C20.4727 24.5262 21.3839 25.4375 22.5039 25.4375ZM22.5039 22.3125H22.5664C23.1695 22.3125 23.6602 22.8032 23.6602 23.4062C23.6602 24.0093 23.1695 24.5 22.5664 24.5H22.5039C21.9008 24.5 21.4102 24.0093 21.4102 23.4062C21.4102 22.8032 21.9008 22.3125 22.5039 22.3125Z"
                          fill="#00B307"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_43081">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="first-features-details">
                      <p>39% Discount</p>
                      <p>Save your 39% money with us</p>
                    </div>
                  </div>

                  <div className="second-features">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_460_43091)">
                        <path
                          d="M31.9759 1.3712C31.9127 1.17858 31.7368 1.04539 31.5343 1.03695C30.5147 0.994517 27.7279 1.00183 23.8822 1.9852C20.3025 2.90064 16.9433 4.40533 14.1675 6.3367C13.9472 6.49002 13.893 6.79283 14.0462 7.01314C14.1994 7.23345 14.5022 7.28777 14.7226 7.13452C17.4039 5.2687 20.6546 3.81377 24.1229 2.92683C25.4189 2.59545 26.7587 2.34389 28.029 2.18627C27.5082 2.4112 26.95 2.67439 26.369 2.98289C22.4401 5.06858 20.245 7.73552 19.032 9.8792C18.8726 9.16395 18.8289 8.34189 18.8286 7.97552C18.8285 7.7072 18.611 7.48977 18.3427 7.48977C18.0743 7.48977 17.8567 7.70733 17.8567 7.9757C17.8567 8.19077 17.8739 9.98302 18.4167 11.0878C17.6686 12.6852 16.9689 14.2821 16.2918 15.8286C16.0042 16.4855 15.7211 17.132 15.4404 17.7649C15.0026 16.9405 14.4256 15.4479 14.5839 13.4956C14.6055 13.2282 14.4063 12.9937 14.1387 12.972C13.872 12.9508 13.6368 13.1496 13.6151 13.4171C13.3877 16.2219 14.503 18.1801 14.9555 18.848C14.1074 20.7223 13.271 22.4484 12.3902 23.9217C11.9367 22.895 11.2263 20.9387 11.2263 18.7604C11.2263 18.492 11.0087 18.2745 10.7404 18.2745C10.472 18.2745 10.2544 18.492 10.2544 18.7604C10.2544 21.6498 11.372 24.1069 11.7742 24.8975C10.8119 26.3353 9.78436 27.4596 8.62367 28.1438C5.08779 24.3037 4.74292 17.0988 10.9201 10.4274C11.6223 9.66902 12.3929 8.94508 13.2107 8.27577C13.4184 8.10577 13.4489 7.79964 13.2789 7.59195C13.1089 7.38427 12.8027 7.35377 12.5951 7.5237C11.7429 8.22133 10.9394 8.97614 10.207 9.76708C3.69104 16.8043 4.05817 24.4746 7.79436 28.6765C4.54073 30.8661 0.514981 31.0029 0.472856 31.0041C0.204731 31.0113 -0.00683118 31.2344 0.000168815 31.5026C0.00710632 31.7665 0.223231 31.9758 0.485731 31.9758C0.490044 31.9758 0.494419 31.9757 0.498731 31.9756C0.685231 31.9707 4.97954 31.83 8.49723 29.3732C9.56311 30.2429 11.235 30.772 13.2621 30.772C15.557 30.772 18.3072 30.0937 21.148 28.4638C23.7798 26.9538 25.6666 24.6438 26.7561 21.5981C27.6891 18.9901 28.0037 15.8521 27.666 12.5234C27.0639 6.58933 29.3056 3.91164 31.8177 1.90202C31.9759 1.77533 32.0389 1.56383 31.9759 1.3712ZM27.6832 5.34633C26.7273 7.34727 26.4054 9.72702 26.699 12.6214C27.0222 15.8071 26.7255 18.798 25.8409 21.2707C24.8315 24.0926 23.0898 26.229 20.6643 27.6208C17.6035 29.377 15.0344 29.7749 13.418 29.7995C11.7655 29.8254 10.3365 29.4726 9.37767 28.8195C10.1757 28.3018 10.9084 27.6075 11.5969 26.7693C11.6348 26.7696 11.6757 26.7698 11.7214 26.7698C12.1986 26.7698 13.0877 26.7493 14.1367 26.6268C16.2354 26.3815 17.8898 25.8636 19.0541 25.0875C19.2774 24.9386 19.3377 24.6369 19.1889 24.4136C19.04 24.1904 18.7383 24.1301 18.515 24.2789C16.7214 25.4746 13.8324 25.7343 12.3412 25.7856C13.2865 24.4374 14.1572 22.8185 15.0159 21.0255C15.8609 21.0234 18.104 20.8406 20.2367 19.1404C20.4465 18.9731 20.481 18.6673 20.3137 18.4575C20.1464 18.2476 19.8407 18.2132 19.6309 18.3805C18.0646 19.6291 16.407 19.9518 15.4841 20.0291C16.0444 18.8166 16.6045 17.5374 17.182 16.2185C17.48 15.5377 17.7827 14.8468 18.0915 14.1512C18.1248 14.152 18.16 14.1525 18.197 14.1525C18.9295 14.1525 20.3882 13.9738 21.9912 12.7861C22.2068 12.6264 22.2521 12.322 22.0923 12.1064C21.9325 11.8908 21.6282 11.8455 21.4125 12.0053C20.4235 12.738 19.5133 13.0133 18.9238 13.1152C18.7809 13.14 18.6501 13.1556 18.5319 13.1656C18.8151 12.5371 19.1042 11.9065 19.401 11.2768C21.2114 7.43527 24.423 5.12058 26.7985 3.85527C27.8283 3.30677 28.7948 2.90214 29.5879 2.61302C28.8911 3.34727 28.2111 4.24133 27.6832 5.34633Z"
                          fill="#00B307"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_43091">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="second-features-details">
                      <p>100% Organic</p>
                      <p>100% Organic Vegetables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : Ainfo ? (
            <div className="Ainfo">
              <div className="Ainfo-details">
                <p>
                  Weight: <span>03</span>
                </p>

                <p>
                  Category: <span>{selectedProduct.category}</span>
                </p>

                <p>
                  Type: <span>Lorem Ipsum</span>
                </p>

                <p>
                  Stock <span>Status:(5,122)</span>
                </p>

                <p>
                  Tags: <span>Lorem,Ipsum,Doler,Sit,Amet,Alpha,XAB</span>
                </p>
              </div>

              <div className="thisgigga-container">
                <div className="thisgiggaIMAGE"></div>
                <div className="featuresOfThis-gigga">
                  <div className="first-features">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_460_43081)">
                        <path
                          d="M28.0671 24.7501C28.326 24.7501 28.5359 24.5402 28.5359 24.2813V13.0313C28.5359 12.4718 28.3178 11.8995 27.9219 11.4198L24.4454 7.20769C24.2633 6.987 24.0539 6.801 23.8265 6.65287C23.8405 6.50962 23.8484 6.36494 23.8484 6.21887V0.968872C23.8484 0.709997 23.6385 0.500122 23.3797 0.500122C23.1208 0.500122 22.9109 0.709997 22.9109 0.968872C22.9109 0.968872 22.91 6.26356 22.9096 6.28593C22.7762 6.26231 22.6409 6.25012 22.5047 6.25012H16.4422C16.0154 6.25012 15.597 6.36987 15.2224 6.58994C15.2062 6.59575 15.1902 6.60225 15.1744 6.60994L10.605 8.83568C10.0987 9.08962 9.69392 9.51556 9.46498 10.035C9.46248 10.0407 9.46011 10.0464 9.45786 10.0521L7.56861 14.8441C7.47367 15.085 7.59192 15.3572 7.83279 15.4522C7.88923 15.4744 7.94736 15.4849 8.00461 15.4849C8.19148 15.4849 8.36811 15.3724 8.44079 15.188L10.3264 10.4052C10.4682 10.0884 10.7161 9.82887 11.0204 9.67612L13.4347 8.50019L11.0249 11.4199C10.6641 11.857 10.4734 12.4143 10.4734 13.0314V29.2189C10.4734 29.4074 10.49 29.592 10.52 29.7719L5.68992 27.6316C4.59879 27.1482 4.10429 25.864 4.58779 24.769C4.58986 24.7642 4.59186 24.7594 4.59386 24.7547L7.64904 17.1619C7.74567 16.9217 7.62936 16.6487 7.38917 16.5521C7.14886 16.4554 6.87598 16.5718 6.77929 16.8119L3.72679 24.3976C3.04042 25.9632 3.74942 27.7971 5.31011 28.4886L10.9741 30.9984C10.981 31.0014 10.9881 31.0037 10.9951 31.0064C11.57 31.9046 12.5639 32.5001 13.6922 32.5001H25.2547C27.0333 32.5001 28.5359 30.9974 28.5359 29.2188V26.4688C28.5359 26.2099 28.326 26.0001 28.0672 26.0001C27.8083 26.0001 27.5984 26.2099 27.5984 26.4688V29.2188C27.5984 30.4893 26.5251 31.5626 25.2547 31.5626H13.6922C12.4343 31.5626 11.4109 30.5112 11.4109 29.2188V13.0313C11.4109 12.6289 11.5243 12.2875 11.748 12.0166L15.2244 7.80444C15.548 7.41244 15.9919 7.18756 16.4422 7.18756H22.5047C22.593 7.18756 22.681 7.1965 22.7679 7.21337C22.4745 8.21406 21.7476 9.04906 20.766 9.4675C20.5094 9.03819 20.0401 8.75006 19.5046 8.75006C18.6947 8.75006 18.0359 9.40894 18.0359 10.2188C18.0359 11.0287 18.6947 11.6876 19.5046 11.6876C20.2535 11.6876 20.8729 11.1239 20.962 10.3986C22.2244 9.92112 23.179 8.90937 23.6044 7.67444C23.6452 7.7155 23.6847 7.75869 23.7224 7.80444L27.1989 12.0166C27.4565 12.3287 27.5984 12.6891 27.5984 13.0314V24.2814C27.5984 24.5402 27.8082 24.7501 28.0671 24.7501ZM19.5046 10.7501C19.2117 10.7501 18.9734 10.5117 18.9734 10.2188C18.9734 9.92587 19.2117 9.68756 19.5046 9.68756C19.7975 9.68756 20.0359 9.92587 20.0359 10.2188C20.0359 10.5117 19.7975 10.7501 19.5046 10.7501Z"
                          fill="#00B307"
                        />
                        <path
                          d="M15.4424 25.4375C15.5623 25.4375 15.6823 25.3917 15.7738 25.3002L23.7738 17.3002C23.9569 17.1171 23.9569 16.8203 23.7738 16.6373C23.5908 16.4542 23.294 16.4542 23.111 16.6373L15.111 24.6373C14.8121 24.9159 15.0414 25.4517 15.4424 25.4375Z"
                          fill="#00B307"
                        />
                        <path
                          d="M16.4414 20.5C17.5614 20.5 18.4727 19.5887 18.4727 18.4687C18.4727 17.3487 17.5614 16.4375 16.4414 16.4375H16.3789C15.2589 16.4375 14.3477 17.3487 14.3477 18.4687C14.3477 19.5887 15.2589 20.5 16.3789 20.5H16.4414ZM15.2852 18.4687C15.2852 17.8657 15.7758 17.375 16.3789 17.375H16.4414C17.0445 17.375 17.5352 17.8657 17.5352 18.4687C17.5352 19.0718 17.0445 19.5625 16.4414 19.5625H16.3789C15.7758 19.5625 15.2852 19.0718 15.2852 18.4687Z"
                          fill="#00B307"
                        />
                        <path
                          d="M22.5039 25.4375H22.5664C23.6864 25.4375 24.5977 24.5262 24.5977 23.4062C24.5977 22.2862 23.6864 21.375 22.5664 21.375H22.5039C21.3839 21.375 20.4727 22.2862 20.4727 23.4062C20.4727 24.5262 21.3839 25.4375 22.5039 25.4375ZM22.5039 22.3125H22.5664C23.1695 22.3125 23.6602 22.8032 23.6602 23.4062C23.6602 24.0093 23.1695 24.5 22.5664 24.5H22.5039C21.9008 24.5 21.4102 24.0093 21.4102 23.4062C21.4102 22.8032 21.9008 22.3125 22.5039 22.3125Z"
                          fill="#00B307"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_43081">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="first-features-details">
                      <p>39% Discount</p>
                      <p>Save your 39% money with us</p>
                    </div>
                  </div>

                  <div className="second-features">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_460_43091)">
                        <path
                          d="M31.9759 1.3712C31.9127 1.17858 31.7368 1.04539 31.5343 1.03695C30.5147 0.994517 27.7279 1.00183 23.8822 1.9852C20.3025 2.90064 16.9433 4.40533 14.1675 6.3367C13.9472 6.49002 13.893 6.79283 14.0462 7.01314C14.1994 7.23345 14.5022 7.28777 14.7226 7.13452C17.4039 5.2687 20.6546 3.81377 24.1229 2.92683C25.4189 2.59545 26.7587 2.34389 28.029 2.18627C27.5082 2.4112 26.95 2.67439 26.369 2.98289C22.4401 5.06858 20.245 7.73552 19.032 9.8792C18.8726 9.16395 18.8289 8.34189 18.8286 7.97552C18.8285 7.7072 18.611 7.48977 18.3427 7.48977C18.0743 7.48977 17.8567 7.70733 17.8567 7.9757C17.8567 8.19077 17.8739 9.98302 18.4167 11.0878C17.6686 12.6852 16.9689 14.2821 16.2918 15.8286C16.0042 16.4855 15.7211 17.132 15.4404 17.7649C15.0026 16.9405 14.4256 15.4479 14.5839 13.4956C14.6055 13.2282 14.4063 12.9937 14.1387 12.972C13.872 12.9508 13.6368 13.1496 13.6151 13.4171C13.3877 16.2219 14.503 18.1801 14.9555 18.848C14.1074 20.7223 13.271 22.4484 12.3902 23.9217C11.9367 22.895 11.2263 20.9387 11.2263 18.7604C11.2263 18.492 11.0087 18.2745 10.7404 18.2745C10.472 18.2745 10.2544 18.492 10.2544 18.7604C10.2544 21.6498 11.372 24.1069 11.7742 24.8975C10.8119 26.3353 9.78436 27.4596 8.62367 28.1438C5.08779 24.3037 4.74292 17.0988 10.9201 10.4274C11.6223 9.66902 12.3929 8.94508 13.2107 8.27577C13.4184 8.10577 13.4489 7.79964 13.2789 7.59195C13.1089 7.38427 12.8027 7.35377 12.5951 7.5237C11.7429 8.22133 10.9394 8.97614 10.207 9.76708C3.69104 16.8043 4.05817 24.4746 7.79436 28.6765C4.54073 30.8661 0.514981 31.0029 0.472856 31.0041C0.204731 31.0113 -0.00683118 31.2344 0.000168815 31.5026C0.00710632 31.7665 0.223231 31.9758 0.485731 31.9758C0.490044 31.9758 0.494419 31.9757 0.498731 31.9756C0.685231 31.9707 4.97954 31.83 8.49723 29.3732C9.56311 30.2429 11.235 30.772 13.2621 30.772C15.557 30.772 18.3072 30.0937 21.148 28.4638C23.7798 26.9538 25.6666 24.6438 26.7561 21.5981C27.6891 18.9901 28.0037 15.8521 27.666 12.5234C27.0639 6.58933 29.3056 3.91164 31.8177 1.90202C31.9759 1.77533 32.0389 1.56383 31.9759 1.3712ZM27.6832 5.34633C26.7273 7.34727 26.4054 9.72702 26.699 12.6214C27.0222 15.8071 26.7255 18.798 25.8409 21.2707C24.8315 24.0926 23.0898 26.229 20.6643 27.6208C17.6035 29.377 15.0344 29.7749 13.418 29.7995C11.7655 29.8254 10.3365 29.4726 9.37767 28.8195C10.1757 28.3018 10.9084 27.6075 11.5969 26.7693C11.6348 26.7696 11.6757 26.7698 11.7214 26.7698C12.1986 26.7698 13.0877 26.7493 14.1367 26.6268C16.2354 26.3815 17.8898 25.8636 19.0541 25.0875C19.2774 24.9386 19.3377 24.6369 19.1889 24.4136C19.04 24.1904 18.7383 24.1301 18.515 24.2789C16.7214 25.4746 13.8324 25.7343 12.3412 25.7856C13.2865 24.4374 14.1572 22.8185 15.0159 21.0255C15.8609 21.0234 18.104 20.8406 20.2367 19.1404C20.4465 18.9731 20.481 18.6673 20.3137 18.4575C20.1464 18.2476 19.8407 18.2132 19.6309 18.3805C18.0646 19.6291 16.407 19.9518 15.4841 20.0291C16.0444 18.8166 16.6045 17.5374 17.182 16.2185C17.48 15.5377 17.7827 14.8468 18.0915 14.1512C18.1248 14.152 18.16 14.1525 18.197 14.1525C18.9295 14.1525 20.3882 13.9738 21.9912 12.7861C22.2068 12.6264 22.2521 12.322 22.0923 12.1064C21.9325 11.8908 21.6282 11.8455 21.4125 12.0053C20.4235 12.738 19.5133 13.0133 18.9238 13.1152C18.7809 13.14 18.6501 13.1556 18.5319 13.1656C18.8151 12.5371 19.1042 11.9065 19.401 11.2768C21.2114 7.43527 24.423 5.12058 26.7985 3.85527C27.8283 3.30677 28.7948 2.90214 29.5879 2.61302C28.8911 3.34727 28.2111 4.24133 27.6832 5.34633Z"
                          fill="#00B307"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_43091">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="second-features-details">
                      <p>100% Organic</p>
                      <p>100% Organic Vegetables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : CFeedBack ? (
            <div className="Customer-feedback">
              <div className="Cfeedback-reviews1">
                <div className="user-img-and-name">
                  <div className="usernameimgstars-and-time">
                    <div className="userImage1"></div>

                    <div>
                      <p className="user-name">Kristin Watson</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>

                  <p className="posted-Date">2 min ago</p>
                </div>

                <div className="posted-comment">
                  Duis at ullamcorper nulla, eu dictum eros
                </div>
              </div>

              <div className="Cfeedback-reviews2">
                <div className="user-img-and-name">
                  <div className="usernameimgstars-and-time">
                    <div className="userImage2"></div>

                    <div>
                      <p className="user-name">Jane Cooper</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>

                  <p className="posted-Date">30 April, 2021</p>
                </div>

                <div className="posted-comment">
                  Keep the soil evenly moist for the healthiest growth. If the
                  sun gets too hot, Chinese cabbage tends to "bolt" or go to
                  seed; in long periods of heat, some kind of shade may be
                  helpful. Watch out for snails, as they will harm the plants.
                </div>
              </div>

              <div className="Cfeedback-reviews3">
                <div className="user-img-and-name">
                  <div className="usernameimgstars-and-time">
                    <div className="userImage3"></div>

                    <div>
                      <p className="user-name">Jacob Jones</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>

                  <p className="posted-Date">54 min ago</p>
                </div>

                <div className="posted-comment">
                  Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                  lacus.
                </div>
              </div>

              <div className="Cfeedback-reviews4">
                <div className="user-img-and-name">
                  <div className="usernameimgstars-and-time">
                    <div className="userImage4"></div>

                    <div>
                      <p className="user-name">Ralph Edwards</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>

                  <p className="posted-Date">2 days ago</p>
                </div>

                <div className="posted-comment">
                  200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom
                  Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a.
                  Canton's Choice, Bok Choi, from USA
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="footer">
        <div className="foot-one">
          <div className="newletter-desc">
            <h1>Subcribe our Newsletter</h1>
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
                <img src={plantlogo} alt="plant"/>
              </div>

              <div className="homepageicon-div">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </div>

              <div className="homepageicon-phonenumber">
                <p>(219)555-0114</p> <p>or</p> <p>Proxy@gmail.com</p>
              </div>
            </div>

            <div className="foot-two-phase1-part2">
              <h3>My Account</h3>
              <div className="links">
                <NavLink className="footer-all-links">My Account</NavLink>
                <NavLink className="footer-all-links">Order History</NavLink>
                <NavLink className="footer-all-links">Shoppin Cart</NavLink>
                <NavLink className="footer-all-links">Wishlist</NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part3">
              <h3>Helps</h3>
              <div className="help-links">
                <NavLink className="footer-all-links">Contact</NavLink>
                <NavLink className="footer-all-links">Faqs</NavLink>
                <NavLink className="footer-all-links">
                  Terms & Condition
                </NavLink>
                <NavLink className="footer-all-links">Privacy Policy</NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part4">
              <h3>Proxy</h3>
              <div className="proxy-links">
                <NavLink className="footer-all-links">About</NavLink>
                <NavLink className="footer-all-links">Shop</NavLink>
                <NavLink className="footer-all-links">Product</NavLink>
                <NavLink className="footer-all-links">Track Order</NavLink>
              </div>
            </div>

            <div className="foot-two-phase1-part5">
              <h3>Categories</h3>
              <div className="categories-links">
                <NavLink className="footer-all-links">
                  Fruits & Vegetables
                </NavLink>
                <NavLink className="footer-all-links">Meat & Fish</NavLink>
                <NavLink className="footer-all-links">Bread & Bakery</NavLink>
                <NavLink className="footer-all-links">Beauty & Health</NavLink>
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

export default SingleProductPage;

import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import plant from "../resources/Group.png";
import Magnifying from "./Magnifying";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import FreshFruit from "../resources/Fresh Fruit.png";
import FreshVegetables from "../resources/Fresh vegetables.png";
import MeatFish from "../resources/Meat & Fish.png";
import Snacks from "../resources/Snacks.png";
import Beverages from "../resources/Beverages.png";
import BeautyHealth from "../resources/Beauty & Health.png";
import BreadBakery from "../resources/Bread Bakery.png";
import BakingNeeds from "../resources/Baking Needs.png";
import Cooking from "../resources/Cooking.png";
import DiabeticFood from "../resources/Diabetic Food.png";
import DishDetergents from "../resources/Dish Detergents.png";
import Oil from "../resources/Oil.png";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <div className="container">

      <div className="Bannar">
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

      <div className="features">
        <div className="free-shipping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
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

      <div className="Popular-Categories">
        <h1 className="Popular-Categories-heading">Popular Categories</h1>

        <div className="first-row">
          <ul className="Popular-Categories-first-ul">
            <li className="Fresh-Fruit">
              <img src={FreshFruit} className="Fresh-fruit-img" />
              <h2 className="fresh-fruit-title">Fresh Fruit</h2>
            </li>

            <li className="Fresh-Vegetables">
              <img src={FreshVegetables} className="Fresh-Vegetables-img" />
              <h2 className="fresh-vegetables-title">Fresh Vegetables</h2>
            </li>

            <li className="Meat-Fish">
              <img src={MeatFish} className="Meat-Fish-img" />
              <h2 className="Meat-Fish-title">Meat & Fish</h2>
            </li>

            <li className="Snacks">
              <img src={Snacks} className="Snacks-img" />
              <h2 className="Snacks-title">Snacks</h2>
            </li>

            <li className="Beverages">
              <img src={Beverages} className="Beverages-img" />
              <h2 className="Beverages-title">Beverages</h2>
            </li>

            <li className="Beauty-Health">
              <img src={BeautyHealth} className="Beauty-Health-img" />
              <h2 className="Beauty-Health-title">Beauty & Health</h2>
            </li>
          </ul>
        </div>

        <div className="second-row">
          <ul className="Popular-Categories-second-ul">
            <li className="Bread-Bakery">
              <img src={BreadBakery} className="Bread-Bakery-img" />
              <h2 className="Bread-Bakery-title">Bread & Bakery</h2>
            </li>

            <li className="Baking-Needs">
              <img src={BakingNeeds} className="Baking-Needs-img" />
              <h2 className="Bread-Needs-title">Baking Needs</h2>
            </li>

            <li className="Cooking">
              <img src={Cooking} className="Cooking-img" />
              <h2 className="Cooking-title">Cooking</h2>
            </li>

            <li className="Diabetic-Food">
              <img src={DiabeticFood} className="Diabetic-Food-img" />
              <h2 className="Diabetic-Food-title">Diabetic Food</h2>
            </li>

            <li className="Dish-Detergents">
              <img src={DishDetergents} className="Dish-Detergents-img" />
              <h2 className="Dish-Detergents-title">Dish Detergents</h2>
            </li>

            <li className="Oil">
              <img src={Oil} className="Oil-img" />
              <h2 className="Oil-title">Oil</h2>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="Popular-products">
        <h1 className="Popular-Products-title">Popular Products</h1>
        <div className="products-div">
          <ul className="first-row-of-popular-products">

            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

          </ul>

          <ul className="second-row-of-popular-products">
            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>

            <li className="Green-apple">

              <img src={GreenApple} className="green-apple-img" />

              <p className="green-apple-title">Green Apple</p>

              <div className="cost-section">
                <p className="green-apple-cost">$cost</p>
                <BsHandbag/>
              </div>

              <div className="rating">
                <CiStar/>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      {/* //!!!  IMPORTANT:- THE ABOVE COMMENTED DIV WILL START AFTER THE DATA.JS FORMATION  */}

      <div className="Sales-Bannar">
        <div className="sales-bannar-sales-of-the-month">
          <h3>BEST DEALS</h3>
          <h1>Sale of the Month</h1>
        </div>

        <div className="sales-bannar-low-fat-meat"></div>

        <div className="sales-bannar-fresh-fruit"></div>
      </div>
    </div>
  );
};

export default Home;

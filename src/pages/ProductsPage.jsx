import React from "react";
import { useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import data from "../Data";
import { RiStarSFill } from "react-icons/ri";
import Timer from "../components/Timer";
import "./ProductPage.css";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const value = location.state?.value;

  const { cart } = useSelector((state) => state);
  const dispath = useDispatch();

  const navigate = useNavigate();

  function eyeHandler(itemId) {
    navigate(`/singleProduct/${itemId}`);
  }

  return (
    <div className="products-container">
      <div className="track-of-path">
        <div className="track">
          <GoHome className="home" onClick={navigation("/")} />

          <GoChevronRight className="rightIcon" />

          <p className="login">
            {value === 1 ? (
              <p className="category-section-name">Fresh Fruits</p>
            ) : value === 2 ? (
              <p className="category-section-name">Fresh Vegetables</p>
            ) : value === 3 ? (
              <p className="category-section-name">Meat</p>
            ) : value === 4 ? (
              <p className="category-section-name">Snacks</p>
            ) : value === 5 ? (
              <p className="category-section-name">Beverages</p>
            ) : value === 6 ? (
              <p className="category-section-name">Bread & Bakery</p>
            ) : value === 7 ? (
              <p className="category-section-name">Baking Needs</p>
            ) : value === 8 ? (
              <p className="category-section-name">Cooking</p>
            ) : value === 9 ? (
              <p className="category-section-name">Diabetic Food</p>
            ) : value === 10 ? (
              <p className="category-section-name">Dish Detergents</p>
            ) : null}
          </p>
        </div>
      </div>

      <div className="shoping-bannar">
        <div className="best-deals">
          <h2>Best Deals</h2>
          <h1>Sale of the month</h1>
          <Timer className="timer-product" />
        </div>
      </div>

      <div className="all-product-showing-div-grid">
        {data.map((item, id) => {
          if (value === 1) {
            if (item.category === "FreshFruit") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />
                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 2) {
            if (item.category === "Freshvegetables") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 3) {
            if (item.category === "Meat") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 4) {
            if (item.category === "Snacks") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 5) {
            if (item.category === "Beverages") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 6) {
            if (item.category === "BreadBakery") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 7) {
            if (item.category === "BakingNeeds") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 8) {
            if (item.category === "Cooking") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 9) {
            if (item.category === "DiabeticFood") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          } else if (value === 10) {
            if (item.category === "Dishdetergent") {
              return (
                <div className="fruit-section" key={id}>
                  <div>
                    <div
                      className="eye-btn-checkout"
                      onClick={() => {
                        eyeHandler(item.id);
                      }}
                    >
                      <FaEye />
                    </div>
                    <img src={item.images} className="fruit-images" />

                    <div className="bag-others">
                      <div className="product-name-and-price">
                        <h2 className="productname">{item.productName}</h2>
                        <p className="productPrice">₹{item.price}</p>

                        <div className="stars">
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-filled" />
                          <RiStarSFill className="star-not-filled" />
                          <RiStarSFill className="star-not-filled" />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default ProductsPage;

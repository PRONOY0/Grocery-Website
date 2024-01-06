import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import plantlogo from "../resources/Group.png";
import "./Signin.css";
import "./Contactus.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="track-of-path">
        <div className="track">
          <GoHome className="home" />

          <GoChevronRight className="rightIcon" />

          <p className="login">Contact</p>
        </div>
      </div>

      <div className="location-and-contact">
        <div className="map-container-one">
          <div className="contact-info">
            <div className="address">
              <div>
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6562 46.2188H40.3438"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 27.0938C27.6908 27.0938 29.3123 26.4221 30.5078 25.2266C31.7033 24.031 32.375 22.4095 32.375 20.7188C32.375 19.028 31.7033 17.4065 30.5078 16.2109C29.3123 15.0154 27.6908 14.3438 26 14.3438C24.3092 14.3438 22.6877 15.0154 21.4922 16.2109C20.2966 17.4065 19.625 19.028 19.625 20.7188C19.625 22.4095 20.2966 24.031 21.4922 25.2266C22.6877 26.4221 24.3092 27.0938 26 27.0938V27.0938Z"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41.9375 20.7188C41.9375 35.0625 26 46.2188 26 46.2188C26 46.2188 10.0625 35.0625 10.0625 20.7188C10.0625 16.4919 11.7416 12.4381 14.7305 9.44924C17.7193 6.46037 21.7731 4.78125 26 4.78125C30.2269 4.78125 34.2807 6.46037 37.2695 9.44924C40.2584 12.4381 41.9375 16.4919 41.9375 20.7188V20.7188Z"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
            </div>

            <div className="gmail">
              <div>
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_460_40738)">
                    <path
                      d="M48.95 5.9502H3.05C1.64172 5.9502 0.5 7.09182 0.5 8.5002V42.5002C0.5 43.9084 1.64162 45.0502 3.05 45.0502H48.95C50.3583 45.0502 51.5 43.9085 51.5 42.5002V8.5002C51.5 7.09192 50.3584 5.9502 48.95 5.9502ZM49.8 42.5003C49.8 42.9697 49.4195 43.3502 48.95 43.3502H3.05C2.58054 43.3502 2.20003 42.9697 2.20003 42.5003V8.5002C2.20003 8.03074 2.58054 7.65023 3.05 7.65023H48.95C49.4195 7.65023 49.8 8.03074 49.8 8.5002V42.5003Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M47.3239 9.35387C47.0993 9.33424 46.8761 9.40467 46.7035 9.5497L27.0939 26.0226C26.4614 26.5542 25.5384 26.5542 24.9059 26.0226L5.29654 9.5496C5.06395 9.35437 4.7448 9.29799 4.45942 9.40178C4.17404 9.50557 3.96566 9.7538 3.91286 10.0529C3.86007 10.3521 3.97084 10.6566 4.20342 10.8518L23.8129 27.3239C25.0768 28.388 26.9231 28.388 28.1871 27.3239L47.7965 10.8519C47.9692 10.707 48.0772 10.4994 48.0968 10.2748C48.1164 10.0501 48.046 9.82691 47.901 9.65429C47.7561 9.48147 47.5485 9.37349 47.3239 9.35387Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M16.8483 27.206C16.5474 27.1388 16.2338 27.2398 16.0286 27.4699L4.12856 40.2199C3.91321 40.4405 3.83412 40.7604 3.92197 41.0559C4.00983 41.3514 4.25079 41.5761 4.55161 41.6433C4.85253 41.7104 5.1661 41.6094 5.37129 41.3793L17.2713 28.6293C17.4867 28.4088 17.5658 28.0888 17.4779 27.7934C17.3901 27.4979 17.1492 27.2731 16.8483 27.206Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M35.9714 27.4699C35.7663 27.2398 35.4526 27.1388 35.1517 27.206C34.8508 27.2731 34.6099 27.4979 34.5221 27.7934C34.4342 28.0889 34.5133 28.4088 34.7287 28.6293L46.6287 41.3793C46.9514 41.7098 47.479 41.7221 47.8167 41.407C48.1545 41.0918 48.1788 40.5647 47.8714 40.2198L35.9714 27.4699Z"
                      fill="#2C742F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_460_40738">
                      <rect
                        width="51"
                        height="51"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span>Proxy@gmail.com Help.proxy@gmail.com</span>
            </div>

            <div className="phonenumber">
              <div>
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9829 7.24219C34.9249 8.03345 37.6074 9.58385 39.7616 11.7381C41.9159 13.8923 43.4663 16.5748 44.2575 19.5168"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.1865 13.9502C31.9513 14.425 33.5604 15.3551 34.8527 16.6474C36.145 17.9396 37.0751 19.5488 37.5499 21.3136"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4625 25.6416C19.2621 29.322 22.2449 32.292 25.933 34.0757C26.2031 34.2036 26.5018 34.2589 26.7998 34.2361C27.0977 34.2133 27.3846 34.1131 27.632 33.9456L33.0639 30.3255C33.3038 30.1653 33.5799 30.0674 33.8671 30.0408C34.1544 30.0141 34.4437 30.0595 34.709 30.1728L44.8699 34.5287C45.215 34.6753 45.5032 34.9301 45.691 35.2546C45.8788 35.5792 45.9561 35.956 45.9112 36.3283C45.5895 38.8411 44.3631 41.1506 42.4616 42.8244C40.56 44.4983 38.1135 45.4217 35.5802 45.4219C27.7558 45.4219 20.2518 42.3136 14.7191 36.7809C9.18637 31.2482 6.07813 23.7442 6.07812 15.9198C6.07836 13.3866 7.00185 10.9404 8.67571 9.03914C10.3496 7.13784 12.659 5.91181 15.1717 5.59057C15.544 5.54568 15.9208 5.62294 16.2454 5.81074C16.5699 5.99853 16.8247 6.28669 16.9713 6.63182L21.3307 16.8014C21.4428 17.0641 21.4883 17.3505 21.4632 17.6351C21.4381 17.9196 21.3431 18.1936 21.1867 18.4327L17.577 23.9478C17.4132 24.1962 17.3165 24.4828 17.2964 24.7796C17.2764 25.0765 17.3336 25.3734 17.4625 25.6416V25.6416Z"
                    stroke="#2C742F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span>(219) 555-0114 (164) 333-0487</span>
            </div>
          </div>

          <div className="hello-message">
            <h1>Just Say Hello!</h1>
            <p>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
            <input type="email" readOnly placeholder="zakirsoft@gmail.com"/>
            <input type="text" required placeholder="Say Hello!"/>
            <button>Send Message</button>
          </div>
        </div>

        <div className="map"></div>
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
                <img src={plantlogo} />
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

export default Contact;

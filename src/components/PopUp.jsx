import React, { useContext} from "react";
import "./PopUp.css";
import { LuUtensilsCrossed } from "react-icons/lu";
import { AppContext } from "../context/AppContext";

const PopUp = () => {

  const {close,setClose,subscribe,setSubscribe} = useContext(AppContext);

  const subscribeHandler = () => {
    setSubscribe(true);
  }
  
  return (
    <div className={`${(close) ? "hide-popup" : "no-hide-popup"} popup-container`}>
      <div className="popup">
        <div className="popup-image"></div>
        <div className="popup-desc">
          <LuUtensilsCrossed onClick={()=>{setClose((prev)=>!prev)}} className="crossIcon"/>
          
          <h1>Subcribe to Our Newsletter</h1>
          
          <p>
            Subscribe to our newlletter and Save your <span>20%</span>{" "}
            <span>money</span> with discount code today.
          </p>
          
          <div className="input-email-newsletter">
            <input type="email" placeholder="Email" required />
            <button onClick={subscribeHandler}>Subscribe</button>
          </div>

          <label className="nomessageagain">
            <input type="checkbox"/>
            Do not show this window
          </label>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

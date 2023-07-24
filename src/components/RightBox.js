import React from "react";
import "./RightBox.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // If you need solid icons

library.add(fas);

function RightBox() {
  return (
    <div className="RightBox">
      <div className="RightBox__header">
        <div className="RightBox__header__top">
          <div className="signUp">
            <div className="signUp__icon">1</div>
            <div className="signUp__text">Sign Up</div>
          </div>
          <div className="subscribe">
            <div className="subscribe__icon">2</div>
            <div className="subscribe__text">Subscribe</div>
          </div>
        </div>
        <div className="RightBox__heading">Select your subscription plan</div>
      </div>

      <div className="planContainer">
        <div className="planOption expired">
          <div className="planOption__tag">Offer expired</div>
          <div className="planOption__left">
            <div className="ring"></div>
            <div className="planOption__name">12 Months Subscription</div>
          </div>
          <div className="planOption__price">
            <div className="price__top">
              Total&nbsp;&ensp;{" "}
              <div className="plan__price">
                <FontAwesomeIcon icon="indian-rupee-sign" /> 99
              </div>
            </div>
            <div className="price__botton">
              <div className="perMonthPrice">
                <FontAwesomeIcon icon="indian-rupee-sign" />8
              </div>{" "}
              &ensp;<span className="mo">/mo</span>
            </div>
          </div>
        </div>
        <div className="planOption">
          <div className="planOption__tag">Recommended</div>
          <div className="planOption__left">
            <div className="ring"></div>
            <div className="planOption__name">12 Months Subscription</div>
          </div>
          <div className="planOption__price">
            <div className="price__top">
              Total&nbsp;&ensp;{" "}
              <div className="plan__price">
                <FontAwesomeIcon icon="indian-rupee-sign" /> 179
              </div>
            </div>
            <div className="price__botton">
              <div className="perMonthPrice">
                <FontAwesomeIcon icon="indian-rupee-sign" />
                15
              </div>{" "}
              &ensp;<span className="mo">/mo</span>
            </div>
          </div>
        </div>
        <div className="planOption">
          <div className="planOption__left">
            <div className="ring"></div>
            <div className="planOption__name">6 Months Subscription</div>
          </div>
          <div className="planOption__price">
            <div className="price__top">
              Total&nbsp;&ensp;{" "}
              <div className="plan__price">
                <FontAwesomeIcon icon="indian-rupee-sign" /> 149
              </div>
            </div>
            <div className="price__botton">
              <div className="perMonthPrice">
                <FontAwesomeIcon icon="indian-rupee-sign" />
                25
              </div>{" "}
              &ensp;<span className="mo">/mo</span>
            </div>
          </div>
        </div>
        <div className="planOption">
          <div className="planOption__left">
            <div className="ring"></div>
            <div className="planOption__name">3 Months Subscription</div>
          </div>
          <div className="planOption__price">
            <div className="price__top">
              Total&nbsp;&ensp;{" "}
              <div className="plan__price">
                <FontAwesomeIcon icon="indian-rupee-sign" /> 99
              </div>
            </div>
            <div className="price__botton">
              <div className="perMonthPrice">
                <FontAwesomeIcon icon="indian-rupee-sign" />
                33
              </div>{" "}
              &ensp;<span className="mo">/mo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bill">
        <div className="bill__header">
          <div className="bill__header__text">Subscription Fee</div>
          <div className="bill__header__amount">
            <FontAwesomeIcon icon="indian-rupee-sign" /> 18,500
          </div>
        </div>
        <div className="bill__discount">
          <div className="discount__top">
            <div className="discount__top__text">Limited time offer</div>
            <div className="discount__top__amount">
              -&nbsp;
              <FontAwesomeIcon icon="indian-rupee-sign" />
              18,401
            </div>
          </div>
          <div className="discount__bottom">
            <span className="discount__icon"></span>
            Offer valid till 25th March 2023
          </div>
        </div>
        <div className="bill__total">
          <div className="bill__total__text">
            <span className="bill__total_bold">Total</span> &#x28;Incl. of 18%
            GST&#x29;
          </div>
          <div className="bill__total__amount">
            <FontAwesomeIcon icon="indian-rupee-sign" /> 149
          </div>
        </div>
      </div>
      <div className="bill__buttons">
        <div className="cancelButton">CANCEL</div>
        <div className="proceedButton">PROCEED TO PAY</div>
      </div>
      <div className="razorpay"></div>
    </div>
  );
}

export default RightBox;

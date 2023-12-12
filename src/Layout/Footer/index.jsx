import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_upside">
          <div className="footer_categories">
            <p>CATEGORIES</p>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="footer_help">
            <p>HELP</p>
            <ul>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer_getInTouch">
            <p>GET IN TOUCH</p>
            <p className="anyQuestion">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="footer_getInTouch_icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
          <div className="footer_newSletter">
            <p>NEWSLETTER</p>
            <div className="subscribe-btn">
              <input type="text" placeholder="email@example.com" />
              <button className="footer_btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="footer_bankCard">
          <div className="footer_bankCard_img">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp"
              alt=""
            />
          </div>
          <div className="footer_bankCard_textBox">
            <p>
              Copyright ©2023 All rights reserved | This template is made with{" "}
              <i class="fa-regular fa-heart"></i> by <span>Colorlib</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

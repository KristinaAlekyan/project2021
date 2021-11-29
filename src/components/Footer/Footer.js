import React from "react";
import "./Footer.css";


function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>CONTACT</h4>
              <ui className="list-unstyled">
                <li>HS Building</li>
                <li>hsshop.com</li>
                <li>342-420-6969</li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>INFORMATION</h4>
              <ui className="list-unstyled">
                <li><a href = "/about"><font color = "white">About Us</font></a></li>
                <li><a href = "/contact"><font color = "white">Contact Us</font></a></li>
                <li><a href = "/faq"><font color = "white">FAQ's</font></a></li>
              </ui>
            </div>

            {/* Column3 */}
            <div className="col">
              <h4>CATEGORY</h4>
              <ui className="list-unstyled">
                <li>Household</li>
                <li>Personal Care</li>
                <li>Beverages</li>
                <li>Groceries</li>
              </ui>
            </div>


          </div>
          <hr />
        </div>
      </div>
    );
}

export default Footer;
import React from "react";
import "./Footer.css";
import phone from '../../images/phone.jpg'
import hs from '../../images/hs.jpg'
import build from '../../images/build.png'
import { Link } from "react-router-dom";


function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>CONTACT</h4>
              <ui className="list-unstyled">
                <li className = "logo"><a href = "https://www.google.com/maps/place/HelpSystems/@40.1768785,44.5244008,15z/data=!4m5!3m4!1s0x0:0xc2665e46b9d3d6a7!8m2!3d40.1768943!4d44.5243445" target = "_blank">
                <img  alt ="" src={build}/>
                <font color = "white">HS Building</font> </a></li>
                <li className = "logo">

                <a href = "/home"><img  alt ="" src={hs}/>
                    <font color = "white">
                      hsshop.com 
                      </font></a></li>
                <li>
                <a href="tel:342-420-6969" className = "logo">
                  
                    <img  alt ="" src={phone}/>
                    <font color = "white">342-420-6969</font>
                     
                  </a>
                            </li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>INFORMATION</h4>
              <ui className="list-unstyled">
                <li><Link to = "/about"><font color = "white">About Us</font></Link></li>
                <li><Link to = "/contact"><font color = "white">Contact Us</font></Link></li>
                <li><Link to = "/faq"><font color = "white">FAQ's</font></Link></li>
              </ui>
            </div>

            {/* Column3 */}
            <div className="col">
              <h4>CATEGORY</h4>
              <ui className="list-unstyled">
                <li><Link to = "/category/household"><font color = "white">Hausehold</font></Link></li>
                <li><Link to = "/category/personalcare"><font color = "white">Personal Care</font></Link></li>
                <li><Link to = "/category/beverages"><font color = "white">Beverages</font></Link></li>
                <li><Link to = "/category/groceries"><font color = "white">Groceries</font></Link></li>
              </ui>
            </div>


          </div>
          <hr />
        </div>
      </div>
    );
}

export default Footer;
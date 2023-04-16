import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          No.(34), 4th Street,(8) Block, Industrial Zone, South Okkalapa Tsp,
          Yangon
        </p>
        <p className="p__opensans">(+95) 9776301991</p>
        <p className="p__opensans">info@omukmyanmar.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.mainLogo} alt="footer_logo" />
        <p className="p__opensans">
          " The best way to find yourself to lose yourself in the service of
          others. "
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Sataurday</p>
        <p className="p__opensans">09:00 am - 5:00 pm</p>
        <p className="p__opensans">Sunday</p>
        <p className="p__opensans">09:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        © {Date()} OMUK Myanmar. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;

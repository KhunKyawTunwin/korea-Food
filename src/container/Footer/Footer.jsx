import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact"></div>

      <div className="app__footer-links_logo"></div>

      <div className="app__footer-links_work"></div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        © {Date()} OMUK Myanmar. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;

import React from "react";

import { images } from "../../constants";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Make With Love OMUK MYANMAR</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        OMUK is based upon the best manufacturing technique in Korea. Our goal
        is to introduce the excellence of our food to the whole world.As a
        flexible but principle company, we have the ability to respond more
        quickly to customer requirements and competitive challenges.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.waterFcake} alt="header img" />
    </div>
  </div>
);

export default Header;

import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">Whate We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Appetizer: a small dish served before a meal to stimulate the
            appetite.
          </p>
        </div>
        <p className="p__opensans">
          Reservation: an arrangement made in advance to have a table available
          at a restaurant at a specific time. Specials: dishes that are not on
          the regular menu and are offered for a limited time.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Mr Korean</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

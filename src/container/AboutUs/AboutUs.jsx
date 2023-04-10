import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          OMUK is based upon the best manufacturing technique in Korea. Our goal
          is to introduce the excellence of our food to the whole world.As a
          flexible but principle company, we have the ability to respond more
          quickly to customer requirements and competitive challenges. We always
          do our best with a strong cultural identity to serve people the best
          food.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          OMUK ( fish cake ) is a popular Korean street food that has been
          around for over a century1. It is made by mashing fish and adding
          other ingredients together to form a dough1. Eomuk is often served in
          a warm broth as part of a soup or stew1. Tteokbokki is another popular
          Korean street food that has been around since the late 19th century1.
          It is made with rice cakes.
          {/* fish cakes, and a spicy sauce1.           */}
          {/*
          Tteokbokki
          was originally a royal court dish but became popular among commoners
          after the Korean War1. */}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

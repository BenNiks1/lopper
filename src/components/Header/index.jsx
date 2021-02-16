import React from "react";
import HeaderNav from "./HeaderNav";

import arrowSvg from "../../assets/svg/arrow.svg";
import longArrowSvg from "../../assets/svg/longArrow.svg";

const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <HeaderNav nav={["Home", "Services", "Work", "About"]} />
        <div className="header__inner">

          <div className="header__intro">
            <p className="header__subtitle">what we do?</p>
            <h1 className="header__title">
              We grow <br/><span>great business</span>
            </h1>
          </div>

          <div className="header__subintro">
            <p className="header__subintro-text">
              Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
            </p>
            <button className="header__subintro-btn">
              <img src={arrowSvg} alt="btnNext" />
            </button>
          </div>

          <div className="header__scroll">
            {/* <p className="header__scroll-text">Scroll to see more</p> */}
            <button className="header__scroll-btn">Scroll to see more
              <img src={longArrowSvg} alt="downArrowSvg" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

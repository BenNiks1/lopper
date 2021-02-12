import React from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <HeaderNav nav={["Home", "Services", "Work", "About"]} />

        <div className="header__intro">
          <p className="header__subtitle">what we do?</p>
          <h1 className="header__title">
            We grow <span>great business</span>
          </h1>
        </div>
        <p className="header__subintro">
            Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
          </p>
      </div>
      
    </header>
  );
};

export default Header;

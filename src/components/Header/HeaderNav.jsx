import React from "react";
import phoneSvg from "../../assets/svg/phone.svg";
import { MenuBtn } from "./MenuBtn";

const HeaderNav = ({ nav }) => {
  return (
    <div className="header-nav ">
      <a href="/#" className="logo">
        Lopper
      </a>
      <nav className="nav">
        <ul className="nav__list">
          {nav.map((item, index) => (
            <li key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      </nav>
      <div className="contact">
        <img src={phoneSvg} alt="phoneSvg" />
        <a href="tel:(01)666-693-456" className="contact__tel">
          (01)666 - 693 - 456
        </a>
      </div>
      <MenuBtn />
    </div>
  );
};
export default HeaderNav;

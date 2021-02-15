import React, { Fragment } from "react";

const Intro = ({ items }) => {
  return (
    <div className="intro container">
      <Fragment>
        <p className="main__subtitle">Intro</p>
        <h2 className="main__title">What we do</h2>
        <p className="intro__text">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </Fragment>
      <ul className="intro__list">
        {items.map((item, index) => (
          <li className="list__item" key={`${item}_${index}`}>
            <i className="list__item-icon">{item.icon}</i>
            <p className="list__item-title">{item.title}</p>
            <p className="list__item-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;

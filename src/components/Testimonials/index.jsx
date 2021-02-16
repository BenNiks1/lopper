import React from "react";

import testimonials from "../../assets/testimonials.png";

const Testimonials = ({ items }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="main__subtitle">What we do</p>
        <h2 className="main__title">Make it easy with us</h2>
      </div>

      <ul className="testimonials__list">
        {items.map((item) => (
          
          <li key={item.id} className="list__item">
            <div className="list__item-inner container">
              <h4 className="list__item-title">{item.title}</h4>
              <p className="list__item-text">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <img src={testimonials} alt="testimonials" />
    </section>
  );
};

export default Testimonials;

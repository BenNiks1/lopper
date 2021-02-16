import React from "react";

const Numbers = ({ numbers }) => {
  return (
    <section className="numbers">
      <div className="numbers__inner">
        <p className="main__subtitle">What we do</p>
        <h2 className="main__title">
          What we do more than you can imangine, belive us.
        </h2>
      </div>
      <ul className="numbers__list">
        {numbers.map((item) => (
          <li key={item.id} className="list__item">
            <span>{item.number}</span>
            <p className="list__item-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Numbers;

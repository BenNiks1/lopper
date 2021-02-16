import React from "react";

import subscribeArrowSvg from "../../assets/svg/subscribeArrow.svg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2 className="newsletter__title">Subscribe to our newsletter</h2>
      <p className="newsletter__subtitle">
        Cras pulvinar mattis nunc sed blandit.
      </p>
      <form className="newsletter__form">
        <input
          type="email"
          className="newsletter__form-input"
          placeholder="ENTER EMAIL"
        />
        <button className="newsletter__form-btn">
          <p>subscribe</p>
          <img
            src={subscribeArrowSvg}
            className="newsletter__form-img"
            alt="submit"
          />
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

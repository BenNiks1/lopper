import React from "react";

const Clients = ({ clients }) => {
  return (
    <section className="clients">
      <div className="clients__inner container">
        <h2 className="clients__title">our clients</h2>
        <ul className="clients__list ">
          {clients.map((client) => (
            <li className="list__item">
              <img src={`/${client.img}.png`} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;

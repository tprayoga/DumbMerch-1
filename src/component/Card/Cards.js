import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  return (
    <Link to={`/detail-product/${props.id}`} className="card text-white bg-dark p-2 col-md-3 m-2 text-decoration-none">
      <form className="card-body d-grid">
        <img src={props.image} className="card-img-top mb-2" alt="..." />
        <h3 className="mb-4 text-danger">{props.title}</h3>
        <h6 className="mb-1">{`${formatter.format(props.price)}`}</h6>
        <p>Stock:{props.stock}</p>
      </form>
    </Link>
  );
};

export default Cards;

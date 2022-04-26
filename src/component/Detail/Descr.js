import React from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../Card/DataDummys";

const Descr = () => {
  const params = useParams();
  const index = params.id;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="mt-3  col-md-6 text-lg-start text-center">
      <h1 className="text-danger mb-2">{Data[index].title}</h1>
      <p className="text-light">Stock:{Data[index].stock} </p>
      <p className="text-light" style={{ textAlign: "justify" }}>
        {Data[index].desc}
      </p>
      <p className="text-light" style={{ textAlign: "justify" }}>
        We could use a lot of superlatives to describe these shoes. We could tell you that the new Air cushioning system delivers the most revolutionary sensation you’ve ever felt. Or say the cored-out foam midsole gives you an incredible,
        super soft feel. But what fun is giving away all the surprises? Lace up and feel the next era of Air for yourself. Made from at least 20% recycled materials by weight.
      </p>
      <h3 className="text-danger d-flex justify-content-end mb-3">{formatter.format(Data[index].price)}</h3>
      <div className="mb-4 d-flex justify-content-end">
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          37
        </button>
        <button className="btn btn-outline-dark rounded-circle me-2" type="button">
          38
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          39
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          40
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          41
        </button>
      </div>
      <div className="d-grid">
        <Link to="/profile" className="btn btn-lg btn-danger mb-2" type="button">
          Buy
        </Link>
        <button className="btn btn-lg btn-dark mb-2" type="button">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Descr;

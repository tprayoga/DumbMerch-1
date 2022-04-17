import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Card/DataDummys";

const Detailimage = () => {
  const params = useParams();
  const index = params.id;

  return (
    <div className="me-5 card border-danger bg-dark col-md-5 text-lg-start text-center">
      <img src={Data[index].image} className="img-fluid w-100" alt="..." />
    </div>
  );
};

export default Detailimage;

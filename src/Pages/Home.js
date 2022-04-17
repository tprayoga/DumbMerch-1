import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Cards from "../component/Card/Cards";
import { Data } from "../component/Card/DataDummys";
import Pagination from "../component/Card/Pagination";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 container">
        <div className="row m-4">
          <h2 className="text-danger mb-4">Products</h2>
          {Data.map((item, index) => {
            return <Cards key={index} id={index} title={item.title} image={item.image} price={item.price} stock={item.stock} />;
          })}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;

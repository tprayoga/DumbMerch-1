import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Cards from "../component/Card/Cards";
import { Data } from "../component/Card/DataDummys";
import Pagination from "../component/Card/Pagination";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar />
      <div className="mt-5 container">
        <div className="row m-4">
          <div className="d-flex justify-content-between">
            <h2 className="text-danger mb-4">Products</h2>
            <form className="ms-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            </form>
          </div>
          {Data.filter((Data) => Data.title.toLowerCase().includes(query)).map((item, index) => {
            return <Cards key={item.id} id={index} title={item.title} image={item.image} price={item.price} stock={item.stock} />;
          })}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;

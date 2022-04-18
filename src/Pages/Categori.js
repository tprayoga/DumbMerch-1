import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Data } from "../component/Card/DataDummys";
import Tablecategory from "../component/Table/Tablecategory";
import { Link } from "react-router-dom";

const Categori = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-danger mt-5 text-lg-start text-center">List Category</h2>
              <div className=" mt-5 text-lg-start text-center ">
                <Link to="/add-category" className="btn btn-dark m-1 px-5" type="button">
                  Add
                </Link>
              </div>
            </div>
            <table className="table table-dark table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col" className="">
                    Action
                  </th>
                </tr>
              </thead>
              {Data.map((item) => {
                return <Tablecategory id={item.id} categori={item.categori} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categori;

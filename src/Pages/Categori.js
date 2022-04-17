import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Data } from "../component/Card/DataDummys";
import Tablecategory from "../component/Table/Tablecategory";

const Categori = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-danger mt-5 text-lg-start text-center">List Category</h2>
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

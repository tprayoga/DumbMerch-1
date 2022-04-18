import React from "react";
import { Link } from "react-router-dom";

const AddProductss = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form className="card-body d-grid">
            <div className="d-flex align-items-center">
              <button className="btn btn-danger py-3 mb-3" type="button">
                Upload Image
              </button>
              <p className="text-light ms-3"></p>
            </div>
            <input type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"></input>
            <textarea name="" id="" cols="30" rows="5" className="form-control mb-3 text-secondary" placeholder="Description"></textarea>
            <input type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price"></input>
            <input type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Stock"></input>
            <Link to="/product" className="btn btn-success py-3" type="button">
              Save
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductss;

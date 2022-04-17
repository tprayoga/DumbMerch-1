import React from "react";
import { Link } from "react-router-dom";

const Formregister = () => {
  return (
    <div className="container card text-white bg-dark p-3 col-md-4 md-text-center m-5">
      <form className="card-body d-grid">
        <h1 className="mb-5">
          <strong>Register</strong>
        </h1>
        <input type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" style={{}}></input>
        <input type="email" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{}}></input>
        <input type="password" id="inputPassword5" className="form-control py-3 mb-5" aria-describedby="passwordHelpBlock" placeholder="Password"></input>
        <Link to="/login" className="btn btn-danger py-3" type="button">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Formregister;

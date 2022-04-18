import React from "react";
import { Link } from "react-router-dom";

const Tableproducts = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>
          <img src={props.image} alt="foto" style={{ width: "100px" }} />
        </td>
        <td className="align-middle">{props.title}</td>
        <td className="align-middle">{props.desc}</td>
        <td className="align-middle">{props.price}</td>
        <td className="align-middle">{props.stock}</td>
        <td className="align-middle">
          <div class="d-flex">
            <div to="/edit-product">
              <Link to="/edit-product" class="btn btn-success m-1 px-4" type="button">
                Edit
              </Link>
            </div>
            <button class="btn btn-danger m-1 px-3 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body text-dark">
                    <h4 className="mt-3">
                      <strong>Delete Data</strong>
                    </h4>
                    <h5>Are you sure you want to delete this data?</h5>
                  </div>
                  <div class="modal-footer border-white">
                    <button type="button" class="btn btn-success py-2 px-5">
                      Yes
                    </button>
                    <button type="button" class="btn btn-danger py-2 px-5" data-bs-dismiss="modal">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Tableproducts;

import React from "react";
import "../styles/info.css";
import { Button } from "./Button";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function ViewPersonal({ personal, edit }) {
  return (
    <div className="info-section">
      <h2>Personal Information</h2>
      <table className=" content-table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{personal.firstName ? personal.firstName : "Not Provided"}</td>
            <td>{personal.lastName ? personal.lastName : "Not Provided"}</td>
            <td> {personal.email ? personal.email : "Not Provided"}</td>
            <td>
              {personal.phoneNumber ? personal.phoneNumber : "Not Provided"}
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        className="primary-btn"
        icon={faArrowsRotate}
        text="Edit"
        onClick={edit}
      />
    </div>
  );
}

export { ViewPersonal };

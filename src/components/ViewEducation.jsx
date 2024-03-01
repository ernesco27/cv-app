import React from "react";
import "../styles/info.css";
import { Button } from "./Button";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function ViewEducation({ education, edit }) {
  return (
    <div className="edu-section">
      <h2>Education</h2>
      <table className=" content-table">
        <thead>
          <tr>
            <th scope="col">Name of School</th>
            <th scope="col">Programme of Study</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
          </tr>
        </thead>
        <tbody>
          {education.map((field) => (
            <tr key={field.id}>
              <td>{field.school}</td>
              <td>{field.programme}</td>
              <td>{field.from}</td>
              <td>{field.to}</td>
            </tr>
          ))}
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

export { ViewEducation };

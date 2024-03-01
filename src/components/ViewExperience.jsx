import React from "react";
import "../styles/info.css";
import { Button } from "./Button";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function ViewExperience({ experience, edit }) {
  return (
    <div className="exp-section">
      <h2>Practical Experience</h2>
      <table className=" content-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position Held</th>
            <th className="longText">Main Responsibilities</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.companyName}</td>
              <td>{exp.title}</td>
              <td className="longText">{exp.duties}</td>
              <td>{exp.from}</td>
              <td>{exp.to}</td>
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

export { ViewExperience };

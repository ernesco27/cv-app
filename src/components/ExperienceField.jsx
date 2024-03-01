import React from "react";
import "../styles/info.css";

function ExperienceField({ onRemove, index, onChange, experience }) {
  const handleInputChange = (e) => {
    onChange(index, e);
  };
  return (
    <div className="expDiv">
      <div className="expContent">
        <div>
          <label htmlFor={`company-${index}`}>Name of Company: </label>
          <br />
          <input
            type="text"
            id={`companyName-${index}`}
            name={"companyName"}
            value={experience.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={`title-${index}`}>Title:</label>
          <br />
          <input
            type="text"
            id={`title-${index}`}
            name={"title"}
            value={experience.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={`duties-${index}`}>Duties:</label>
          <br />
          <textarea
            name={"duties"}
            id={`duties-${index}`}
            cols="30"
            rows="10"
            value={experience.duties}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor={`from-${index}`}>From: </label>
          <br />

          <input
            type="date"
            id={`from-${index}`}
            value={experience.from}
            name={"from"}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor={`to-${index}`}>To:</label>
          <br />
          <input
            type="date"
            id={`to-${index}`}
            value={experience.to}
            name={"to"}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <div>
        <button className="remove-btn" onClick={() => onRemove(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export { ExperienceField };

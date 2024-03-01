import React from "react";

function EducationField({ index, onRemove, education, onChange }) {
  const handleInputChange = (e) => {
    onChange(index, e);
  };

  return (
    <div className="eduDiv">
      <div className="eduContent">
        <div>
          <label htmlFor={`school-${index}`}>Name of School: </label>
          <br />
          <input
            type="text"
            id={`school-${index}`}
            name={"school"}
            value={education.school}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={`programme-${index}`}>Programme of Study:</label>
          <br />
          <select
            id={`programme-${index}`}
            name={"programme"}
            value={education.programme}
            onChange={handleInputChange}
          >
            <option value="Bachelor's Degree">Bachelors Degree</option>
            <option value="Master's Degree">Masters Degree</option>
            <option value="Doctorate">PhD/ Doctorate</option>
          </select>
        </div>
        <div>
          <label htmlFor={`from-${index}`}>From: </label>
          <br />
          <input
            type="date"
            id={`from-${index}`}
            value={education.from}
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
            value={education.to}
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

export { EducationField };

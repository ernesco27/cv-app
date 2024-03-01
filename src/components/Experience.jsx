import React from "react";
import { useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import "../styles/info.css";
import "../styles/button.css";
import { Button } from "../components/Button.jsx";
import { ViewExperience } from "./ViewExperience.jsx";
import { ExperienceField } from "./ExperienceField.jsx";
function Experience() {
  const profile = [
    {
      companyName: "",
      title: "",
      duties: "",
      from: "",
      to: "",
      isSubmitted: false,
      id: uuidv4(),
    },
  ];

  const [experience, setExperience] = useState(profile);
  const [showForm, setShowForm] = useState(true);

  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const updatedField = [...experience];
    updatedField[index] = { ...updatedField[index], [name]: value };

    setExperience(updatedField);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const updatedField = experience.map((field) => ({
      ...field,
      isSubmitted: true,
    }));

    setExperience(updatedField);

    setShowForm(false);
  }

  function handleEdit() {
    const updatedExperience = experience.map((field) => ({
      ...field,
      isSubmitted: false,
    }));
    setExperience(updatedExperience);
    setShowForm(true);
  }

  function resetForm(e) {
    e.preventDefault();
    setExperience(profile);
    setShowForm(true);
  }

  function addExperience() {
    setExperience([...experience, { id: uuidv4() }]);
  }

  const removeExperienceField = (index) => {
    setExperience(experience.filter((field, i) => i !== index));
  };

  if (!showForm) {
    return (
      <div>
        <ViewExperience experience={experience} edit={handleEdit} />
      </div>
    );
  } else {
    return (
      <div>
        <form action="" className="exp-section" onSubmit={handleFormSubmission}>
          <h2> Practical Experience</h2>
          <div className="infoDiv">
            {experience.map((exp, index) => {
              return (
                <ExperienceField
                  key={exp.id}
                  onRemove={() => removeExperienceField(index)}
                  index={index}
                  onChange={handleInputChange}
                  experience={exp}
                />
              );
            })}
          </div>
          <div className="add-item">
            <FontAwesomeIcon icon={faCirclePlus} onClick={addExperience} />
          </div>
          <div className="buttonDiv">
            <Button
              text="Submit"
              className="primary-btn"
              icon={faCircleCheck}
            />
            <Button
              text="Reset"
              className="secondary-btn"
              icon={faArrowsRotate}
              onClick={resetForm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export { Experience };

import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { ViewEducation } from "./ViewEducation";

import { EducationField } from "./EducationField";

function EduSection() {
  const Educ = [
    {
      id: uuidv4(),
      isSubmitted: false,
      school: "",
      programme: "",
      from: "",
      to: "",
    },
  ];

  const [educationField, setEducationFields] = useState(Educ);
  const [showForm, setShowForm] = useState(true);

  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const updatedFields = [...educationField];
    updatedFields[index] = { ...updatedFields[index], [name]: value };
    setEducationFields(updatedFields);
  }

  //working on the reset form functionality
  function resetForm(e) {
    e.preventDefault();
    setEducationFields(Educ);
    setShowForm(true);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const updatedField = educationField.map((field) => ({
      ...field,
      isSubmitted: true,
    }));

    setEducationFields(updatedField);
    setShowForm(false);
  }

  function handleEdit() {
    const updatedEducation = educationField.map((field) => ({
      ...field,
      isSubmitted: false,
    }));

    setEducationFields(updatedEducation);
    setShowForm(true);
  }

  const addEducationField = () => {
    setEducationFields([...educationField, { id: uuidv4() }]);
  };

  const removeEducationField = (index) => {
    setEducationFields(educationField.filter((field, i) => i !== index));
  };

  if (!showForm) {
    return (
      <div>
        <div className="education-form">
          <ViewEducation education={educationField} edit={handleEdit} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form action="" className="edu-section" onSubmit={handleFormSubmission}>
          <h2 className="section-title">Education</h2>
          <div>
            {educationField.map((field, index) => {
              return (
                <EducationField
                  key={field.id}
                  onRemove={() => removeEducationField(index)}
                  index={index}
                  onChange={handleInputChange}
                  education={field}
                />
              );
            })}
          </div>
          <div className="add-item">
            <FontAwesomeIcon icon={faCirclePlus} onClick={addEducationField} />
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

export { EduSection };

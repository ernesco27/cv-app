import React from "react";
import { useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import "../styles/info.css";
import "../styles/button.css";
import { Button } from "../components/Button.jsx";
import { PersonalField } from "./PersonalField.jsx";
import { ViewPersonal } from "./ViewPersonal.jsx";

function InfoSection() {
  const profile = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isSubmitted: false,
  };
  const [showForm, setShowForm] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(profile);

  //   Function to handle input change

  function handleInputChange(e) {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }

  //reset form functionality
  function resetForm(e) {
    e.preventDefault();
    setPersonalInfo(profile);
    setShowForm(true);
  }

  //   Function to handle form submission
  function handleFormSubmission(e) {
    e.preventDefault();

    setPersonalInfo({ ...personalInfo, isSubmitted: true });
    setShowForm(false);
  }

  //   Function to handle form reset
  function handleEdit() {
    setPersonalInfo({ ...personalInfo, isSubmitted: false });

    setShowForm(true);
  }

  if (!showForm) {
    return (
      <div>
        <ViewPersonal edit={handleEdit} personal={personalInfo} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleFormSubmission} className="info-section">
          <h2 className="section-title">Personal Information</h2>
          <PersonalField personal={personalInfo} onChange={handleInputChange} />

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

export { InfoSection };

import React from "react";
import "../styles/info.css";

function PersonalField({ onChange, personal }) {
  const handleInputChange = (e) => {
    onChange(e);
  };
  return (
    <div className="infoDiv">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          value={personal.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          value={personal.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={personal.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="123-456-7890"
          value={personal.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export { PersonalField };

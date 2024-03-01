import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

function Button({ text, onClick, className, icon }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        <span className="text">{text}</span>
        <span className="icon">
          <FontAwesomeIcon className="fa" icon={icon} />
        </span>
      </button>
    </div>
  );
}

Button.defaultProps = {
  text: "Click me",
  backgroundColor: "#f0f0f0",
  color: "#333",
  fontSize: 16,
};

export { Button };

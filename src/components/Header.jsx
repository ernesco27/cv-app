import React from "react";
import "../styles/info.css";

function Header() {
  return (
    <div className="header">
      <div className="logoDiv">
        {/* <img src="src/image/favicon.png" alt="logo" width={50} /> */}
        <img src="/favicon.png" alt="logo" width={50} />
      </div>
      <h1>CV Application</h1>
    </div>
  );
}

export { Header };

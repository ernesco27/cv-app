import React from "react";
import "../styles/info.css";
import { InfoSection } from "../components/InfoSection.jsx";
import { Header } from "../components/Header.jsx";
import { EduSection } from "../components/EduSection.jsx";
import { Experience } from "./Experience.jsx";

function App() {
  return (
    <div>
      <Header />
      <InfoSection />
      <EduSection />
      <Experience />
    </div>
  );
}

export { App };

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import MobileProjects from "./components/MobileProjects";
import WebProjects from "./components/WebProjects";
import HeaderButtons from "./components/HeaderButtons";
import { mobileProjects, webProjects, socialLinks } from "./data.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "100%" }}>
          <img
            className="img-header"
            src={require("./img/michael.JPG")}
            alt="Michael Moore"
          />
        </div>
        <div className="header-welcome">
          <h1 style={{ marginBottom: 20 }}>Michael Moore</h1>
          <div className="contacts">
            <HeaderButtons
              links={socialLinks.links}
              social={socialLinks.social}
            />
          </div>
          <p>
            I'm a developer and welcome to my portfolio. I build frontend sites
            using Reactjs and mobile apps with React Native. I also have backend
            experience with nodejs. I like to read books, workout and spend time
            with my family.
          </p>
        </div>
      </header>

      {mobileProjects.map((project, index) => {
        return (
          <article className="project-one" key={index}>
            <MobileProjects
              title={project.title}
              images={project.images}
              description={project.description}
              barTitle={project.barTitle}
              barcodeImg={project.barcodeImg}
            />
          </article>
        );
      })}

      {webProjects.map((project, index) => {
        return (
          <article className="project-one" key={index}>
            <WebProjects
              title={project.title}
              images={project.images}
              description={project.description}
              siteLink={project.siteLink}
            />
          </article>
        );
      })}

      <footer className="footer">
        <p className="description" style={{ color: "#fff", paddingBottom: 10 }}>
          Website built by: Michael Moore
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {[faLinkedin, faGithub, faTwitter].map((icon, index) => {
            return (
              <a href={socialLinks.links[index]} key={index}>
                <FontAwesomeIcon
                  icon={icon}
                  color="#fff"
                  style={{ marginRight: 30 }}
                  size="2x"
                />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}

export default App;

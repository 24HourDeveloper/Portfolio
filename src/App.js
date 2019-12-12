import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

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
            <a href="https://www.linkedin.com/in/michael-moore-developer/">
              <button className="button-header-style" type="button">
                Linked-In
              </button>
            </a>
            <a href="https://github.com/24HourDeveloper">
              <button className="button-header-style" type="button">
                Github
              </button>
            </a>
            <a href="https://twitter.com/UNCODED_LS">
              <button className="button-header-style" type="button">
                Twitter
              </button>
            </a>
          </div>
          <p>
            I'm a developer and welcome to my portfolio. I build frontend sites
            using Reactjs and mobile apps with React Native. I also have backend
            experience with nodejs. I like to read books, workout and spend time
            with my family.
          </p>
        </div>
      </header>

      <article className="project-one">
        <h1 style={{ fontSize: 35, paddingBottom: 10 }}>Project 1</h1>
        <div className="project-row">
          <img
            src={require("./img/calculate2.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="log in screen"
          />
          <img
            src={require("./img/calculate3.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="where you calculate your commissions"
          />
          <img
            src={require("./img/calculate1.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="A screen showing your calculations"
          />
          <img
            src={require("./img/Screenshot_20191206-020718_Expo.jpg")}
            width={200}
            alt="A report page showing your earnings in graph format"
          />
        </div>
        <p
          className="description"
          style={{ textAlign: "left", paddingBottom: 10 }}
        >
          I made this app to help calculate my commission at work. Users can
          sign up and create an account or log in with an existing one. User
          authentication is being handled through firebase. You store your work
          load and the app will calculate your commissions for that day. Your
          data is also displayed in graph form with a library called chartjs.
        </p>
        <p
          className="description"
          style={{ fontWeight: "bold", paddingBottom: 10 }}
        >
          USE EXPO AND SCAN BARCODE
        </p>
        <img
          src={require("./img/calc-scan.png")}
          alt="A barcode to scan with expo app"
        />
      </article>

      <article className="project-one">
        <h1 style={{ fontSize: 35, paddingBottom: 10 }}>Project 2</h1>
        <div className="project-row">
          <img
            src={require("./img/movie3.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="main screen of movie app"
          />
          <img
            src={require("./img/movie2.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="A more detail screen of a selected movie"
          />
          <img
            src={require("./img/movie1.jpg")}
            width={200}
            style={{ paddingBottom: 10 }}
            alt="display of search functionality in the app"
          />
        </div>
        <p
          className="description"
          style={{ textAlign: "left", paddingBottom: 10 }}
        >
          With this app I'm getting the data from a movie api. I fetch the data
          and display it within the app using flatlist horizontal. You can
          select any movie and get present with more detail about the movie and
          watch the trailer. I also added search functionality as well.
        </p>
        <p
          className="description"
          style={{ fontWeight: "bold", paddingBottom: 10 }}
        >
          USE EXPO AND SCAN BARCODE
        </p>
        <img
          src={require("./img/movie-scan.png")}
          alt="A barcode to scan with expo app"
        />
      </article>

      <article className="project-one">
        <h1 style={{ fontSize: 35, paddingBottom: 10 }}>Project 3</h1>
        <div className="project-row">
          <img
            src={require("./img/survey1 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
            alt="screen shot of survey website"
          />
          <img
            src={require("./img/survey2 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
            alt="end of survey displaying data in graph format"
          />
          <img
            src={require("./img/survey3 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
            alt="survey displaying data in graph format"
          />
        </div>
        <p className="description" style={{ paddingBottom: 10 }}>
          <a
            href="https://stoic-panini-dd5afc.netlify.com"
            style={{ fontWeight: "bold" }}
          >
            Link To Website
          </a>
        </p>
        <p className="description" style={{ textAlign: "left" }}>
          This React site is a simple survey. The answers are being stored in
          firebase and retrieved to be displayed in graphs. The site is also
          mobile friendly so you can take the survey via mobile.
        </p>
      </article>
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
          {/* <p className="description" style={{ color: "#fff", marginRight: 10 }}>
            Contacts:
          </p> */}
          <a href="https://twitter.com/UNCODED_LS">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#fff"
              style={{ marginRight: 30 }}
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/michael-moore-developer/">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#fff"
              style={{ marginRight: 30 }}
              size="2x"
            />
          </a>
          <a href="https://github.com/24HourDeveloper">
            <FontAwesomeIcon
              icon={faGithub}
              color="#fff"
              style={{ marginRight: 30 }}
              size="2x"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

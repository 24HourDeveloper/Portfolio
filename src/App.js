import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            className="img-header"
            src={require("./img/michael.JPG")}
            width={400}
            height={400}
            alt="Picture of Michael"
          />
        </div>
        <div className="header-welcome">
          <h1>Michael Moore</h1>
          <p>
            I'm a developer and welcome to my portfolio. I build frontend sites
            using Reactjs and mobile apps with React Native. I also have backend
            experience with nodejs. I like to read books, workout and spend time
            with my family.
          </p>
        </div>
      </header>

      <article className="project-one">
        <h1>My Project 1</h1>
        <div className="project-row">
          <img src={require("./img/calculate2.jpg")} width={200} />
          <img src={require("./img/calculate3.jpg")} width={200} />
          <img src={require("./img/calculate1.jpg")} width={200} />
          <img
            src={require("./img/Screenshot_20191206-020718_Expo.jpg")}
            width={200}
          />
        </div>
        <p style={{ textAlign: "left" }}>
          I made this app to help calculate my commission at work. Users can
          sign up and create an account or log in with an existing one. User
          authentication is being handled through firebase. You store your work
          load and the app will calculate your commissions for that day. Your
          data is also displayed in graph form with a library called chartjs.
        </p>
        <p style={{ fontWeight: "bold" }}>USE EXPO AND SCAN BARCODE</p>
        <img src={require("./img/calc-scan.png")} />
      </article>

      <article className="project-one">
        <h1>My Project 2</h1>
        <div className="project-row">
          <img src={require("./img/movie3.jpg")} width={200} />
          <img src={require("./img/movie2.jpg")} width={200} />
          <img src={require("./img/movie1.jpg")} width={200} />
        </div>
        <p style={{ textAlign: "left" }}>
          With this app I'm getting the data from a movie api. I fetch the data
          and display it within the app using flatlist horizontal. You can
          select any movie and get present with more detail about the movie and
          watch the trailer. I also added search functionality as well.
        </p>
        <p style={{ fontWeight: "bold" }}>USE EXPO AND SCAN BARCODE</p>
        <img src={require("./img/movie-scan.png")} />
      </article>

      <article className="project-one">
        <h1>My Project 3</h1>
        <div className="project-row">
          <img
            src={require("./img/survey1 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
          />
          <img
            src={require("./img/survey2 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
          />
          <img
            src={require("./img/survey3 (2).png")}
            width={600}
            style={{ paddingBottom: 10 }}
          />
        </div>
        <p>
          <a href="https://stoic-panini-dd5afc.netlify.com">Link To Website</a>
        </p>
        <p style={{ textAlign: "left" }}>
          This React site is a simple survey. The answers are being stored in
          firebase and retrieved to be displayed in graphs. The site is also
          mobile friendly so you can take the survey via mobile.
        </p>
      </article>
    </div>
  );
}

export default App;

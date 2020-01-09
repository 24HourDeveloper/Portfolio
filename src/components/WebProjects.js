import React from "react";
import "../App.css";

export default function WebProjects({ title, images, description, siteLink }) {
  return (
    <>
      <h1 style={{ fontSize: 35, paddingBottom: 10 }}>{title}</h1>
      <div className="project-row">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={require(`../img/${image}`)}
              width={600}
              style={{ paddingBottom: 10 }}
              alt="screen shot of survey website"
            />
          );
        })}
      </div>
      <p className="description" style={{ paddingBottom: 10 }}>
        <a href={siteLink} style={{ fontWeight: "bold" }}>
          Link To Website
        </a>
      </p>
      <p className="description" style={{ textAlign: "left" }}>
        {description}
      </p>
    </>
  );
}

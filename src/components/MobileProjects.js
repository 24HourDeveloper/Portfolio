import React from "react";

export default function MobileProjects({
  title,
  images,
  description,
  barTitle,
  barcodeImg
}) {
  return (
    <>
      <h1 style={{ fontSize: 35, paddingBottom: 10 }}>{title}</h1>
      <div className="project-row">
        {images.map(image => {
          return (
            <img
              key={image}
              src={require(`../img/${image}`)}
              width={200}
              style={{ paddingBottom: 10 }}
              alt="log in screen"
            />
          );
        })}
      </div>
      <p
        className="description"
        style={{ textAlign: "left", paddingBottom: 10 }}
      >
        {description}
      </p>
      <p
        className="description"
        style={{ fontWeight: "bold", paddingBottom: 10 }}
      >
        {barTitle}
      </p>
      <img
        src={require(`../img/${barcodeImg}`)}
        alt="A barcode to scan with expo app"
      />
    </>
  );
}

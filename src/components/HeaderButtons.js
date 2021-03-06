import React from "react";
import "../App.css";

export default function HeaderButtons({ links, social }) {
  return (
    <>
      {links.map((link, index) => {
        return (
          <a href={link} key={index}>
            <button className="button-header-style" type="button">
              {social[index]}
            </button>
          </a>
        );
      })}
    </>
  );
}

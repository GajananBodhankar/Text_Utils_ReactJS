import React, { useState, useEffect } from "react";
import "../App.css";
export default function About(props) {
  const [bg, setBg] = useState("white");
  const [c, setC] = useState("black");
  const [border, setBorder] = useState("black");
  let myStyle = {
    backgroundColor: bg,
    color: c,
  };
  useEffect(() => {
    if (props.mode === "dark") {
      setBg("rgb(62 90 116)");
      document.body.style.backgroundColor = "rgb(62 90 116)";
      setC("white");
      setBorder("white");
    } else {
      document.body.style.backgroundColor = "white";
      setBg("white");
      setC("black");
      setBorder("black");
    }
  }, [props.mode, props.toggleMode]);
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">About Us</h3>

      <div
        className="accordion"
        id="accordionExample"
        style={(myStyle, { border: `0.2px solid ${border}` })}
      >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About Website
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the about TextUtils website.</strong> Welcome to
              TextuLis, your go-to destination for a wide array of text-related
              tools and utilities that empower you to harness the full potential
              of written communication. Created with a passion for enhancing
              your text-related tasks, TextuLis is designed to be your one-stop
              digital toolkit for all things textual.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              About me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the Owner of website.</strong>
              Hi there!! This is Gajanan Bodhankar, a passionate front-end
              developer with hands on experience in ReactJS and React-native.
              Please feel free to reach me out if needed any assistance for the
              same <a href="mailto:bodhankargajanan99@gmail.com">E-mail</a>
              {"  "}
              <a href="https://github.com/GajananBodhankar" target="_blank">
                Github
              </a>
              {"  "}
              <a href="https://twitter.com/GajananBodhank4">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

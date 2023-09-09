import React, { useCallback, useEffect, useState } from "react";
import "../App.css";
import { CustomText, upper, test } from "./Changes";
import ReactjsAlert from "reactjs-alert";
import Alert from "./Alert";
export default function TextForm(props) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    props.mode == "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "rgb(62 90 116)");
  }, [props.toggleMode]);
  const myStyle = {
    color: props.mode == "light" ? "black" : "white",
  };

  const { text, setText } = CustomText();
  function test(e) {
    setText(e.target.value);
  }
  let copy = useCallback(() => {
    const txt = document.createElement("textarea");
    txt.value = text;
    document.body.appendChild(txt);
    txt.select();
    document.execCommand("copy");
    document.body.removeChild(txt);
    setStatus(true);
  }, [text]);
  let upper = useCallback(() => {
    setText(text.toUpperCase());
  }, [text]);
  let lower = useCallback(() => {
    setText(text.toLowerCase());
  }, [text]);
  const [show, setShow] = useState(false);
  function change() {
    setStatus(false);
  }
  return (
    <div>
      <div>
        <h1 style={myStyle}>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox "
            placeholder="Enter text here..."
            rows="5"
            value={text}
            onChange={(e) => test(e)}
          />
        </div>
        <Alert
          status={status}
          change={change}
          title={"Text Copied to clipboard"}
          type={"success"}
        />
        <button className="btn btn-primary mx-3" onClick={upper}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3 my-2" onClick={lower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={copy}>
          copy text
        </button>
      </div>
      <div className="container my-3">
        <h5 style={myStyle}>Text Summary</h5>
        <p style={myStyle}>
          Your text has {text.split(/\s/).filter((i) => i.length > 0).length}{" "}
          Words and {text.trim().length} Characters
        </p>
        <h5 style={myStyle}>Preview</h5>
        {text.length > 50 ? (
          <>
            {!show ? (
              <>
                <p style={myStyle}>
                  {text.slice(0, 30)}...
                  <button
                    className="btn btn-link"
                    onClick={() => setShow(true)}
                  >
                    See All
                  </button>
                </p>
              </>
            ) : (
              <>
                <p style={myStyle}>
                  {text}
                  <button
                    className="btn btn-link"
                    onClick={() => setShow(false)}
                  >
                    See Less
                  </button>
                </p>
              </>
            )}
          </>
        ) : (
          <p style={myStyle}>{text}</p>
        )}
      </div>
    </div>
  );
}

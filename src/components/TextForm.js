import React, { useCallback, useState } from "react";
import "../App.css";
import { CustomText, upper, test } from "./Changes";
export default function TextForm(props) {
  const { text, setText } = CustomText();
  function test(e) {
    setText(e.target.value);
  }
  let upper = useCallback(() => {
    setText(text.toUpperCase());
  }, [text]);
  let lower = useCallback(() => {
    setText(text.toLowerCase());
  }, [text]);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
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
        <button className="btn btn-primary mx-3" onClick={upper}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={lower}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h5>Text Summary</h5>
        <p>
          Your text has {text.split(/\s/).filter((i) => i.length > 0).length}{" "}
          Words and {text.trim().length} Characters
        </p>
        <h5>Preview</h5>
        {text.length > 50 ? (
          <>
            {!show ? (
              <>
                <p>
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
                <p>
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
          <p>{text}</p>
        )}
      </div>
    </>
  );
}

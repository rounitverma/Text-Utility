import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase option selected");
    setText(text.toUpperCase());
    props.showAlert("Converted to upper-case.","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower-case.","success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared textarea","success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear writing space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter some text to preview'}</p>
      </div>
    </>
  );
}

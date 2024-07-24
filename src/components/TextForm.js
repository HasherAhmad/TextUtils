import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!","success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceClick = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;

    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    window.speechSynthesis.speak(speech);
    props.showAlert("Text Converted to Voice!","success");
  };

  const handleCopyClick = async () => {
    try {
        const text = document.getElementById("myBox");
        text.select();
        await navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    } catch (err) {
        props.showAlert("Failed to copy to Clipboard!", "error");
    }
};


  const handleRemoveSpace = () => {
    let newText = text.trim().split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black"}}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control"
            placeholder="Enter text here..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleVoiceClick}
          >
            Convert to Voice
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleRemoveSpace}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleClearClick}
          >
            Text Clear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p className="fw-bolder">
          {(text && text.trim().split(/\s+/).filter(Boolean).length) || 0} Words
          and {text.length} Characters
        </p>
        <p className="fw-bolder">
          {0.008 * (text && text.trim().split(/\s+/).filter(Boolean).length) ||
            0}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Textbox above to preview it here..."}</p>
      </div>
    </>
  );
}

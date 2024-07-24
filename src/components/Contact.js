import React from "react";

export default function Contact(props) {
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>Contact Us</h2>
      <div className="container">
        <h6>hasheramad123@gmail.com</h6>
        <h6>+923046333321</h6>
      </div>
    </div>
  );
}

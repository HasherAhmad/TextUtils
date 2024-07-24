import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#404040" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Overview of Textutils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Textutils</strong> in Lua provides a range of functions to
              facilitate text processing and manipulation, which are
              particularly useful in environments where interacting with
              text-based interfaces is common. This module is particularly
              useful in environments like ComputerCraft or other Lua-based
              systems where text manipulation and interaction are central.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#404040" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Info</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Explore <strong>Textutils</strong>, a Lua module for efficient
              text handling in applications. Functions include formatting,
              serialization and more. Web App Develop By{" "}
              <strong>Hasher Ahmad</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

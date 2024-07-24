import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202020";
      showAlert("Dark Mode has been Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle} />
        <Alert alert={alert} toggle={toggle} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze below"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

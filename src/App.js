import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "TextUtils-dark mode";
    } else {
      setMode("light");
      document.title = "TextUtils-light mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          mainTitle="TextUtils"
          subTitle="Home"
          About="About"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter text to analyse below"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="container">
                <About mode={mode} toggleMode={toggleMode} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

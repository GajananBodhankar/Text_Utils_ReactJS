import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.title = "TextUtils-dark mode";
    } else {
      setMode("light");
      document.title = "TextUtils-light mode";
    }
  };
  return (
    <>
      <Navbar
        mainTitle="TextUtils"
        subTitle="Home"
        About="About"
        toggleMode={toggleMode}
        mode={mode}
      />
      <div className="container my-3">
        <TextForm
          heading="Enter text to analyse below"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
      {/* <div className="container">
        <About />
      </div> */}
    </>
  );
}

export default App;

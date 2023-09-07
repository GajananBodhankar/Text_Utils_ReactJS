import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar mainTitle="TextUtils" subTitle="Home" About="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter text to analyse below" /> */}
      </div>
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;

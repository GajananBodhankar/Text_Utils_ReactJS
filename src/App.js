import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar mainTitle="TextUtils" subTitle="Home" About="About" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below"/>
      </div>
    </>
  );
}

export default App;

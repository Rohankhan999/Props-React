import "./App.css";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Elite Timepieces</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section1 />
        </div>
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section2 />
        </div>
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section3 />
        </div>
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section4 />
        </div>
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section5 />
        </div>
        <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <Section6 />
        </div>
      </div>
    </div>
  );
}

export default App;

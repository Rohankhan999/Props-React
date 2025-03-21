import './App.css';
import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';


function App() {
  return (
    <div className="container">
    <h1 className="text-center my-4">Elite Timepieces</h1>
    
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <Section1 />
      </div>
      <div className="col-md-6 col-lg-4">
        <Section2 />
      </div>
      <div className="col-md-12 col-lg-4">
        <Section3 />
      </div>
      <div className="col-md-12 col-lg-4">
        <Section4 />
      </div>
      <div className="col-md-12 col-lg-4">
        <Section5 />
      </div>
      <div className="col-md-12 col-lg-4">
        <Section6 />
      </div>
    </div>
  </div>
  );
}

export default App;

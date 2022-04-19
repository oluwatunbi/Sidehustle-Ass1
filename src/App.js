import React from "react";

import General from "././components/general-information/generalinfo.js";
import Education from "././components/Education-info/education.js";

import Practical from "././components/Practical-exp/practical.js";

function App() {
  return (
    <div className="App">
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default App;

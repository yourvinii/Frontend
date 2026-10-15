import React from "react";
import Student from "./components/Student";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Student name={"Vinayak"} />
      <Student name={"nikhil"} />
    </div>
  );
};

export default App;

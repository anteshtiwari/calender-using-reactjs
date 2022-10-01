import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Day_Date_Container from "./components/day-date-container/day-date-container.js";
import Main_Function_Area from "./components/main-function-area/main-function-area";


function App(){
 
  return(
    <>
    <div className="main-body">
      <Navbar/>
      <Day_Date_Container/>
      <Main_Function_Area/>
    </div>
    </>
  );
  
}
export default App;
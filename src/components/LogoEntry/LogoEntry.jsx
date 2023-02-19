import React from "react";
import "./logoentry.css";




const LogoEntry = () => {

  return (
    <div style={{
        display:'flex',
        alignItems:'center', 
        justifyContent:'center', 
        flexWrap:'wrap'
        }}>
      <h1>
        <span>H</span>umans
        <span> C</span>onnections
      </h1>
    </div>
  );
};

export default LogoEntry;

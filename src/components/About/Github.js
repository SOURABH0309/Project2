import React from "react";
import { Row } from "react-bootstrap";
import { useThemeContext } from "../../hooks/themeHook";

function Github() {
  const { dark } = useThemeContext();

  // personalized colors for the 
  // contributions calendar
  const colourTheme = dark ? 
  // colors for the dark theme
  {
    
  } 
  :
  // colors for the white theme
  {
   
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        
      </h1>

     
    </Row>
  );
}

export default Github;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDjango,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { 
  SiJava,
  SiPytorch, 
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <DiPython />,
          <SiJava/>,
          <DiJavascript1 />,
          <DiNodejs />,
          <DiDjango/>,
          <DiReact />,
          <DiMongodb />,  
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;

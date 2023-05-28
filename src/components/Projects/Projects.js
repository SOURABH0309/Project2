import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bayesnet from "../../assets/Projects/009.jpg";
import quantum from "../../assets/Projects/portfolio.jpg";
import Skate from "../../assets/Projects/008.jpg"
import portfolio from "../../assets/Projects/portfolio.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')} <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Skate}
              title="Apana Skating Club"
              description={<span>This website is Developed in HTML,CSS and Javascript. This website is used for more growth of Skating Club.</span>}
              link="https://github.com/LaurentMazare/diffusers-rs"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bayesnet}
              isBlog={false}
              title="Department Management System"
              description={<span>This website is Developed in Django and Html/CSS/Javascript. This website is used for to show student details.</span>}
              link="https://github.com/mspronesti/baylib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="E-commerse website"
              description={<span>This website id Developed in React and django also. This website is over view of my skills and projects.</span>}
              link="https://github.com/mspronesti/qlearnkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={t('ThisWebsite')}
              description={t('Proj4')}
              link="https://github.com/mspronesti/mspronesti.github.io"
            />
          </Col>         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')} <span className="green">Sourabh Lakade</span>, a passionate about Web Development<span className="green"></span>.
            <br/>
            {t('I pursuing')} <span className="green">Information Technology</span> SGGS College<span className="green"></span> {t('Nanded')}.
            
            <br/>
            <br/>
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Machine Learning
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Web Development
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Compitative coding
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Full Stack Developer
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

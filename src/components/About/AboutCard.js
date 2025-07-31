import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alakanti Sai Pavan Reddy </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am a fresher, I've had a incredible experience of working as a <span className="purple">Co-Founder at Xversemeta Technologies. </span>
            <br />
            I have completed my B.Tech in Computer Science from Bharath Institute of Higher Education and Research, currently looking for opportunities as a fresher software Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring modern Frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into meaningful experiences."{" "}
          </p>
          <footer className="blockquote-footer">Sai Pavan Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

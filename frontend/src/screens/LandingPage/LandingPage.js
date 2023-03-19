import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// LandingPage(options -> login, signup); like the homepage component for App.js
const LandingPage = () => {
  let navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/mynotes");
  //   }
  // }, []);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Maker</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

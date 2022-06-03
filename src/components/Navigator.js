import React from "react";
import { Card, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <Container>
      <Card
        className="border-0 shadow-sm mb-3 mt-0"
        style={{
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          borderTopRightRadius: "0",
          borderTopLeftRadius: "0",
          fontFamily: "Lexend Deca",
        }}
      >
        <Card.Body className="p-1">
          <Nav className="justify-content-center" activeKey="/home">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Card.Body>
      </Card>
    </Container>
  );
}

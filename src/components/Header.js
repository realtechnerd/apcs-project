import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/" className="hover:no-underline text-white">
        <div
          className="p-2 brand-gradient shadow-md mb-0 mt-3"
          style={{ borderTopRightRadius: "1rem", borderTopLeftRadius: "1rem" }}
        >
          <h1
            className="text-center mb-0 text-white"
            style={{ fontFamily: "Belgrano" }}
          >
            Coronavirus Data
          </h1>
          <h5
            className="text-center mb-0 text-white"
            style={{ fontFamily: "Lexend Deca" }}
          >
            APCSA Final Project
          </h5>
        </div>
      </Link>
    </Container>
  );
}

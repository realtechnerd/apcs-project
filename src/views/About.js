import React from "react";
import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Card
        className="border-0 shadow-sm"
        style={{ borderRadius: "1rem", fontFamily: "Lexend Deca" }}
      >
        <Card.Body>
          <h1>About this Project</h1>
          <hr />
          <p className="text-lg mb-0">
            This a simple website with a clean and modern interface that
            displays COVID-19 data by country. The website allows you to search,
            sort, and access every country's COVID-19 data. The data for the
            website was retrieved from 2 sources:{" "}
            <a href="https://covid19api.com/" target="_blank" rel="noreferrer">
              COVID 19 API
            </a>{" "}
            and{" "}
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rest Countries
            </a>
            . The website was written in{" "}
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noreferrer"
            >
              React.js
            </a>
            , a front-end JavaScript library for GUIs. Check out my{" "}
            <a href="https://realtechnerd.me" target="_blank" rel="noreferrer">
              website
            </a>{" "}
            for other cool projects similar to this.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

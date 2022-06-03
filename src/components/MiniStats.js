import React from "react";
import { Card } from "react-bootstrap";

export default function MiniStats(props) {
  return (
    <Card
      className="border-0 shadow-sm mb-3"
      style={{ borderRadius: "1rem", fontFamily: "Lexend Deca" }}
    >
      <Card.Body className="p-3">
        {/* <h5 className="mb-0" style={{ fontFamily: "Lexend Deca" }}>
          {props.globalCases.toLocaleString()} total cases globally
        </h5> */}
        <div className="overflow-hidden md:overflow-scroll text-center mb-0">
          <p className="md:float-left mb-0">
            New Cases: <b>{props.newcases.toLocaleString()}</b> | New Deaths:{" "}
            <b>{props.newdeaths.toLocaleString()}</b>
          </p>
          <p className="md:float-right mb-0">
            Total Cases: <b>{props.totalcases.toLocaleString()}</b> | Total
            Deaths: <b>{props.totaldeaths.toLocaleString()}</b>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

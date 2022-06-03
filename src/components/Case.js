import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Case(props) {
  const [data, setData] = useState();

  async function getCountryData(code) {
    const json = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await json.json();
    setData(data[0]);
  }

  useEffect(() => {
    getCountryData(props.countrycode);
  }, []);

  return (
    <Col lg="4" md="6" className="mb-3" style={{ fontFamily: "Lexend Deca" }}>
      <Link
        to={`/country/${props.countrycode}`}
        style={{ textDecoration: "none" }}
        className="text-black hover:text-black"
      >
        <Card className="e border-0 shadow-sm" style={{ borderRadius: "1rem" }}>
          {data && (
            <Card.Img
              src={props.flag}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
          )}
          <Card.Body>
            <h5>{props.totalcases.toLocaleString()} cases</h5>
            <h3 className="mb-0">{props.country}</h3>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

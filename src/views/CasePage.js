import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function CasePage() {
  let params = useParams();
  const [countryCovidData, setCountryCovidData] = useState();
  const [countryData, setCountryData] = useState();

  async function getCountryCovidData(code) {
    const json = await fetch(
      `https://api.covid19api.com/total/country/${code}`
    );
    const data = await json.json();
    setCountryCovidData(data);
  }

  async function getCountryData(code) {
    const json = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await json.json();
    setCountryData(data[0]);
  }

  function getData() {
    getCountryCovidData(params.id)
      .then(() => getCountryData(params.id))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return countryCovidData && countryData ? (
    <Container>
      <Card
        className="border-0 shadow-sm"
        style={{ borderRadius: "1rem", fontFamily: "Lexend Deca" }}
      >
        <Card.Body>
          <Row>
            <Col sm>
              <img
                src={countryData.flags.svg}
                alt={`Flag of ${countryData.name.common}`}
                style={{ borderRadius: "1rem" }}
              />
            </Col>
            <Col sm>
              <h1 className="mb-0">{countryData.name.common}</h1>
              <h5 className="mb-2">{countryData.name.official}</h5>
              <div className="overflow-hidden md:overflow-scroll">
                <div className="float-left mr-4">
                  {countryData.capital && (
                    <>
                      <h6 className="mb-0">Capital: </h6>
                      <h4 className="mb-0">{countryData.capital[0]}</h4>
                    </>
                  )}
                </div>
                <div className="float-left mr-4">
                  {countryData.population && (
                    <>
                      <h6 className="mb-0">Population: </h6>
                      <h4 className="mb-0">
                        {countryData.population.toLocaleString()}
                      </h4>
                    </>
                  )}
                </div>
              </div>
              <hr />
              <div className="overflow-hidden md:overflow-scroll">
                <div className="float-left mr-4">
                  <h6 className="mb-0">Confirmed Cases: </h6>
                  <h4>
                    {countryCovidData[
                      countryCovidData.length - 1
                    ].Confirmed.toLocaleString()}
                  </h4>
                </div>
                <div className="float-left mr-4">
                  <h6 className="mb-0">Confirmed Deaths: </h6>
                  <h4>
                    {countryCovidData[
                      countryCovidData.length - 1
                    ].Deaths.toLocaleString()}
                  </h4>
                </div>
              </div>
              <div className="overflow-hidden md:overflow-scroll">
                <div className="float-left mr-4">
                  <h6 className="mb-0">% of Confirmed Cases: </h6>
                  <h4>
                    {(
                      (countryCovidData[countryCovidData.length - 1].Confirmed /
                        countryData.population) *
                      100
                    ).toFixed(2)}
                    %
                  </h4>
                </div>
                <div className="float-left mr-4">
                  <h6 className="mb-0">% of Confirmed Deaths: </h6>
                  <h4>
                    {(
                      (countryCovidData[countryCovidData.length - 1].Deaths /
                        countryData.population) *
                      100
                    ).toFixed(2)}
                    %
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <div className="w-100 text-center" style={{ fontFamily: "Lexend Deca" }}>
      <div className="lds-hourglass"></div>
      <h6>Loading..</h6>
    </div>
  );
}

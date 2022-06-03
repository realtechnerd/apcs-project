import { useEffect, useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Case from "../components/Case";
import deez from "../deez.json";
import MiniStats from "../components/MiniStats";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const searchRef = useRef("");

  async function getData() {
    return fetch(`https://api.covid19api.com/summary`).then((json) =>
      json.json().then((data) => {
        return data;
      })
    );
  }

  async function getCountryName(code) {
    return fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((json) =>
      json.json().then((data) => {
        return data;
      })
    );
  }

  function modifyData() {
    let covData;
    getData().then(async (data) => {
      covData = data;
      for (let i = 0; i < covData["Countries"].length; i++) {
        const country = await getCountryName(
          covData["Countries"][i]["CountryCode"]
        );
        covData["Countries"][i]["Country"] = country[0].name.common;
        covData["Countries"][i]["Flag"] = country[0].flags.svg;
      }
      console.log(covData);
      setData(covData);
    });
  }

  useEffect(() => {
    modifyData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchRef.current.value);
  }

  return data ? (
    <Container>
      <MiniStats
        newcases={data.Global.NewConfirmed}
        newdeaths={data.Global.NewDeaths}
        totalcases={data.Global.TotalConfirmed}
        totaldeaths={data.Global.TotalDeaths}
      />
      <SearchBar onSubmit={(e) => handleSubmit(e)} refvar={searchRef} />
      <Row>
        {data.Countries.filter((val) =>
          val.Country.toLowerCase().includes(search.toLowerCase())
        ).map((post, idx) => (
          <Case
            country={post.Country}
            flag={post.Flag}
            totalcases={post.TotalConfirmed}
            countrycode={post.CountryCode}
            key={idx}
          />
        ))}
      </Row>
    </Container>
  ) : (
    <div className="w-100 text-center" style={{ fontFamily: "Lexend Deca" }}>
      <div className="lds-hourglass"></div>
      <h6>Loading..</h6>
    </div>
  );
}

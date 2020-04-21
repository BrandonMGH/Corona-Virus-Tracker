import React, { useState, useEffect } from "react";
import axios from "axios";

const GeneralDashboard = () => {
  const [covidCases, setCovidCases] = useState("");
  const [covidDeaths, setCovidDeaths] = useState("");
  const [covidRecovered, setCovidRecovered] = useState("");
  const [covidCasesChange, setCovidCasesChange] = useState(5);
  const [covidDeathChange, setCovidDeathChange] = useState(0);
  const [covidRecoveredChange, setCovidRecoveredChange] = useState(2);
  const [covidRange, setCovidRange] =useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://coronavirus-19-api.herokuapp.com/all"
        );
        console.log(res.data);
        const covidCasesData = {
          cases: res.data.cases,
          deaths: res.data.deaths,
          recovered: res.data.recovered,
        };
        setCovidCases(covidCasesData.cases);
        setCovidDeaths(covidCasesData.deaths);
        setCovidRecovered(covidCasesData.recovered);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  });

  return (
    <article className="message is-info">
      <div className="message-header" style={{ fontSize: "25px" }}>
        COVID-19-Tracker
      </div>
      <div className="message-body" style={{ fontSize: "35px" }}>
        <div className="columns">
          <div className="column">
            <div>
              <div>Cases:{covidCases}</div>
              <div
                style={{
                  color: covidCasesChange > 0 ? "green" : "red",
                  fontSize: "25px",
                }}
                className="columns"
              >
                <div className="column">New Cases: +{covidCasesChange}</div>
              </div>
            </div>
            <div>
              <div>Deaths: {covidDeaths}</div>
              <div
                style={{
                  color: covidDeathChange > 0 ? "green" : "red",
                  fontSize: "25px",
                }}
                className="columns"
              >
                <div className="column">New Cases: +{covidDeathChange}</div>
              </div>
            </div>
            <div>
              <div>Recovered: {covidRecovered}</div>
              <div
                style={{
                  color: covidRecoveredChange > 0 ? "green" : "red",
                  fontSize: "25px",
                }}
                className="columns"
              >
                <div className="column">New Cases: +{covidRecoveredChange}</div>
              </div>
            </div>
          </div>
          <div className="column">Column 2</div>
        </div>
      </div>
    </article>
  );
};

export default GeneralDashboard;

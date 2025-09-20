import React, { use, useState } from "react";
import Country from "../Country/Country";

export default function AllCountries({ countriesPromise }) {
  //* Visited Countries
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (countryName) => {
    const newVisitedCountry = [...visitedCountry, countryName];
    setVisitedCountry(newVisitedCountry);
  };

  //* Visited Countries Flag
  const [visitedCountryFlag, setVisitedCountryFlag] = useState([]);
  const handleVisitedCountryFlag = (countryFlag) => {
    const newVisitedCountryFlag = [...visitedCountryFlag, countryFlag];
    setVisitedCountryFlag(newVisitedCountryFlag);
  };

  const allCountiresData = use(countriesPromise);
  const allCountires = allCountiresData.countries;

  return (
    <>
      {/* Title */}
      <h1 className="title white">Total Countries: {allCountires.length}</h1>

      {/* Total Countries */}
      <h3>Total Countries Visited: {visitedCountry.length}</h3>

      <div>
        {/* Visited Countries */}
        <ol>
          {visitedCountry.map((country) => (
            <li>{country}</li>
          ))}
        </ol>

        {/* Visited Countries Flag */}
        <ol>
          {
          visitedCountryFlag.map((countryFlag, index) => (
            <li>
              <img src={countryFlag} key={index} className="flag2" />
            </li>
          ))
          }
        </ol>
      </div>

      <div className="grid">
        {allCountires.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountryFlag={handleVisitedCountryFlag}
            key={country.cca3.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
}

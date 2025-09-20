import React, { use, useState } from "react";
import Country from "../Country/Country";

export default function AllCountries({ countriesPromise }) {
  const white = {
    fontSize: "35px",
    color: "#ffffff",
  };

  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (countryName) => {
    const newVisitedCountry = [...visitedCountry, countryName];
    setVisitedCountry(newVisitedCountry);
  };

  const allCountiresData = use(countriesPromise);
  const allCountires = allCountiresData.countries;

  return (
    <>
      <h1 className="title" style={white}>
        Total Countries: {allCountires.length}
      </h1>
      <h3>Total Countries Visited: {visitedCountry.length}</h3>
      <ol>
        {
          visitedCountry.map(country => <li>{country}</li>)
        }
      </ol>

      <div className="grid">
        {allCountires.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
}

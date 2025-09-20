import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {

  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
    handleVisitedCountry(country.name.common);
    // handleVisitedCountry(country);
  };

  if (country.name.common === "Israel") return null;

  return (
    <>
      <div className={`${visited && "visited"}`}>
        <img
          src={country.flags.flags.svg}
          alt={country.flags.flags.alt}
          className="flag"
        />
        <p>{country.name.common}</p>
        <p>Population: {country.population.population}</p>
        <button onClick={handleVisit}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        {/* <button></button> */}
      </div>
    </>
  );
};

export default Country;

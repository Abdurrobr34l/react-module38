import React, { useState } from "react";

const Country = ({
  country,
  handleVisitedCountry,
  handleVisitedCountryFlag,
}) => {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
    handleVisitedCountry(country.name.common);
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
        <button
          onClick={() => {
            handleVisitedCountryFlag(country.flags.flags.svg);
          }}
        >
          Country Flag
        </button>
      </div>
    </>
  );
};

export default Country;

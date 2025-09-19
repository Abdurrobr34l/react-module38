import React from "react";

const Country = ({ country }) => {
  if (country.name.common === "Israel") return null;

  return (
    <>
      <div className="countryFlex">
        <img src={country.flags.flags.svg} alt={country.name.common} className="flag"/>
        <p>Country: {country.name.common}</p>
      </div>
    </>
  );
};

export default Country;

import React, { use } from "react";
import Country from "../Country/Country";

export default function AllCountries({ countriesPromise }) {
  const allCountiresData = use(countriesPromise);
  const allCountires = allCountiresData.countries;

  return (
    <>
      <h1>Total Countries: {allCountires.length}</h1>

      <div className="grid">
        {allCountires.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </>
  );
}

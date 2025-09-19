import { Suspense } from "react";
import "./App.css";
import AllCountries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => response.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1 className="title">Loading...</h1>}>
        <AllCountries countriesPromise={countriesPromise}></AllCountries>
      </Suspense>
    </>
  );
}

export default App;

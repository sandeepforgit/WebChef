import React, { useContext } from "react";
import Card from "./Card1";
import { resultsContext } from "./Context/resultsContext";

function SearchResults({ results }) {
  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-4 p-6 pt-10 w-screen place-items-center">
        {results.map((result) => (
          <Card item={result} />
        ))}
      </div>
    </>
  );
}

export default SearchResults;

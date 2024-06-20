import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchResults from "../SearchResults";
import { resultsContext } from "../Context/resultsContext";

function Home() {
  const { results, setResults } = useContext(resultsContext);
  const { searchTerm, setSearchTerm } = useContext(resultsContext);
  const { famous, setFamous } = useContext(resultsContext);
  const fetchResults = async () => {
    if (searchTerm == "") {
      alert("please Enter Dish Name");
    }
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.trim()}`
    );
    const info = data.meals;
    setResults(info);
  };
  const fetchFamous = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const info = data.meals;
    setFamous(info);
  };

  useEffect(() => {
    fetchFamous();
  });
  return (
    <>
      <section
        class="flex justify-center items-center h-72 w-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-texture-kitchen-table-panoramic-high-resolution-background_84485-1446.jpg")`,
        }}
      >
        <div class="flex gap-3 items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="placeholder:text-zinc-500 h-9 w-52 rounded outline outline-2 hover:outline-offset-2 bg-transparent outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 font-medium"
            placeholder="Search Recipe"
          />
          <button
            onClick={() => fetchResults()}
            class=" w-20 h-7 text-zinc-400 font-extralight outline outline-black rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Search
          </button>
        </div>
      </section>

      {searchTerm.trim() != "" && results != null && results.length > 0 && (
        <h1 class="font-bold text-2xl text-center p-7">Your Search Results</h1>
      )}

      {results != null && results.length > 0 && (
        <SearchResults results={results} />
      )}
      {results == null && (
        <h1 class="font-bold text-2xl text-center p-7">No results Found</h1>
      )}
      {<h1 class="font-bold text-2xl text-center p-7">World Famous Dishes</h1>}

      {<SearchResults results={famous} />}
    </>
  );
}

export default Home;

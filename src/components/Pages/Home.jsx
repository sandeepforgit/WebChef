import React, { useContext, useState } from 'react'
import axios from 'axios'
import SearchResults from '../SearchResults'
import { resultsContext } from '../Context/resultsContext'

function Home() {
  const {results, setResults} = useContext(resultsContext)
  const [searchTerm, setSearchTerm] = useState("")
  const fetchResults = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    const info = data.meals
    setResults(info)
  }
  return (
    <>
      <section class="flex justify-center items-center h-72 w-screen" style={{backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-texture-kitchen-table-panoramic-high-resolution-background_84485-1446.jpg")`}}>
        <div class="flex gap-3 ">
          <input
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          class="placeholder:text-zinc-500 h-7 w-52 rounded outline outline-2 hover:outline-offset-2 bg-transparent outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"
          placeholder='Search Recipe'/>
          <button 
          onClick={() => (fetchResults())}
          class=" w-20 h-7 text-zinc-400 font-extralight outline outline-black rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
          Search
          </button>
        </div>   
      </section>
      {
       results.length > 0 &&  <SearchResults/>
      }
      
    </>
  )
}

export default Home
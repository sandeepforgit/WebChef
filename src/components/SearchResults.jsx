import React, { useContext } from 'react'
import Card from './Card'
import { resultsContext } from './Context/resultsContext'

function SearchResults() {
    const {results} = useContext(resultsContext)
  return (
    <>
    <h1 class="font-bold text-2xl text-center p-7">Your Search Results</h1>
    <div class="grid grid-cols-4 w-screen place-items-center">
    {results.map((result)=>(
        <Card item = {result}/>
        ))
    }
    </div>
    </>
  )
}

export default SearchResults
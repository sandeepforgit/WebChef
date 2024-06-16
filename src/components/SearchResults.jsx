import React, { useContext } from 'react'
import Card from './Card1'
import { resultsContext } from './Context/resultsContext'

function SearchResults() {
    const {results} = useContext(resultsContext)
  return (
    <>
    <div class="grid grid-cols-4 p-6 pt-10 w-screen place-items-center">
    {results.map((result)=>(
        <Card item = {result}/>
        ))
    }
    </div>
    </>
  )
}

export default SearchResults
import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({item}) {
  return (
    <div class="bg-white rounded-lg shadow-lg m-3 w-60 h-60 grid items-center justify-center hover:scale-105">
        <NavLink to={`/${item.idMeal}`}><img class="w-44 rounded-md" src={item.strMealThumb}/></NavLink>
        <h2 class="text-center">{item.strMeal}</h2>
    </div>
  )
}

export default Card
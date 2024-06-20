import React from "react";
import { NavLink } from "react-router-dom";

function Card({ item }) {
  return (
    <NavLink to={`/${item.idMeal}`}>
      <div class="bg-white rounded-lg shadow-lg m-3 w-60 h-60 grid items-center justify-center hover:scale-110">
        <img class="w-44 rounded-md" src={item.strMealThumb} />
        <h2 class="text-center m-2">{item.strMeal}</h2>
      </div>
    </NavLink>
  );
}

export default Card;

import React from "react";
import { NavLink } from "react-router-dom";

function Card2({ category }) {
  return (
    <section>
      <div class="bg-white rounded-lg shadow-lg m-3 w-60 h-60 grid items-center justify-center hover:scale-105">
        <NavLink to={`${category.strCategory}`}>
          <img src={category.strCategoryThumb} alt="image" />
        </NavLink>

        <h1 class="text-center">{category.strCategory}</h1>
      </div>
    </section>
  );
}

export default Card2;

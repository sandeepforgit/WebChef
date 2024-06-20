import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card1";
import { categoryContext } from "../Context/CategoriesContext";

function CategoryItems() {
  const { Category } = useParams();
  const { meals, setMeals } = useContext(categoryContext);
  console.log(Category);
  const fetchItems = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
    );
    setMeals(data.meals);
  };
  fetchItems();
  return (
    <>
      <h1 class="font-bold text-2xl text-left p-7">{Category} Items</h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 place-items-center">
        {meals != null && meals.length > 0 && meals.map((meal) => <Card item={meal} />)}
      </div>
    </>
  );
}

export default CategoryItems;

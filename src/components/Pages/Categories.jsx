import axios from 'axios';
import React, { useContext, useState } from 'react'
import Card2 from '../Card2';
import { categoryContext } from '../Context/CategoriesContext';

function Categories() {
  const {categories, setCategories} = useContext(categoryContext)
  const fetchCategories = async () => {
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    setCategories(data.categories)
  }
  fetchCategories()
  return (
    <>
      <h1 class="text-center font-bold text-3xl m-4">Categories</h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 place-items-center">
        {
          categories.map((Category)=>(
              Category.strCategory != "Beef" && <Card2 category={Category}/>
          ))
        }
      </div>
    </>
  )
}

export default Categories
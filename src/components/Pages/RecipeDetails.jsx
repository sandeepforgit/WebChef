import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card1'


function RecipeDetails() {
    const {mealId} = useParams()
    const [meal, setMeal] = useState(null)
    const fetchRecipe = async () => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        setMeal(data.meals[0])
    }
    if(mealId != "") fetchRecipe()
  return (
    <div>
        { meal!=null && (
            <>
            <img class="w-48" src={meal.strMealThumb} alt="" />
            <p>{meal.strInstructions}</p>
            </>
        )}
    </div>
  )
}

export default RecipeDetails
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



function RecipeDetails() {
    const {mealId} = useParams()
    const [meal, setMeal] = useState(null)
    const fetchRecipe = async () => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        data.meals[0].strInstructions = data.meals[0].strInstructions.replace(/\n/g, '<br>')
        setMeal(data.meals[0])
    }
    if(mealId != "") {
      fetchRecipe() 
    }
    
  return (
    <div>
         {meal!=null && (
            <>
            <div class="flex items-center justify-center">
              <div class="grid rounded-lg shadow-lg w-9/12 m-5 p-5">
                <div class='sm:flex grid place-items-center'>
                  <img class="m-5 w-56 rounded-lg shadow-lg" src={meal.strMealThumb} alt="image" />
                  <div class="grid place-items-center sm:place-items-start">
                    <h1 class="sm:m-10 m-2 font-bold text-3xl">{meal.strMeal}</h1>
                    <span class=" sm:ml-10 m-1 flex gap-2"><h1 class="font-medium">Country:</h1>{meal.strArea}</span>
                    <span class="sm:ml-10 m-1 flex gap-2"><h1 class="font-medium">Category:</h1>{meal.strCategory}</span>
                    <a href={meal.strYoutube}>
                      <img class="sm:m-10 sm:p-0 p-2 w-14 hover:scale-75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1200px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png" />
                    </a>
                  </div>
                </div>
                <h1 class="font-bold text-2xl m-5 ml-0">Instructions:</h1>
                <div class="font-semibold" dangerouslySetInnerHTML={{ __html: meal.strInstructions }} />
              </div>
            </div>
            </>
        )}
    </div>
  )
}

export default RecipeDetails
import React from 'react'

function RecipeTile({recipe}) {

    const calories = Math.floor(recipe["recipe"]["calories"]);

  return (
    <div className='flex items-baseline'>

        <div class="max-w-xs bg-slate-100 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            
            <img class="rounded-t-2xl m-auto rounded-2xl w-full" src={recipe["recipe"]["image"]} alt="" />
            
            <div class="p-5">
                
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe["recipe"]["label"]}</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Meal Type : {recipe["recipe"]["mealType"]} 
                    <br/>
                    Cuisine : {recipe["recipe"]["cuisineType"]}
                    <br/>
                    Diet Label : {recipe["recipe"]["dietLabels"][0]}
                    <br/>
                    Calories : {calories} cal/kg
                </p>
                <a href={recipe["recipe"]["url"]} class="font-mono inline-flex relative items-center px-3 py-2 text-[18px] md:font-sm font-semibold text-center text-black bg-pink-300 rounded-lg hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:bg-pink-300 dark:hover:bg-pink-400 dark:focus:ring-pink-500" rel="noreferrer" target='_blank'>
                    Get Recipe
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>


    </div>
  )
}

export default RecipeTile
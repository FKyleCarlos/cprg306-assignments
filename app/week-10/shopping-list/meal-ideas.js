"use client"

import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}){
    
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(null)

    async function fetchMealIdeas(ingredient){
        const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
        try{
            const result = await fetch(`${baseUrl}${ingredient}`)
            
            if(!result.ok){
                throw new Error(`Response Error: ${result.status}`)
            }

            return result.json();
        }
        catch(error){
            setError(error);
        }
    }

    useEffect(() => {
            async function loadMealIdeas(){
        const recipes = await fetchMealIdeas(ingredient);
        setMeals(recipes.meals)
    }
    loadMealIdeas();
    }, [ingredient])

    if(error || ingredient === "" || meals == null){
        return(
        <div>
            {/* <p className="text-black text-lg">NO MEALS FOUND</p> */}
            {error ? <p className="text-rose-700">Error: {error}</p> : ingredient == "" ? <p className="text-rose-700">NO INGREDIENT SELECTED</p> : 
            <p className="text-rose-700">{`NO MEALS FOUND FOR "${ingredient}"`}</p>}
        </div>
    )
    }
    else{
        return(
        <div className="">
            <p className="text-black text-lg mb-5">{`Meal ideas for "${ingredient}"`}</p>
            <div className="grid grid-cols-3 gap-4">
                {meals.map((item) =>(
                    <div key={item.idMeal} className="bg-slate-400 outline-slate-500 outline-2 p-5 rounded-lg text-black">
                        {item.strMeal}
                    </div>
                ))}
            </div>
        </div>
    )
    }

}
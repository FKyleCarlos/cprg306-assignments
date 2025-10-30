"use client"
import { useState } from "react";
import itemsData from './items.json' assert { type: 'json' };
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page(){

    const [items, setItems] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(newItem){
        setItems((items) => [...items, newItem]);
    }

    function handleItemSelect(ingredientName){
        ingredientName = ingredientName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|\uFE0F|\u200D)/g,'');
        ingredientName = ingredientName.trim();
        ingredientName = ingredientName.replace(/ /g, '_');
        setSelectedItemName(ingredientName.split(',')[0]);
    }

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="grid lg:grid-cols-2 bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5 pt-20">
                <div className="flex-grow overflow-y-auto">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="flex-grow overflow-y-auto px-10">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}
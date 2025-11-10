"use client"
import { useState } from "react";
import itemsData from './items.json' assert { type: 'json' };
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
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

    if(!user){
        return(
            <main className='flex items-center justify-center p-6'>
                <div className="flex flex-col items-center justify-center bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5 pt-5">
                    <Link href="../week-9" className="bg-slate-600 rounded-lg px-5 py-2 text-lg">← Back</Link>
                    <div className="grid grid-cols-5 gap-10 text-center pt-10">
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">GET OUT !!!!!!!!!!!!!!!!!!!!</h2>
                        <h2 className="bg-rose-700 rounded-lg p-5">YOU AREN'T ALLOWED HERE!!!!</h2>
                    </div>
                </div>
            </main>
        )
    }
    else{
        return(
            <main className='flex items-center p-6'>
                <div className="bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5 pt-5">
                    <Link href="../week-9" className="bg-slate-600 rounded-lg px-5 py-2 text-lg">← Back</Link>
                    <div className="grid lg:grid-cols-2 h-[80vh] mt-6">
                        <div className="flex-grow overflow-y-auto">
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={items} onItemSelect={handleItemSelect}/>
                        </div>
                        <div className="flex-grow overflow-y-auto px-10">
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
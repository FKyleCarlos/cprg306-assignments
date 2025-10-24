"use client"
import { useState } from "react";
import itemsData from './items.json' assert { type: 'json' };
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page(){

    const [items, setItems] = useState([...itemsData]);

    function handleAddItem(newItem){
        setItems((items) => [...items, newItem]);
    }

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="flex-grow overflow-y-auto bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items}/>
            </div>
        </main>
    )
}
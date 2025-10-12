"use client"
import { useState } from "react"
import NewItem from "./new-item"

export default function Page(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, SetCategory] = useState("produce")

    function Submit(e){
        e.preventDefault();
        alert(`Category: ${category} \nName: ${name} \nQuantity: ${quantity}`);
    }

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="flex items-center justify-center bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5">
                <form className="flex flex-col items-center justify-center bg-slate-500 w-full max-w-lg rounded-lg p-5 max-w-sm"
                onSubmit={Submit}> 
                    <select className="border border-2 border-slate-400 hover:border-blue-500 focus:ring-2 focus:ring-slate-600 focus:border-slate-600
                    rounded-lg my-2 w-full max-w-[220px] p-[7px]"  
                     value={category} onChange={(e) => SetCategory(e.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="frozen food">Frozen Food</option>
                        <option value="canned food">Canned Food</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                    <input className="border border-2 border-slate-400 hover:border-blue-500 focus:ring-2 focus:ring-slate-600 focus:border-slate-600
                    rounded-lg my-2 w-full max-w-[220px] p-1" 
                    type="text" name="groceryItem" 
                    placeholder="Enter an item" 
                    onChange={(e) => setName(e.target.value)} />
                    <NewItem quantity={quantity} setQuantity={setQuantity}/>
                    <button type="submit" className="bg-green-700 text-lg w-[100px] mt-5 rounded-lg hover:bg-green-800" onClick={Submit}>Submit</button>
                </form>
            </div>
        </main>
    )

}
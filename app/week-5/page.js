"use client"
import { useState } from "react"
import NewItem from "./new-item"

export default function Page(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, SetCategory] = useState("produce")
    const [isBlank, setIsBlank] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(name === ""){
            setIsBlank(true);
            return;
        }
        setIsBlank(false);
        alert(`Category: ${category} \nName: ${name} \nQuantity: ${quantity}`);
        setName("");
    }

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="flex items-center justify-center bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5">
                <form className="flex flex-col items-center justify-center bg-slate-500 w-full max-w-lg rounded-lg p-5 max-w-sm"
                onSubmit={handleSubmit}>
                    <label className="text-lg">Category:</label>
                    <select className="border border-2 border-slate-400 hover:border-blue-500 focus:ring-2 focus:ring-slate-600 focus:border-slate-600
                    rounded-lg my-2 w-full max-w-[220px] p-[7px]"  
                     value={category} onChange={(e) => SetCategory(e.target.value)}>
                        <option className="bg-slate-300 text-slate-800" value="produce">Produce</option>
                        <option className="bg-slate-300 text-slate-800" value="dairy">Dairy</option>
                        <option className="bg-slate-300 text-slate-800" value="bakery">Bakery</option>
                        <option className="bg-slate-300 text-slate-800" value="frozen food">Frozen Food</option>
                        <option className="bg-slate-300 text-slate-800" value="canned food">Canned Food</option>
                        <option className="bg-slate-300 text-slate-800" value="dry goods">Dry Goods</option>
                        <option className="bg-slate-300 text-slate-800" value="beverages">Beverages</option>
                        <option className="bg-slate-300 text-slate-800" value="snacks">Snacks</option>
                        <option className="bg-slate-300 text-slate-800" value="household">Household</option>
                        <option className="bg-slate-300 text-slate-800" value="other">Other</option>
                    </select>
                    <label className="text-lg">Item Name:</label>
                    <input className="border border-2 border-slate-400 hover:border-blue-500 focus:ring-2 focus:ring-slate-600 focus:border-slate-600
                    rounded-lg my-2 w-full max-w-[220px] p-1" 
                    type="text" name="groceryItem" 
                    placeholder="Enter an item"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                    <NewItem quantity={quantity} setQuantity={setQuantity}/>
                    {isBlank ? <p className="bg-rose-800 text-slate-100 rounded-lg px-2 m-2">Please enter a name for the item</p> : <p></p>}
                    <button type="submit" className="bg-green-600 text-lg w-[100px] mt-2 rounded-lg hover:bg-green-800" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </main>
    )

}
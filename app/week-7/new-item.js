"use client"
import { useState } from "react"

export default function NewItem({onAddItem}){

    const [isOne, setIsOne] = useState(false);
    const [isTwenty, setIsTwenty] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")
    const [isBlank, setIsBlank] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        console.log('asdasd')
        if(name.trim() == ""){
            console.log("asdasdasd")
            setIsBlank(true);
            return;
        }
                console.log('asdasd')
        setIsBlank(false);

        const newItem = {
            id: "",
            name: name.toLocaleLowerCase(),
            quantity: quantity,
            category: category
        }
        onAddItem(newItem);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    function incrementQuantity(){
        if(isOne){
            setIsOne(false);
        }
        if(quantity == 20){
            setIsTwenty(true);
        }
        else{
            setQuantity(quantity + 1);
        }
        
    }

    function decrementQuantity(){
        if(isTwenty){
            setIsTwenty(false);
        }
        if(quantity <= 1){
            setIsOne(true);
        } 
        else{
            setQuantity(quantity - 1);
        }
        
    }

    return(
        <div className="flex justify-center items-center text-center mt-12 mb-10">
            <form className="flex flex-col items-center justify-center bg-slate-500 w-full max-w-lg rounded-lg p-5 max-w-sm"
            onSubmit={handleSubmit}>
                <label className="text-lg">Category:</label>
                <select className="border border-2 border-slate-400 hover:border-blue-500 focus:ring-2 focus:ring-slate-600 focus:border-slate-600
                rounded-lg my-2 w-full max-w-[220px] p-[7px]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
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
                onChange={(e) => setName(e.target.value)}/>
                <div className="flex flex-col items-center justify-center bg-slate-400 w-full max-w-[220px] py-5 m-1 rounded-lg mx-auto">
                    <p className="text-lg pb-6 pt-2">Quantity: {quantity}</p>
                    <div className="flex justify-around">
                        <button type="button" className="focus:outline-none text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 
                        focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-rose-800 dark:hover:bg-rose-950 
                        dark:focus:ring-red-900 
                        disabled:bg-rose-900 disabled:cursor-not-allowed"
                        onClick={decrementQuantity} disabled={isOne}>
                        -
                        </button>

                        <button type="button" className="focus:outline-none text-white bg-emerald-700 hover:bg-green-800 focus:ring-4 
                        focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-700 
                        dark:hover:bg-emerald-900 dark:focus:ring-green-800 
                        disabled:bg-emerald-800 disabled:cursor-not-allowed" 
                        onClick={incrementQuantity} disabled={isTwenty}>
                        +
                        </button>
                    </div>
                    {isOne ? <p className="text-rose-700">Quantity cannot go below 1</p> : <p></p>}
                    {isTwenty ? <p className="text-rose-700">Quantity cannot go above 20</p> : <p></p>}
                </div>
                {isBlank ? <p className="bg-rose-800 text-slate-100 rounded-lg px-2 m-2">Please enter a name for the item</p> : <p></p>}
                <button type="submit" 
                className="bg-green-600 text-lg w-[100px] mt-2 rounded-lg hover:bg-green-800"
                onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
"use client"
import { useState } from "react"

export default function NewItem(){
    
    const [quantity, setQuantity] = useState(1);

    function incrementQuantity(){
        setQuantity(quantity + 1);
    }

    function decrementQuantity(){   
        setQuantity(quantity - 1);
    }

    return(
        <div className="flex flex-col items-center justify-center bg-slate-600 w-full max-w-sm p-3 rounded-lg mt-35 mx-auto">
            <p className="text-lg pb-6 pt-2">Quantity: {quantity}</p>
            <div className="flex justify-around">
                <button type="button" className="focus:outline-none text-white bg-emerald-700 hover:bg-green-800 focus:ring-4 
                focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-700 
                dark:hover:bg-emerald-900 dark:focus:ring-green-800 
                disabled:bg-emerald-800 disabled:cursor-not-allowed" 
                onClick={incrementQuantity} disabled={quantity >= 20}>
                Add
                </button>

                <button type="button" className="focus:outline-none text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-rose-800 dark:hover:bg-rose-950 
                dark:focus:ring-red-900 
                disabled:bg-rose-900 disabled:cursor-not-allowed"
                onClick={decrementQuantity} disabled={quantity <= 1}>
                Subtract
                </button>
            </div>
            {quantity <= 1 ? <p className="text-rose-400">Quantity cannot go below 1</p> : <p></p>}
            {quantity >= 20 ? <p className="text-rose-400">Quantity cannot go above 20</p> : <p></p>}
        </div>
    )
}
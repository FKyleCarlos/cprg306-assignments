import { useState } from "react";
import Item from "./item";


export default function ItemList({items}){

    const [sortBy, setSortBy] = useState("name");

    const sortedList = [...items].sort((a,b) => {
        if(a[sortBy] < b[sortBy]) return -1;
        if(a[sortBy] > b[sortBy]) return 1;
        return 0;
    })

    function SortName(){
        setSortBy("name");
    }
    function SortCategory(){
        setSortBy("category");
    }

    return(
        <div>
            <div className="flex justify-center items-center">
                <div className="bg-slate-700 grid grid-cols-1 mb-10 sm:grid-cols-1 md:grid-cols-2 rounded-lg mb-10 w-lg">
                    <button className={`${sortBy == "name" ? "bg-emerald-600 text-slate-200" : "bg-slate-700 text-slate-200"}  rounded-lg px-5 hover:outline-2 outline-slate-500`} 
                    onClick={SortName}>
                        Name
                    </button>
                    <button className={`${sortBy == "category" ? "bg-emerald-600" : "bg-slate-700 text-slate-200"} rounded-lg px-5 hover:outline-2 outline-slate-500`} 
                    onClick={SortCategory}>
                        Category
                    </button>
                </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sortedList.map((item, index) => (
                    <Item key={index} {...item}></Item>       
                ))}
            </div>
        </div>
    )

}
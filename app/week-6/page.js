"use client"
import { useState } from "react"
import ItemList from "./item-list";

export default function Page(){

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="flex justify-center bg-slate-300 w-full h-full rounded-lg mt-12 pt-30 pb-10 md:h-full pb-10 lg:h-[80vh]">
                <ItemList />
            </div>
        </main>
    )

}
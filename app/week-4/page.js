"use client"
import { useState } from "react"
import NewItem from "./new-item"

export default function Page(){

    return(
        <main className='flex items-center justify-center p-6'>
            <div className="bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5">
                <NewItem/>
            </div>
        </main>
    )

}
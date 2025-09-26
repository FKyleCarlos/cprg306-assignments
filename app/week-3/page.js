"use client";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Item from "../week-3/item";
import {items} from "../week-3/item-list";


export default function Page(){
    return(
    <main className='flex justify-center p-6'>
        <Card sx={{ backgroundColor: "#778DA9", color: "white", 
        width: "100%", minHeight: "90vh", borderRadius: 3, padding: 1, paddingTop: 12, marginTop: 5.5}}>
            <h1 className='underline font-bold text-center'>Shopping List</h1>
            <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
                    {items.map((item, index) => (
                        <Item key={index} {...item} />
                    ))
                    }
                </ul>
            </CardContent>
        </Card>
    </main>
    )
}
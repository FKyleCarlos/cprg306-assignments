"use client";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Item from "../week-3/item";
import {items} from "../week-3/item-list";


export default function Page(){
    return(
    <main className='flex justify-center p-6'>
        <Card sx={{ backgroundColor: "#0D1B2A", color: "white", 
        width: "100%", minHeight: "90vh", borderRadius: 3, padding: 1, paddingTop: 15, marginTop: 4}}>
            <CardContent>
                <ul className="flex flex-col items-center">
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
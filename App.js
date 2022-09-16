import React from "react"
import Travel from "./travel"
import items from "./data"
import Header from "./header.js"



export default function App () {
    const data = items.map(item => {
        return (
                <Travel 
                key={item.id}
                {...item}
            
            />
        )
    }) 
    return (
        <div>
         <Header />
            {data}
           
            
        </div>
    )
}
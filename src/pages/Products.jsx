import React, { useEffect, useState } from "react"
import ItemCard from "../Components/ItemCard";
import "./css/product-page.css"
import {Link, useParams} from "react-router-dom"
import { fetchWrapper } from "../helper/fetchWrapper";
const itemsInit=[
    {
        id:1,
        title:"T-shirt for formal men",
        price:"200",
        rating:"4.0",
    },
    {
        id:2,
        title:"T-shirt for formal men",
        price:"180",
        rating:"3.0",
    },
    {
        id:3,
        title:"T-shirt for formal men",
        price:"400",
        rating:"2.3",
    }
]
const Products = () => {
    
const [items, setItems] = useState(itemsInit)
const populateData = async () =>{
    let data = await fetchWrapper.get("http://localhost:5000/products")
    setItems(data)
}
useEffect(
    ()=>{
        populateData()
        console.log(items)
    },[]
)
    return(<div className="products">
        {items &&
            items.map((it,index)=>(
                <ItemCard key={index} item={it}/>
            ))
        }

</div>
)}

export default Products;
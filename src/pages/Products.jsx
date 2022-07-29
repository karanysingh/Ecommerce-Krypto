import React from "react"
import ItemCard from "../Components/ItemCard";
import "./css/product-page.css"
import {Link, useParams} from "react-router-dom"
const items=[
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
    
    return(<div className="products">
        {
            items.map((it,index)=>(
                <ItemCard key={index} item={it}/>
            ))
        }

</div>
)}

export default Products;
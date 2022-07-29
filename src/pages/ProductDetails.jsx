import React, { useEffect, useState } from "react"
import {
    useParams
} from "react-router-dom"
import "./css/product-page.css"
import {fetchWrapper} from "../helper/fetchWrapper"

let init= {
    "id": 1,
    "title": "EYEBOGLER Regular Fit Men's Cotton T-Shirt",
    "description": "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
    "image": "https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg",
    "amount": "200",
    "rating": "4.0"
}

const ProductDetails = () => {
    const { product_id } = useParams();
    console.log(id)
    const [item, setItem] = useState(init)
    const populateData = async () => {
        let data = await fetchWrapper.get(`http://localhost:5000/products/${product_id}`)
        setItem(data)
    }
    useEffect(()=>{
        populateData()
    },[])
    const { id, title, description,image, amount, rating } = item 
    return (
        <div className="detail-container">
            <div className="detail-image-container">
                <img src={image}></img>
            </div>
            <div className="detail-desc-container">
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h2>$ {amount}</h2>
                </div>

                <div className="detail-action-container">
                    <button style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center", padding:"10px 20px", backgroundColor:"white", color:"black" }}>Buy Now</button>
                    <button style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center", padding:"10px 20px", backgroundColor:"black", color:"white"}}>Add to basket</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
// Introduction and the greetings family.
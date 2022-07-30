import React, { useEffect, useState } from "react"
import {
    useParams
} from "react-router-dom"
import "./css/product-page.css"
import { fetchWrapper } from "../helper/fetchWrapper"

let init = {
    "id": 1,
    "title": "EYEBOGLER Regular Fit Men's Cotton T-Shirt",
    "description": "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
    "image": "https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg",
    "amount": "200",
    "rating": "4.0"
}

const ProductDetails = () => {
     const params = useParams();
    //  console.log(params)
     const { id:product_id } = params;
    const [item, setItem] = useState(init)
    const [localCart, setLocalCart] = useState([])
    const populateData = async () => {
        let data = await fetchWrapper.get(`http://localhost:5000/products/${product_id}`)
        setItem(data)
    }
    const syncCart = () => {
        setLocalCart(JSON.parse(localStorage.getItem("cart"))|| [])
    }
    useEffect(() => {
        setLocalCart(JSON.parse(localStorage.getItem("cart")) || [])
        console.log(localCart,localStorage.getItem("cart"))
        console.log("product_id",product_id)

        populateData()
    }, [])
    const { id, title, description, image, amount, rating } = item
    const addToCart = () => {
        if (!localCart.includes(product_id)) {
            localStorage.setItem("cart", JSON.stringify([...localCart, product_id]))
            syncCart()
        }
    }
    const removeFromCart = () => {
        // let cart = ca
        if (localCart.includes(product_id)) {

            let temp = localCart.filter(item => item !== product_id)
            localStorage.setItem("cart", JSON.stringify(temp))
            syncCart()
        }
    }
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
                    <button style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px", backgroundColor: "white", color: "black" }}>Buy Now</button>
                    {!localCart.includes(product_id) ? <button onClick={addToCart} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px", backgroundColor: "black", color: "white" }}>Add to basket</button> : <button onClick={removeFromCart} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px", backgroundColor: "black", color: "white" }}>Remove from basket</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
// Introduction and the greetings family.
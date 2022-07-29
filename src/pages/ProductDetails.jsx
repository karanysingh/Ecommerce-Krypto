import React from "react"
import {
    useParams
} from "react-router-dom"
import "./css/product-page.css"

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id)
    return(
        <p>Hola</p>
    )
}

export default ProductDetails;
// Introduction and the greetings family.
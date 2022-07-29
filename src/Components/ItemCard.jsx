import React from "react";
import "./css/item-card.css";
import { useNavigate } from 'react-router-dom';


const ItemCard = (props) => {
    console.log(props.item)
    const {id, title,description,image,amount, rating} = props.item;
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`)
    }
    return(
            <div onClick={handleClick} className="item-card">
                <div className="item-top">
                    <div className="image-card">
                        <img src={image}></img>
                    </div>
                    <div className="item-content-container">
                        <div>
                        <h1>{title}</h1>
                        <div className="item-description-container">
                        <p>{description}</p>
                        </div>
                        </div>
                        <div>
                        <p>${amount}</p>
                        <div className="rating">{rating}</div>
                        </div>
                    </div>
                </div>
                
                <div className="item-bottom">
                    <div className="item-icon">♥</div>
                    <div className="item-icon">🛒</div>
                </div>
            </div>
        )
}

export default ItemCard;
import React, { useState, useEffect } from "react";
import { useAuthState } from "../context";
import { fetchWrapper } from "../helper/fetchWrapper";
import { useNavigate } from "react-router-dom";
import "./css/cart-page.css"

const Modal = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="modal-root">
                <div className="overlay"></div>
                <div className="modal-body">
                    <div onClick={()=>{
                        props.toggle();
                        window.location.reload(false);
                    }} className="modal-close">X</div>
                    <>Order Placed Succesfully!</>
                </div>
            </div>
        </>
    );
}

const CartItem = ({ id: product_id }) => {
    const [item, setItem] = useState([])
    const [localCart, setLocalCart] = useState([])
    // const [refresh, setRefresh] = useState(false)
    
    const populateData = async () => {
        if (product_id !== undefined) {
            try {
                let data = await fetchWrapper.get(`http://localhost:5000/products/${product_id}`)
                setItem(data)

            } catch (err) {
                console.log(err)
                setItem([])
            }
        }
    }
    useEffect(() => {
        setLocalCart(JSON.parse(localStorage.getItem("cart")) || [])

        populateData()
        console.log(localCart.includes(product_id), product_id, localCart)
    }, [])

    const syncCart = () => {
        setLocalCart(JSON.parse(localStorage.getItem("cart")) || [])
    }
    const addToCart = () => {
        if (!localCart.includes(product_id)) {
            localStorage.setItem("cart", JSON.stringify([...localCart, product_id]))
            syncCart()
            window.location.reload(false);

        }
    }
    const removeFromCart = () => {
        // let cart = ca
        if (localCart.includes(product_id)) {

            let temp = localCart.filter(item => item !== product_id)
            localStorage.setItem("cart", JSON.stringify(temp))
            syncCart()
            window.location.reload(false);

        }
    }
    return (
        <>
            <div>
                <div></div>
                <div className="cart-item-container">
                    <h1>{item.title}</h1>
                    <h2>$ {item.amount}</h2>
                    {localCart.includes(product_id) ? <button onClick={removeFromCart}>Remove -</button> : <button onClick={addToCart}>Add +</button>}
                </div>
            </div>
        </>
    )
}
const Cart = () => {
    const [localCart, setLocalCart] = useState([])
    const user = useAuthState()
    const navigate = useNavigate()

   
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);
    const syncCart = () => {
        setLocalCart(JSON.parse(localStorage.getItem("cart")) || [])
    }
    useEffect(() => {
        if(user.token && user.userProfile === "" || !user.token){
            console.log("not logged in")
            navigate("/login")
        }
        setLocalCart(JSON.parse(localStorage.getItem("cart")) || [])
        console.log(localCart)
    }, [])
    const handlePlaceOrder = async () => {
        try {
            let res = await fetchWrapper.post("http://localhost:5000/orders",
                {
                    "productId": localCart.map(item => parseInt(item)),
                    "userId": user.userProfile.id,
                    "total-amount": 1000,
                })
                localStorage.setItem("cart", JSON.stringify([]))
                // window.location.reload(false);
                toggle()
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
        {show?
        <Modal toggle={toggle} />:null}
            <div>
                {localCart.map(item => <CartItem key={item} id={item}></CartItem>)}
            </div>
            {localCart.length>0 && <button onClick={handlePlaceOrder}>Place Order</button>}
            
            {localCart.length===0 && <>Cart is empty</>}
        </>
    )
}

export default Cart;
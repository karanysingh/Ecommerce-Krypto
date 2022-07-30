import React, { useEffect, useState } from "react"
import "./css/header.css"
import {
    Route,
    Link
  } from "react-router-dom";
import { logout, useAuthDispatch, useAuthState } from "../context";
import { fetchWrapper } from "../helper/fetchWrapper";

export const Header = () => {
    const init = [
        {name:"Products",link:"/"},
        {name:"Cart",link:"/cart"},
        {name:"Login",link:"/login"},
    ]
    const [actions, setActions] = useState(init)
    const user = useAuthState()
    const dispatch = useAuthDispatch()
    console.log(user)
    useEffect(()=>{
        if(user.token && user.token !== ""){
            // checkUser()
            setActions([
                {name:"Products",link:"/"},
                {name:"Cart",link:"/cart"},
                {name:"Logout",link:"/logout"},
            ])
        }else{
            setActions(init)
        }
    },[user])
    return (
        <header className="header">
        <Link className="action-items-main" to="/">ShopKart.</Link>
        <ul className="actions">
            {
                actions.map((action,index)=>{
                    return <li key={index}><Link className="action-items" to={action.link}>{action.name}</Link></li>
                })
            }
        </ul>
        </header>
    );
}
import React from "react"
import "./css/header.css"
import {
    Route,
    Link
  } from "react-router-dom";

export const Header = () => {
    const actions=[
        {name:"Products",link:"/"},
        {name:"Login",link:"/login"},
    ]
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
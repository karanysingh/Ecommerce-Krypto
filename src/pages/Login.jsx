import React, { useState } from "react"
import "../Components/css/login.css"

const Login = () => {
    const [login, setLogin] = useState(true);

    return (<>
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1>
                        {
                            login ? "Login" : "Sign Up"
                        }
                    </h1>
                </div>
                <input placeholder="Email Address"></input>
                <input placeholder="Password"></input>
                <div className="login-action">
                    <div  >
                        {
                            !login ? <a onClick={()=>setLogin(!login)}>Old User? Login</a> : <a onClick={()=>setLogin(!login)}>New User? Create an account</a>
                        }
                    </div>
                    
            <button className="login-button">
                {
                    login ? "Login" : "Sign Up"
                }
            </button>
            </div>
        </div>
    </div>
    </>)
}

export default Login;
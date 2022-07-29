import React, { useState } from "react"
import "../Components/css/login.css"
import { fetchWrapper } from "../helper/fetchWrapper";
import { updateUserProfile, useAuthDispatch, useAuthState } from "../context";

const Login = () => {
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const user = useAuthState()
    const dispatch = useAuthDispatch()
    const handleRegister = async () => {
        try {
            let response = await fetchWrapper.post("http://localhost:5000/register", {
                "email": email,
                "password": password,
                "firstname": fName,
                "lastname": lName
            })
            console.log("res-reg",response)
if(response){
            updateUserProfile(dispatch, response)
}
        }
        catch (err) {
            console.log(err)            
            setError("something went wrong")

        }

    }
    const handleLogin = async () => {
        try {
            let response = await fetchWrapper.post("http://localhost:5000/login", {
                "email": email,
                "password": password
            })
            console.log("resp",response)
            
if(response){
    updateUserProfile(dispatch, response)
}
        }
        catch (err) {
            console.log(err)
            setError("something went wrong")
        }
    }

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
                {login ? null : (<>
                    <input onChange={(e) => setFName(e.target.value)} placeholder="First Name"></input>
                    <input onChange={(e) => setLName(e.target.value)} placeholder="Last Name"></input>
                </>)}
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>

                <div className="login-action">
                    <div  >
                        {
                            !login ? <a onClick={() => setLogin(!login)}>Old User? Login</a> : <a onClick={() => setLogin(!login)}>New User? Create an account</a>
                        }
                    </div>


                    {
                        login ? <button onClick={handleLogin} className="login-button">Login</button> : <button onClick={handleRegister} className="login-button">Sign Up</button>
                    }

                </div>
                
                <p>{error}</p>
            </div>
        </div>
    </>)
}

export default Login;
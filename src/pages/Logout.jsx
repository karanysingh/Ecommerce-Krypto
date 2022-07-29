import React, { useEffect } from "react"
import { useAuthDispatch, logout } from "../context"
const Logout = () => {
    const dispatch = useAuthDispatch()
    useEffect(() => {
        console.log("logging out")
        logout(dispatch)
    }, [])
    return (<>
    </>)
}
export default Logout;
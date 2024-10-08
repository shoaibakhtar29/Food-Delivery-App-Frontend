import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets';
import { StoreContext } from "../../Context/StoreContext"
import axios from "axios"
import { toast } from "react-toastify"
import { Loader2Icon } from 'lucide-react';

const LoginPopup = ({ setShowLogin }) => {
    const [loading, setLoading] = useState(false);
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
            setLoading(false)
            window.location.reload();
            toast.success("Logged In Successfully")
        }
        else {
            alert(response.data.message)
        }
    }
    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter your password' required />
                </div>
                {loading ? <button><Loader2Icon className=' animate-spin' /> </button> : <button type='submit'>{currState === "Sign Up" ? "Create a account" : "Login"}</button>}
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currState === "Sign Up"
                        ? <p>Already have an account <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                        : <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup

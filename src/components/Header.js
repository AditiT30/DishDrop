import React, {useState} from "react";
import {LOGO_URL} from "../utils/constants";
import{Link}  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus=useOnlineStatus();

    return (
        <div className="header flex justify-between bg-yellow-100 shadow-lg">
            <div className="logo-container">
                <img className={"logo w-56"} src={LOGO_URL.href} alt="logo"/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/" ></Link></li>
                    <li className="px-4"><Link to="/about" >About Us</Link></li>
                    <li className="px-4"><Link to="/contact" >Contact Us</Link></li>
                    <li className="px-4"><Link to="/contact" >Cart</ Link></li>
                    <li className="px-4"><Link to="/grocery" >Grocery</ Link></li>
                    <button className="login" onClick={()=> {
                       btnName === "Login" ? setBtnName("Logout"):
                           setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
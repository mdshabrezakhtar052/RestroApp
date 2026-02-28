import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
// Header Component
const Header = () => {

    let btnName = "login";

    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Company</li>
                    <li>Career</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login"); 
                        // console.log(setbtnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
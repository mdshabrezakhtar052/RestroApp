import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Header Component
const Header = () => {

    let btnName = "login";
    
    // Always use useState inside component keep it in top inside functional component
    const [btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header render");

    // if no dependency array => useEffect will be called on every render
    // if dependency array is empty = [] -> useEffect will be called on initial render(just once)
    // if dependency array is [btnNameReact] -> useEffect will be called everytime btnNameReact is updated.
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                     <Link to="/">Home</Link>   
                    </li>
                    <li>
                     <Link to="/about">About</Link>   
                    </li>
                    <li>
                     <Link to="/contact">Contact</Link>   
                    </li>
                    <li>
                     <Link to="/career">Career</Link>   
                    </li>
        
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
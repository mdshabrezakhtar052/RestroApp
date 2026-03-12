import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

// Header Component
const Header = () => {

    let btnName = "login";
    
    const onlineStatus = useOnlineStatus();

    // Always use useState inside component keep it in top inside functional component
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header render");

    // if no dependency array => useEffect will be called on every render
    // if dependency array is empty = [] -> useEffect will be called on initial render(just once)
    // if dependency array is [btnNameReact] -> useEffect will be called everytime btnNameReact is updated.
    useEffect(() => {
        // console.log("useEffect called");
    }, [btnNameReact]);

    return (
        <div className="header flex justify-between items-center px-8 py-3 bg-white shadow-md sticky top-0 z-50">
            <div className="logo-container flex items-center ">
                <img className="logo w-16 h-16 object-contain cursor-pointer" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex items-center gap-8 font-medium text-gray-700">
                    <li className="text-sm">
                        Online Status: {onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li className="hover:text-orange-500 transition"> 
                     <Link to="/">Home</Link>   
                    </li>
                    <li className="hover:text-orange-500 transition">
                     <Link to="/about">About</Link>   
                    </li>
                    <li className="hover:text-orange-500 transition">
                     <Link to="/contact">Contact</Link>   
                    </li>
                    <li className="hover:text-orange-500 transition">
                     <Link to="/career">Career</Link>   
                    </li>
                    <li className="hover:text-orange-500 transition">
                     <Link to="/grocery">Grocery</Link>   
                    </li>
        {/* Login Button */}
                    <button className= {`px-4 py-2 text-white rounded-lg font-medium transition shadow
            ${
              btnNameReact === "Login"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`} onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login"); 
                        // console.log(setbtnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
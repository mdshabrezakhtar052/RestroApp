import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

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

    // const userLoginData = useContext(UserContext);
    // Step 2: Consume Context (Functional Component)
    const {loggedInUser} = useContext(UserContext);
    // console.log(userLoginData);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

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
                    {/* <li className="hover:text-orange-500 transition font-bold">
                     <Link to="/cart">
                     {cartItems.length}🛒
                     </Link>   
                    </li> */}
                    <li className="hover:text-orange-500 transition font-bold">
                        <Link to="/cart" className="relative inline-block">
                        {/* Cart Icon */}
                        <span className="text-2xl">🛒</span>
                        {/* Badge */}
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                        </Link>
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
                    <li className="px-2 font-light">
                        🧑‍💻 {loggedInUser}
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;
import { Component, useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";

// Apply CSS 
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
    console.log(props);
    const {resData} = props;
    // Destructure - Object Data
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData?.info || {};
 
     // Destructure props - Another way to do
    //  const {rating, delivery} = props;

    // Access the context inside functional component
    const {loggedInUser} = useContext(UserContext);

     return (
         <div className="res-card m-4 w-64 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" style={styleCard}>
             <img 
             className="res-img w-full h-40 object-cover"
             alt="res-img"
             src={CDN_URL + cloudinaryImageId} />
 
             {/* Using API */}
             <div className="p-3">
             <h3 className="font-bold text-lg truncate">{name}</h3>
             <p className="text-gray-600 text-sm truncate">{cuisines?.join(", ")}</p>
             <div className="flex justify-between items-center mt-2">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                ⭐️ {avgRating}
                </span>
                <span className="text-gray-700 text-sm font-medium">
                {costForTwo}
                </span>
             </div>
             <p>User : {loggedInUser}</p>
        
             </div>
            
         </div>
     );
 };

//  Higher Order Component
/*
Here we take RestroCard Component as a input and it will return new component (RestroCardVeg)
*/

export const withVegLabel = (RestroCard) => {
    return (props) => {
        return (
            <div className="relative">
                {/* Veg Label */}
                <label className="absolute top-2 left-2
                 bg-green-200 text-black text-xs 
                 font-semibold px-2 py-1 rounded-md 
                 shadow-md z-10 ">Veg 🟩</label>
                <RestroCard {...props}/>
            </div>
        );
    };
};

export default RestroCard;
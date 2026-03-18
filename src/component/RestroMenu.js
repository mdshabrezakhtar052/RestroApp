// Displaying the data logic responsibilty inside RestroMenu.js (trying to implement Single Responsibility Principle)

// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../Utils/constants";
import useRestroMenu from "../Utils/useRestroMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestroMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    // Step 1: State in Parent - Only one category index will be open at a time
    const [showIndex, setShowIndex] = useState(0);

    //If you collapse all in the starting
    // const [showIndex, setShowIndex] = useState(null);

    const { resid } = useParams();

    const resInfo = useRestroMenu(resid);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resid);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };

    // ✅ Loading guard
    if (!resInfo) {
        return <Shimmer />;
    }

    // ✅ Restaurant Info
    const info = resInfo?.cards?.[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = info || {};

    // ✅ Get Regular Cards Safely
    const regularCards = resInfo?.cards
        ?.find(card => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        // console.log(regularCards);

    // ✅ Find section that contains itemCards
    const itemSection = regularCards?.find(
        c => c?.card?.card?.itemCards
    );
     
    // console.log("itemSection",itemSection);

    const itemCards = itemSection?.card?.card?.itemCards;

    console.log("itemCards", itemCards);

    const categories = regularCards?.filter(
        (c) => 
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("categ", categories);

    // ✅ If still no items
    if (!itemCards) {
        return <Shimmer />;
    }

    return (
        <div className="menu text-center">
            <h1 className="font-extrabold my-7 text-3xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>

            {/* <h2>Menu</h2>

            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs.
                        {(item.card.info.price ||
                          item.card.info.defaultPrice) / 100}
                    </li>
                ))}
            </ul> */}

            {/* Categories Accordions */}
            {categories.map((category, index) => (
                // Controlled Component
                // 🔹 Step 2: Passing Data to Child
                 <RestroCategory  
                 key={category?.card?.card?.title} 
                 categoryData={category?.card?.card}
                 showItems={index === showIndex && true}
                 setShowIndex = {() => setShowIndex(index)}/>
            ))}

        </div>
    );
};

export default RestroMenu;
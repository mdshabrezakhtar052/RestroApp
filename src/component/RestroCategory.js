// import { useState } from "react";
import ItemList from "./ItemList";

const RestroCategory = ({categoryData, showItems, setShowIndex}) => {

    // console.log(categoryData);

    // Uncontrolled Component:
    // const [showItems, setShowItems] = useState(false);
    // const handleClick = () => {
    //     console.log("Clicked");
    //     setShowItems(!showItems);
    // }

     const handleClick = () => {
        console.log("Clicked");
        setShowIndex();
    }

    return (
    <div>
        {/* Accordion Header */}
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}>
           <span className="font-bold">
            {categoryData.title} ({categoryData.itemCards.length})
            </span>
           <span>⬇️</span>
        </div>
            {/* Accordion Body */}
            {/* <ItemList items={categoryData?.itemCards} /> */}

            {showItems && <ItemList items={categoryData?.itemCards}/>}
        </div>   
    </div>
    );

};

export default RestroCategory;
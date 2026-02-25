import RestroCard from "./RestroCard";
import restroList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {

    // Local State Variable - super powerful variable
       const [listOfRestro, setListOfRestro] = useState(restroList);

    // Implement in JS - useState Hooks
    // const arr = useState(restroList);
    // const [listOfRestro, setListOfRestro] = arr;
    // const listOfRestro = arr[0];
    // const setListOfRestro = arr[1];

    // Normal JS Variable 
    // let listOfRestro = [];
    return (
        <div className="body">
            <div className="Interract">
            <div className="search">Searching Restro...</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestro = listOfRestro.filter((res) => res.info.avgRating > 4);
                    setListOfRestro(filteredRestro);
                }}>Top Rated</button>
            </div>
            </div>
            <div className="res-container">
                {/* 
                Restro Card Component:
                1. Using Map Function - Show all restaurant data. & always give a unique key, 
                   it will optimise the render process & never use indexes as key(Not using key is not acceptable)
                2. Not using keys (not acceptable) <<<< index as a keys <<<<<< unique id(best practicess) 
                */}
                {
                    listOfRestro.map((restaurant) => (
                        <RestroCard key = {restaurant?.info?.id} resData = {restaurant} />
                    ))
                }
            </div>

        </div>
    );
};

export default Body;
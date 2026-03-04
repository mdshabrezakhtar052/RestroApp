import RestroCard from "./RestroCard";
// import restroList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // Local State Variable - super powerful variable
    //    const [listOfRestro, setListOfRestro] = useState(restroList);
    
       const [listOfRestro, setListOfRestro] = useState([]);
       const [filteredRestro, setFilteredRestro] = useState([]);

       const [searchText, setSearchText] = useState("");

       // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
       console.log("Body Rendered");
       useEffect(() => {
        fetchData();
       },[]);

       const fetchData = async() => {
        
        // Namaste React API
        const data = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants");

        //Swiggy Live API
        // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.2291528&lng=85.51101039999999&carousel=true&third_party_vendor=1");
        const json = await data.json();

        console.log(json);

        // Namaste React API Use Optional chaining to handling the data 
        const restaurantData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // Swiggy API optional chaining to handling the data
        // const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // It will get data from live API not from mock data
        // Way 1: Actual live swiggy api
        // setListOfRestro(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // Way 2: Use Namaste React Live api
        setListOfRestro(restaurantData || []);
        setFilteredRestro(restaurantData || []);
    }

    // Normal JS Variable 
    // let listOfRestro = [];

    // Loading when API is loaded
    // if(listOfRestro.length === 0) {
    //     return <Shimmer />;
    // }
    return (
        <div className="body">
            <div className="Interract">
            <div className="search">
                <input type="text" className="search-box"
                value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button className="search-btn"
                onClick={() => {
                    // Filter the restro cards and update the UI
                    // searchText
                    console.log(searchText);
                    const filteredRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestro(filteredRestro);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestro = listOfRestro.filter((res) => res.info.avgRating > 4.2);
                    setFilteredRestro(filteredRestro);
                    console.log(filteredRestro);
                }}>Top Rated</button>
            </div>
            </div>
            {/* Conditional Rendering */}
            {
                listOfRestro.length === 0 ? (
                    <Shimmer />
                ) : (
                    <div className="res-container">
                    {
                        filteredRestro.map((restaurant) => (
                           <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestroCard resData = {restaurant} /></Link> 
                        ))
                    }
                </div>
                )
            }

        </div>
    );
};

export default Body;
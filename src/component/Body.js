import RestroCard from "./RestroCard";
// import restroList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {

    // Local State Variable - super powerful variable
    //    const [listOfRestro, setListOfRestro] = useState(restroList);
    
       const [listOfRestro, setListOfRestro] = useState([]);
       const [filteredRestro, setFilteredRestro] = useState([]);

       const [searchText, setSearchText] = useState("");
       const onlineStatus = useOnlineStatus();
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

    if(onlineStatus === false)
        return(
     <h1 className="text-center text-xl font-semibold mt-10">Looks like you're offline! Please check your internet connection</h1>
     )

    // Loading when API is loaded
    if(listOfRestro.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body px-10 py-6">
            <div className="Interract flex justify-between items-center mb-6">
            <div className="search flex items-center gap-3">
                <input type="text" className="search-box x-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button className="search-btn px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition cursor-pointer"
                onClick={() => {
                    // Filter the restro cards and update the UI
                    // searchText
                    console.log(searchText);
                    const filteredRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestro(filteredRestro);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition cursor-pointer" onClick={() => {
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
                    <div className="res-container flex flex-wrap justify-center">
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
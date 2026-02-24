import React, {useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";
const Body = () =>{
    //Local State Variable
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]); //original data received from api maintained here, not modified
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); //to enable search for next times without refreshing

    //Whenever state variables update , react triggers a reconciliation cycle(re-renders the component)
    console.log("Body of Restaurants");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log(json);
        //rerendering happens here
        const restaurantData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // Set the state
        setListOfRestaurants(restaurantData || []);
        setFilteredRestaurant(restaurantData || []);
    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline!Please check your internet connection.</h1>

    //Conditional Rendering
    //TO HANDLE EMPTY SCREEN before api data rendered (approach 2)
    /*if(listOfRestaurants.length === 0 ){
        return <h1>Loading...</h1> OR ,
        return <Shimmer />; //modern practice to handle the same - Shimmer UI
    }
    */

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        //Filter the restaurant cards and update the UI
                        //search Text
                      const filteredRestaurant =  listOfRestaurants.filter(
                          (res)=>res.info.name.toLowerCase().includes(searchText)
                          );  //to make the search case insen. add to lower case
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                {/*config driven UI as cards are being generated using data in resList*/}
                {/*if resList somehow modified , ui cards being displayed will change*/}
                <button className="filter-btn" onClick={() => {
                    //Filter logic here
                  const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                  setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/*Restaurant Card*/}
                {/*not using keys (not acceptable) <<<< index as key <<<<< unique id(best practice) , key should be inside parent tag*/}
                { filteredRestaurant.map((res) => (
                   <Link  key={res?.info?.id} to={"/restaurants/" + res?.info?.id}> <RestaurantCard resData={res?.info} /></Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;
import React, {useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
// import resList from "../utils/mockData";
const Body = () =>{
    //Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    //useEffect hook
    useEffect(() => {
       fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        //rerendering happens here
        const restaurantData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // Set the state
        setListOfRestaurants(restaurantData || []);
    }
    //TO HANDLE EMPTY SCREEN before api data rendered
    if(listOfRestaurants.length === 0 ){
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className="filter">
                {/*config driven UI as cards are being generated using data in resList*/}
                {/*if resList somehow modified , ui cards being displayed will change*/}
                <button className="filter-btn" onClick={() => {
                    //Filter logic here
                  const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                  setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/*Restaurant Card*/}
                {/*not using keys (not acceptable) <<<< index as key <<<<< unique id(best practice)*/}
                { listOfRestaurants.map((res) => (
                    <RestaurantCard key={res?.info?.id} resData={res?.info} />
                ))
                }
            </div>
        </div>
    )
}
export default Body;
import React from "react";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";
const Body = () =>{
    //Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                {/*config driven UI as cards are being generated using data in resList*/}
                {/*if resList somehow modified , ui cards being displayed will change*/}
                <button className="filter-btn" onClick={() => {
                    //Filter logic here
                  const filteredList=listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                  setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/*Restaurant Card*/}
                {/*not using keys (not acceptable) <<<< index as key <<<<< unique id(best practice)*/}
                { listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))
                }
            </div>
        </div>
    )
}
export default Body;
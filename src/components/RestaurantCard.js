import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props; //destructuring of object - javascript , not React
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData;
    return(
        /* style={{backgroundColor: "#f0f0f0"}}*/
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400" >
            <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo"/>
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h4>{cuisines?.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo }</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
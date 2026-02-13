import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props; //destructuring of object - javascript , not React
    const {name,cuisines,avgRating,costForTwo,sla} = resData;
    return(
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img className="res-logo" src={CDN_URL + (resData.id)} alt="res-logo"/>
            <h4>{name}</h4>
            <h4>{cuisines?.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo }</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
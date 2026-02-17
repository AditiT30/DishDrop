import React from 'react';
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API_URL} from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo , setResInfo] = useState([]);

    // const params = useParams();
    //console.log(params); - object with resId , so destructure it

    const {resId} = useParams(); //extract resId from the url and append it in the fetch api link

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }
    if (resInfo === null) return <Shimmer />;
    const { name , cuisines , costForTwoMessage }  = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const { itemCards  }  = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines?.join(",") } - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li id={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
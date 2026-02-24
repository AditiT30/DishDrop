import React from 'react';
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const params = useParams();
    //console.log(params); - object with resId , so destructure it

    const {resId} = useParams(); //extract resId from the url and append it in the fetch api link
/*
FETCH data logic using useState & useEffect - replaced with custom Hook to ++ modularity of component

  const [resInfo , setResInfo] = useState([]);
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }
 */
    const resInfo = useRestaurantMenu(resId); //CUSTOM HOOK , RestaurantMenu doesn't need to manage its own state


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
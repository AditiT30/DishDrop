import React from 'react';
import { useState, useEffect } from 'react';
const logoURL = new URL('./images/logo.png', import.meta.url);
/**
 * Header
 * ---Logo
 * ---Nav Items
 * Body
 * ---Search
 * ---RestaurantContainer
 * ------RestaurantCard
 * ------------Img
 * ------------Name of Res. , Star Rating , cuisine , delivery time
 * Footer
 * ---Copyright
 * ---Links
 * ---Address
 * ---Contact
 */

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className={"logo"} src={logoURL.href} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

/* const styleCard = {
    backgroundColor: "#f0f0f0",
 } */
//


const resList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "76",
            name: "Pizza Paradise",
            cloudinaryImageId: "rng/md/carousel/production/pizza123",
            locality: "MG Road",
            areaName: "Central District",
            costForTwo: 40000,
            cuisines: ["Pizza", "Italian", "Fast Food"],
            avgRating: 4.3,
            avgRatingString: "4.3",
            totalRatingsString: "10K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 30,
                lastMileTravel: 3.5,
                slaString: "30 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "703",
            name: "The Green Bowl",
            cloudinaryImageId: "rng/md/carousel/production/salad99",
            locality: "Koramangala",
            areaName: "South Zone",
            costForTwo: 60000,
            cuisines: ["Healthy Food", "Salads", "Juices"],
            avgRating: 4.6,
            avgRatingString: "4.6",
            totalRatingsString: "1K+ ratings",
            veg: true,
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2.1,
                slaString: "25 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "ABOVE ₹400",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "205",
            name: "Royal Biryani House",
            cloudinaryImageId: "rng/md/carousel/production/biryani45",
            locality: "Indiranagar",
            areaName: "East District",
            costForTwo: 55000,
            cuisines: ["Biryani", "Hyderabadi", "Main Course"],
            avgRating: 4.1,
            avgRatingString: "4.1",
            totalRatingsString: "5K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 45,
                lastMileTravel: 5.2,
                slaString: "45 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹500",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "308",
            name: "Sushi Zen",
            cloudinaryImageId: "rng/md/carousel/production/sushi77",
            locality: "Whitefield",
            areaName: "Tech Hub",
            costForTwo: 120000,
            cuisines: ["Japanese", "Sushi", "Asian"],
            avgRating: 4.8,
            avgRatingString: "4.8",
            totalRatingsString: "500+ ratings",
            veg: false,
            sla: {
                deliveryTime: 55,
                lastMileTravel: 8.4,
                slaString: "55 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "FREE ITEM",
                subHeader: "ON ORDERS ABOVE ₹1000",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "412",
            name: "The Breakfast Club",
            cloudinaryImageId: "rng/md/carousel/production/pancake12",
            locality: "Jayanagar",
            areaName: "South District",
            costForTwo: 35000,
            cuisines: ["American", "Beverages", "Desserts"],
            avgRating: 4.4,
            avgRatingString: "4.4",
            totalRatingsString: "2K+ ratings",
            veg: true,
            sla: {
                deliveryTime: 20,
                lastMileTravel: 1.5,
                slaString: "20 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "BUY 1 GET 1",
                subHeader: "ON SELECT ITEMS",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "500",
            name: "Mexicano Grill",
            cloudinaryImageId: "rng/md/carousel/production/taco66",
            locality: "HSR Layout",
            areaName: "South Zone",
            costForTwo: 45000,
            cuisines: ["Mexican", "Tex-Mex", "Beverages"],
            avgRating: 4.2,
            avgRatingString: "4.2",
            totalRatingsString: "500+ ratings",
            veg: false,
            sla: {
                deliveryTime: 32,
                lastMileTravel: 4.2,
                slaString: "32 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "602",
            name: "The Wok Station",
            cloudinaryImageId: "rng/md/carousel/production/noodles44",
            locality: "Electronic City",
            areaName: "Tech Park",
            costForTwo: 50000,
            cuisines: ["Chinese", "Asian", "Pan-Asian"],
            avgRating: 4.0,
            avgRatingString: "4.0",
            totalRatingsString: "2K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 38,
                lastMileTravel: 6.5,
                slaString: "38 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS AT ₹159",
                subHeader: "SPECIAL DEAL",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "699",
            name: "South Coast Curry",
            cloudinaryImageId: "rng/md/carousel/production/fish77",
            locality: "Malleshwaram",
            areaName: "West Zone",
            costForTwo: 70000,
            cuisines: ["South Indian", "Seafood", "Kerala"],
            avgRating: 4.5,
            avgRatingString: "4.5",
            totalRatingsString: "1K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 40,
                lastMileTravel: 5.0,
                slaString: "40 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "ABOVE ₹600",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "745",
            name: "Pure Veg Delight",
            cloudinaryImageId: "rng/md/carousel/production/thali11",
            locality: "Basavanagudi",
            areaName: "South District",
            costForTwo: 30000,
            cuisines: ["North Indian", "Thalis", "Rajasthani"],
            avgRating: 4.4,
            avgRatingString: "4.4",
            totalRatingsString: "10K+ ratings",
            veg: true,
            sla: {
                deliveryTime: 28,
                lastMileTravel: 2.8,
                slaString: "28 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "FLAT ₹100 OFF",
                subHeader: "ON FIRST ORDER",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "689",
            name: "Sweet Tooth Patisserie",
            cloudinaryImageId: "rng/md/carousel/production/cake22",
            locality: "Frazer Town",
            areaName: "Central District",
            costForTwo: 25000,
            cuisines: ["Bakery", "Desserts", "Ice Cream"],
            avgRating: 4.7,
            avgRatingString: "4.7",
            totalRatingsString: "800+ ratings",
            veg: true,
            sla: {
                deliveryTime: 15,
                lastMileTravel: 1.2,
                slaString: "15 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "FREE DELIVERY",
                subHeader: "NO MINIMUM",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "1006",
            name: "Burger Baron",
            cloudinaryImageId: "rng/md/carousel/production/burger99",
            locality: "BTM Layout",
            areaName: "South Zone",
            costForTwo: 45000,
            cuisines: ["American", "Burgers", "Fast Food"],
            avgRating: 3.9,
            avgRatingString: "3.9",
            totalRatingsString: "3K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.1,
                slaString: "25 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "1107",
            name: "The Lebanon Grill",
            cloudinaryImageId: "rng/md/carousel/production/kebab33",
            locality: "Kalyan Nagar",
            areaName: "North Zone",
            costForTwo: 65000,
            cuisines: ["Middle Eastern", "Lebanese", "Healthy Food"],
            avgRating: 4.3,
            avgRatingString: "4.3",
            totalRatingsString: "1K+ ratings",
            veg: false,
            sla: {
                deliveryTime: 35,
                lastMileTravel: 4.8,
                slaString: "35 mins",
            },
            aggregatedDiscountInfoV3: {
                header: "₹50 OFF",
                subHeader: "ABOVE ₹300",
            }
        }
    }
];



const RestaurantCard = (props) =>{
    const {resData} = props; //destructuring of object - javascript , not React
    const {name,cuisines,avgRating,costForTwo,sla} = resData?.data;
    return(
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img className="res-logo" src={"https://loremflickr.com/320/240/food?lock=" + (resData.data.id)} alt="res-logo"/>
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/*Restaurant Card*/}
                {/*not using keys (not acceptable) <<<< index as key <<<<< unique id(best practice)*/}
                { resList.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))
                }
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {/*Header*/}
            <Header/>
            <Body/>
        </div>
    )
}
export default App;
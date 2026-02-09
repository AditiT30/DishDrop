import React from 'react';
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

const RestaurantCard = (props) =>{
    const {resName , cuisine } = props; //destructuring of object - javascript , not React
    return(
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/3cebe2a7-d60f-4a63-a26d-ed2cdd677849_9a947f17-57dd-45e6-8bbb-9b30f5e171a2.jpg" alt="res-logo"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/*Restaurant Card*/}
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
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
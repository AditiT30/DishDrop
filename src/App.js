import React from 'react';
import Header from './components/Header'; //even if we write './components/Header.js' it still works
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; - now imported using lazy()
import {lazy,Suspense} from "react";
/* const styleCard = {
    backgroundColor: "#f0f0f0",
 } */
//

//import(path) is function not same as above import
const Grocery = lazy(() => import("./components/Grocery"));

//hard coded data , URL OR LINKS NEVER kept in component file , KEPT in separate file

const App = () => {
    return (
        <div className="App">
            {/*Header*/}
            <Header/>
            {/* if path= / => <Body/> */}
            {/* if path= /about => <About/> */}
            {/* if path= /contact => <Contact/> */}
            <Outlet/>
        </div>
    )
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId", //resId - dynamic -  then , to extract it use useParams
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
   /*
   or add paths as separate objects instead of children routes
   { //IF PATH IS /about , LOAD element
        path: "/about",
        element:<About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
    */
])

export default App;
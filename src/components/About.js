import UserClass from "./UserClass";
import React from "react";

//or extends Component & import { Component } from "react".
class About extends React.Component {

    constructor(props){
        super(props)
        // console.log("Parent Constructor");
    }

    async componentDidMount(){
        // console.log("Parent componentDidMount");
        //api calls
    }

    render () {
        console.log("Render");
        return(
        <>
            <h2>About</h2>
            <h2>This is Food ORDERING APP.</h2>
            <UserClass name="Aditi (class)" location={"Noida"} contact={"@AditiT30"}/>
            {/*<UserClass name="Elon Musk (class)" location={"Silicon Valley"} contact={"@ElonMusk1"}/>*/}
        </>
      )
    }
}
export default About;

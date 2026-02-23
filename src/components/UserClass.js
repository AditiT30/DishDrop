import React, {useState} from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props); //mandatory to use
        this.state = {
            userInfo:{ //setting default values of state variables
                name: "Dummy",
                location: "Default",
                avatar_url:"https://dummy-photo.com"
            }
        }
      // console.log(this.props.name + "Child Constructor") ;
    }

    async componentDidMount() {
        // console.log(this.props.name + " Child Component componentDidMount");
        //api calls
            const data = await fetch("https://api.github.com/users/AditiT30");
            const json = await data.json();
            this.setState({
                userInfo: json,
            })
            console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render(){
        const { contact } = this.props;
        const {name,location,avatar_url} = this.state.userInfo;
        // debugger;
        //either destructure or , use {this.props.name}
        // console.log(this.props.name + " Child Render")
        return (
            <div className="user-card">
                {/*<h1>Count: {count}</h1>*/}
                {/*<button onClick={()=>{*/}
                {/*        //NEVER UPDATE STATE VARIABLES DIRECTLY*/}
                {/*        this.setState({count:  this.state.count+1,})}}>Count Increase</button>*/}
                <img alt={name} src={avatar_url}/>
                <h2>{name} </h2>
                <h3>{location}</h3>
                <h3>{contact} </h3>
            </div>
        )
    }
}
export default UserClass;


/*
const User = ({name}) =>{
    const [count,setCount]=useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name} </h2>
            <h3>Location: Noida</h3>
            <h3>Contact: @AditiT30 </h3>
        </div>
    );
};
export default User;

*/
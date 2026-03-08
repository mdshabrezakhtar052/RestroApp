import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

// import { Component } from "react"; - We can write {class About extends Component}instead of React.Component

// Functional compoenent
// const About = () => {
//     return (
//         <div className="about-us">
//             <h1>Hi This is my about us page</h1>
//             {/* <User name={"Shabrez (Function)"}/> */}
//             <UserClass name={"Shabrez (Class)"}/>
//         </div>
//     )
// }

// Class Based Component
class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent ComponentDidMount Called");
    }

    render(){
        // console.log("Parent Render");
        return (
            <div>
                <h1>Hi This is my about us page</h1>
                <UserClass name={"1_Shabrez (Class)"}/>
                {/* <UserClass name={"2_Sameer  (Class)"}/> */}
            </div>
        );
    }
}

export default About;

// Child Parent Relations Component Life Cycle Works:
/*
 Parent Constructor Called -> Parent Render Called 
 -> Child Constructor Called -> Child Render Called 
 -> Child componentDidMount Called -> Parent componentDidMount Called
*/
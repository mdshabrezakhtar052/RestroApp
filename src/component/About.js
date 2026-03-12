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
            <div className="max-w-5xl mx-auto px-6 py-10">
                <div className="bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                   About Us
                </h1>

                <p className="text-gray-600 mb-6">
                    Welcome to our food ordering platform. We help you discover the
                    best restaurants around you and enjoy delicious meals delivered
                    to your doorstep.
                </p> 
               <div className="border-t pt-6"> 
               <UserClass name={"1_Shabrez (Class)"}/>
               {/* <UserClass name={"2_Sameer  (Class)"}/> */}
               </div>
                
                
                </div>
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
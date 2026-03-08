import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        // We created state variable
        this.state = {
            // count: 0,
            // count1:1,
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };

        // console.log(this.props.name + "Child Constructor called");
    }

    // Similar to useEffect - We make an api calls inside componentDidMount & Why we make inside componentDidMount to just quickly render my component then call API
    async componentDidMount(){
        // console.log(this.props.name + "Child ComponentDidMount Called");

        // API Calls
        const data = await fetch("https://api.github.com/users/Shabrez575");
        const json = await data.json();

        // Update state variable with data
        this.setState({
            userInfo: json,
        })

        console.log(json);

    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        // const {count, count1} = this.state;

        // console.log(this.props.name + "Child Render Called");

        const {name, location, login, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">

            <img src={avatar_url}/>
                
            {/* <h4>Count : {count}</h4> */}
            <button onClick={() => {
                // NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                    // count: this.state.count + 1,
                    // count2: this.state.count2 + 1,
                })
            }}>Count++</button>
            {/* <h4>Emp Num: {count1}</h4> */}
            {/* Below is update component with the updated data */}
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
            <h4>Github ID: {login}</h4>
        </div>
        )
    }
};

export default UserClass;

// Life Cycle:
// Child Constructor Called -> Child Render Called -> Child ComponentDidMount

/*
Parent Constructor
Parent Render

Child Constructor (Shabrez)
Child Render (Shabrez)

Child Constructor (Sameer)
Child Render (Sameer)

Child ComponentDidMount (Shabrez)
Child ComponentDidMount (Sameer)

Parent ComponentDidMount
*/

// MOUNTING

/*
CONSTRUCTOR (DUMMY)
RENDER (DUMMY)
    <HTML DUMMY>

COMPONENT DID MOUNT
    <API CALL>
    <this.setState> -> State variable is updated
     
--- Update -----

    render(API data)
    <HTML (new APi data)>

componentDid update
    
*/
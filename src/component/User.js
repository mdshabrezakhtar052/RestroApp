import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(() => {
        // API Calls
    }, []);

    return (
        <div className="user-card">
            <h3>id: {count}</h3>
            <h4>Emp Num: {count1}</h4>
            <h4>Name: Md {name} Akhtar</h4>
            <h4>Location: Biharsharif</h4>
            <h4>Contact: @Shabrez551999</h4>
        </div>
    );
};

export default User;
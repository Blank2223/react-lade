import React, {useState,useEffect} from "react";
import Card from "./card"
import Axios from "axios";

const App = () => {
    const [userData,setUserData] = useState({});
    const fetchDetails = async () =>{
        const {data} = await Axios.get("https://randomuser.me/api/");
        console.log("Response:", data);
        const details = data.results[0];
        setUserData(details);
    };

    useEffect(() => {
        fetchDetails();
    },[]);

    return (
        <div>
            <Card details={userData} />
        </div>
    );
};

export default App;
import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from './Card';
import "./Card.css";


const App = () => {
  
  const [userData, setUserData] = useState({});
  const fetchDetails = async() =>{
    const {data} = await axios.get("https://randomuser.me/api");
    console.log("Response", data);
    const details = data.results[0];
    setUserData(details);
  };

  useEffect(() => {
    fetchDetails();
  },[ ]);

  
  return(
    <>
        <Card details={userData} />
    </>
  );
};

export default App;
import React, {useState} from "react";
import Form from './form/Form';
import Login from "./login/Login";
//import DarkMode from "./Theme/DarkMode";
import './App.css';

const Welcome = () =>{

    const [showLogin , setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLogin = () =>{
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignup = () =>{
        setShowSignup(true);
        setShowLogin(false);
    };

    return(
        <div className="container">
            <h1>welcome to ReactFluxAuth</h1>
    
            <p>Nice Project to increase my skills and everything 
                   but dont know if it will work!.</p>
    
                {showSignup ? (<Form />) : (<button id="sign"
                className="app_css" 
                onClick={handleSignup}
                >Signup</button>)}
                   
                {showLogin ?( <Login />) :( <button id="Enter"
                className="app_css" 
                onClick={handleLogin}
                >Login</button>)}
                   
        </div>
    );
};

export default Welcome;
import React, {useState} from "react";
import Form from './form/Form';
import Login from "./login/Login";
import Welcome from "./Welcome";
import "./App.css";

const App = () =>{
    const [activeComponent, setActiveComponent] = useState('welcome');

    const handleLogin = () =>{
        setActiveComponent('login');
    };

    const handleSignup = () =>{
        setActiveComponent('signup');
    };

    let componentToDisplay = null;


  if(activeComponent === 'welcome'){
    componentToDisplay = <Welcome 
    handleLogin={handleLogin} 
    handleSignup={handleSignup} />;
  }else if(activeComponent === 'login'){
    componentToDisplay = <Login />;
  }else if(activeComponent === 'signup'){
    componentToDisplay = <Form />;
  }

  return (
    <div>
        {componentToDisplay}
    </div>
  );
};

export default App;
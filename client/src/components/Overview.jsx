import React, { useState } from "react";
import "./overview.css";
import folder from "../images/folder.png";
import Profile from "./Profile";
import Home from "./Home";
import Settings from "./Settings";

function Overview() {

    const [showProfile, setShowProfile] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showSettings, setShowSettings] = useState(false);


    const handleProfileClick = () =>{
        setShowProfile(!showProfile)
        setShowHome(false)
        setShowSettings(false)
    }
    const handleSettingsClick = () =>{
        setShowProfile(false);
        setShowHome(false);
        setShowSettings(!showSettings);
    }
    const handleHomeClick = () =>{
        setShowProfile(false);
        setShowHome(!showHome);
        setShowSettings(false);
    }


  return (
    <body>
      <div className="items">
       <div className="menu" onClick={handleHomeClick} >
       <p>Home</p>
       </div>
        <div className="menu" onClick={handleProfileClick} >
        <p>Profile</p>

        </div>
        <div className="menu" onClick={handleSettingsClick} >
        <p>Settings</p>

        </div>
        <div className="menu">
        <p>Logout</p>

        </div>
      </div>


      <div className="overview">
     {showProfile && <Profile></Profile>}
     {showHome && <Home></Home>}
     {showSettings && <Settings></Settings>}

      </div>

    </body>
  );
}

export default Overview;

import React from 'react'
import profile from "../images/boy.png";
import streak from "../images/streak.png";
import folder from "../images/folder.png"
import file from "../images/filefold.png"
import "./overview.css"


function Profile() {
  return (
    <div className='profile-page' >
        <h1>Profile</h1>
        <div className="profile-img">
            <img src={profile} alt="" />
            <p>edit profile</p>
        </div>
        <div className="current-streak">
            <img src={streak} alt="" />
            <p>current streak</p>
        </div>
        <div className="current-folders">
            <img src={folder} alt="" />
            <p>current folders</p>
        </div>
        <div className="current-files">
            <img src={file} alt="" />
            <p>current files</p>
        </div>
    </div>
  )
}

export default Profile
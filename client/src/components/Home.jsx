import React from "react";
import folder from "../images/folder.png";
import "./home.css";



function Home() {
  return (
    <div className="homepage">
      <nav>
        <h3>Logo</h3>
        <div className="nav-left">
          <p>stats</p>
          <p>streak</p>
          <p>User profile</p>
        </div>
      </nav>

      <h1>Fun Folders</h1>
      <div className="folders">
        <div className="subs">
          <img src={folder} alt="" />
          <p>fair subs</p>
        </div>
        <div className="subs">
          <img src={folder} alt="" />
          <p>Other subs</p>
        </div>
        <div className="subs">
          <img src={folder} alt="" />
          <p>another sub</p>
        </div>
        <div className="subs">
          <img src={folder} alt="" />
          <p>worst performed</p>
        </div>
      </div>
      <div className="add-button">
      <button>Add new Folder</button>

      </div>

    </div>
  );
}

export default Home;

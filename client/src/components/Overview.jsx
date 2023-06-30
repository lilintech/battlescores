import React from "react";
import "./overview.css";
import folder from "../images/folder.png";

function Overview() {
  return (
    <body>
      <div class="items">
       <div className="menu">
       <p>Home</p>
        <hr style={{width: "100%" }}  />
       </div>
        <div className="menu">
        <p>profile</p>

        </div>
        <div className="menu">
        <p>settings</p>

        </div>
        <div className="menu">
        <p>logout</p>

        </div>
      </div>
      

      <div className="overview">
      <div class="foldername">
        <img src={folder} alt="folder" />
      </div>
      <div class="overviewbtn">
        <a href="another_page.html" class="button">
          Go to Another Page
        </a>
      </div>
      </div>
     
    </body>
  );
}

export default Overview;

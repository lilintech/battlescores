import React, { useState } from "react";
import folder from "../images/folder1.png";
import file from "../images/filefold.png";
import "./overview.css";
import FolderItem from "./FolderItems";
import Score from "./Score";

function Category({ categoryTitle }) {
  const [showScoreOverview, setShowScoreOverview] = useState(false);
  const [showSubpage, setShowSubpage] = useState(true);

  const handleOverviewClick = () => {
    setShowScoreOverview(true);
    setShowSubpage(false);
  };

  const handleBackClick = () => {
    setShowScoreOverview(false);
  };

  return (
    <div className="category-main">
      {showSubpage ? (
        <React.Fragment>
          <div className="category-content">
            <div className="category-left">
              <div className="category-top">
                <img src={folder} alt="" />
                <h3>{categoryTitle}</h3>
              </div>

              <div className="image-category">
                <img src={file} alt="" />
                <p>sub 1</p>
              </div>
              <div className="image-category">
                <img src={file} alt="" />
                <p>sub 2</p>
              </div>
              <div className="image-category">
                <img src={file} alt="" />
                <p>sub 3</p>
              </div>
            </div>

            <div className="category-right">
              <button onClick={handleOverviewClick}>Score Overview</button>
              <button>Current Total Score</button>
            </div>
          </div>
        </React.Fragment>
      ) : null}
      {showScoreOverview ? (
        <div className="overview">
          <Score></Score>
        </div>
      ) : null}
    </div>
  );
}

export default Category;

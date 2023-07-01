import React, { useState } from "react";
import folder from "../images/folder1.png";
import "./home.css";
import Category from "./Category";
import "./overview.css";
import FolderItem from "./FolderItems";

function Home() {
  const [showCategoryFiles, setShowCategoryFiles] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showHomepage, setShowHomepage] = useState(true);

  const handleCategoryFilesClick = (title) => {
    setSelectedCategory(title);
    setShowHomepage(false);
    setShowCategoryFiles(true);
  };

  const handleBackToHomeClick = () => {
    setShowHomepage(true);
    setShowCategoryFiles(false);
  };

  return (
    <div className="homepage">
      {showHomepage ? (
        <React.Fragment>
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
            <FolderItem
              imageSrc={folder}
              title="fire nation"
              onClick={() => handleCategoryFilesClick("fire nation")}
            />
            <FolderItem
              imageSrc={folder}
              title="water nation"
              onClick={() => handleCategoryFilesClick("water nation")}
            />
            <FolderItem
              imageSrc={folder}
              title="air nation"
              onClick={() => handleCategoryFilesClick("air nation")}
            />
            <FolderItem
              imageSrc={folder}
              title="earth nation"
              onClick={() => handleCategoryFilesClick("earth nation")}
            />
          </div>
          <div className="add-button">
            <button>Add new Folder</button>
          </div>
        </React.Fragment>
      ) : null}
      {showCategoryFiles ? (
        <div className="overview">
          <Category categoryTitle={selectedCategory} />
          <button onClick={handleBackToHomeClick}>Back to Home</button>
        </div>
      ) : null}
    </div>
  );
}

export default Home;

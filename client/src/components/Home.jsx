import React, { useState } from "react";
import folder from "../images/folder.png";
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
              title="fair subs"
              onClick={() => handleCategoryFilesClick("fair subs")}
            />
            <FolderItem
              imageSrc={folder}
              title="Other subs"
              onClick={() => handleCategoryFilesClick("Other subs")}
            />
            <FolderItem
              imageSrc={folder}
              title="another sub"
              onClick={() => handleCategoryFilesClick("another sub")}
            />
            <FolderItem
              imageSrc={folder}
              title="worst performed"
              onClick={() => handleCategoryFilesClick("worst performed")}
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

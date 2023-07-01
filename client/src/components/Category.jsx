import React from "react";
import folder from "../images/folder.png";
import file from "../images/filefold.png"
import "./overview.css"
import FolderItem from "./FolderItems";




function Category({categoryTitle}) {
    
  return (
    <div className="category-main">
      <div className="category-left">
      <div className="category-top">
        <img src={folder} alt="" />
        <h3> {categoryTitle} </h3>
      </div>

      <div className="image-category">
        <img src={file} alt="" />
        <p>sub 1</p>
      </div>
      <div className="image-category">
        <img src={file} alt="" />
        <p>sub 1</p>
      </div>
      <div className="image-category">
        <img src={file} alt="" />
        <p>sub 1</p>
      </div>

      </div>

      <div className="category-right">
        <button>Score Overview</button>
        <button>Current Total Score</button>
      </div>
    </div>
  );
}

export default Category;

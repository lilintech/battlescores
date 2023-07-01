import React from "react";

function FolderItem({ imageSrc, title, onClick }) {
  return (
    <div className="subs" onClick={onClick} >
      <img src={imageSrc} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default FolderItem;

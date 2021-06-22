import React from "react";

import BooksCover from "../../images/books-cover.jpeg";

import "./MainImage.css";

const MainImage = () => {
  return (
    <div className="main-image">
      <img src={BooksCover} alt="books-cover" />
    </div>
  );
};

export default MainImage;

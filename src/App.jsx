import React from "react";

import TopBar from "./components/TopBar";
import MainImage from "./components/MainImage";
import IntroductionCard from "./components/IntroductionCard";
import BookList from "./components/BookList";

import "./App.css";

import booksDemo from "./data/books-demo";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <MainImage />
      <IntroductionCard />
      <BookList books={booksDemo} />
    </div>
  );
};

export default App;

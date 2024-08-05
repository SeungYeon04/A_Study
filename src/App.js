import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './post/PagePost';  // 기존 Post.js를 PagePost.js로 변경
import Read from './post/PageLoad';
import Category from './post/PageCategory';
import './App.css';
import './indexh.css';
import './indexh.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App"> 
      <Routes>
        <Route path="/A_Study/" element={<Home setSelectedCategory={setSelectedCategory} />} />
        <Route path="/A_Study/blog/" element={<Category setSelectedCategory={setSelectedCategory} />} />
        <Route path="/A_Study/:categoryName" element={<Post selectedCategory={selectedCategory} />} />
        <Route path="/A_Study/:categoryName/:fileName" element={<Read />} />
      </Routes>
    </div>
  );
}

function Home({ setSelectedCategory }) {
  return (
    <div>
      <h1>블로그의 홈 - 나를 소개합니다.</h1>
      <Category setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default App;
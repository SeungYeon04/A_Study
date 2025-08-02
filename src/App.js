import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './post/PagePost';  // 기존 Post.js를 PagePost.js로 변경
import Read from './post/PageLoad';
import Category from './post/PageCategory';
import './App.css';
import './index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App"> 
      <Routes>
      <Route path="/" element={<Home setSelectedCategory={setSelectedCategory} />} />
        
        <Route path="/:categoryName" element={<Post selectedCategory={selectedCategory} />} />
        
        <Route path="/:categoryName/:fileName" element={<Read/>} />
      </Routes>
    </div>
  );
}

function Home({ setSelectedCategory }) {
  return (
    <div>
      <h2>카테고리를 선택하세요</h2>
      <Category setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default App;
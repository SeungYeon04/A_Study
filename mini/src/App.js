import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Post from './post/PagePost';
import Read from './post/PageLoad';

function App() { 
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Post/>}/> 
        <Route path="/blog/:fileName" element={<Read/>}/>
      </Routes> 
    </div>
  ); 
}

function Home() {
  return (
    <div>
      <br></br>
      <h1>블로그의 홈 - 나를 소개합니다.</h1>
      <p>블로그 카테고리 글 선택 전의 홈</p>
      <a>게임개발의 끝을 마치긴 해야 함.</a>
    </div>
  );
}

export default App;

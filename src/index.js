import React from 'react';
import createRoot from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Category from './profile/Category'; // CategorySection 파일 경로에 맞게 수정
import reportWebVitals from './reportWebVitals';

//index.html root 아이디에 App 컴포넌트를 렌더링합니다.
const rootContainer = document.getElementById('root');
if (rootContainer) {
  createRoot.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootContainer
  );
} else {
  console.error('Container element with id "root" not found.');
}

// index.html category 아아디에 Category 추가 (컴포넌트를 렌더링)
const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  createRoot.render(
    <React.StrictMode>
      <BrowserRouter>
      <Category />
      </BrowserRouter>
    </React.StrictMode>,
    categoryContainer
  );
} else {
  console.error('Container element with id "category" not found.');
}

reportWebVitals();

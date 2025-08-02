import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './post/PageCategory';
import Profile from './profile/profileImage';

const removeLoader = () => {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.classList.add("fade-out"); // ✅ 서서히 사라지기 시작
    setTimeout(() => {
      loader.remove(); // ✅ 애니메이션 끝난 뒤 제거
    }, 500); // transition 시간과 일치
  }
};

// DOM 로딩 후 제거 시도
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(removeLoader, 300); // 로딩 효과를 살짝 보여주고 제거
});

// 메인 App
const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

// 카테고리
const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  const categoryRoot = createRoot(categoryContainer);
  categoryRoot.render(
    <Router>
      <Category setSelectedCategory={() => {}} />
    </Router>
  );
}

// 프로필
const profileContainer = document.getElementById('profile');
if (profileContainer) {
  const profileRoot = createRoot(profileContainer);
  profileRoot.render(<Profile />);
}

// ✅ DOM 완전히 로드되면 로딩 화면 제거
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(removeLoader, 400); // 살짝 지연하면 부드러움
});


reportWebVitals();

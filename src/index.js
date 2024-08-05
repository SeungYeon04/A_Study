import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './post/PageCategory';
import Profile from './profile/profileImage';

const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}

const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  const categoryRoot = createRoot(categoryContainer);
  categoryRoot.render(
    <HashRouter>
      <Category setSelectedCategory={() => {}} />
    </HashRouter>
  );
}

const profileContainer = document.getElementById('profile');
if (profileContainer) {
  const profileRoot = createRoot(profileContainer);
  profileRoot.render(
    <Profile />
  );
}

reportWebVitals();

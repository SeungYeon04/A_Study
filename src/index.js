import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './post/PageCategory';
import Profile from './profile/profileImage'; 


const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
      </React.StrictMode>
  );
} 

const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  const categoryRoot = createRoot(categoryContainer);
  categoryRoot.render(
      <Router>
        <Category setSelectedCategory={() => {}}/>
      </Router>

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


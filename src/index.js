import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './post/PageCategory';
import Profile from './profile/profileImage'; 


const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
} 

const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  const categoryRoot = createRoot(categoryContainer);
  categoryRoot.render(
    <React.StrictMode>
      <BrowserRouter>
        <Category setSelectedCategory={() => {}}/>
      </BrowserRouter>
      </React.StrictMode>

  );
} 


const profileContainer = document.getElementById('profile');
if (profileContainer) {
  const profileRoot = createRoot(profileContainer);
  profileRoot.render(
    <BrowserRouter>
    <Profile />

    </BrowserRouter>
  );
} 


reportWebVitals();


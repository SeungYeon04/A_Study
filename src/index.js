import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './post/PageCategory';

const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Container element with id "root" not found.');
}

const categoryContainer = document.getElementById('Box2');
if (categoryContainer) {
  const categoryRoot = createRoot(categoryContainer);
  categoryRoot.render(
    <React.StrictMode>
      <BrowserRouter>
        <Category setSelectedCategory={() => {}} />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Container element with id "Box2" not found.');
}

reportWebVitals();

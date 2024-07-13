import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Read from './post/PageLoad'; 
import Post from './post/PagePost';

function App() {
  return (
    <div className="App">
      아
      <Routes>
        <Route path="/blog/:fileName" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;

// src/post/PageCategory.js
import React from 'react';
import { Link } from 'react-router-dom';
import { markdownFiles } from './FileData'; // 데이터 임포트

const Category = ({ setSelectedCategory }) => {
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setTimeout(() => {
      window.location.reload();  // 페이지 새로고침
    }, 100); // 100ms 후에 새로고침
  };

  return (
    <div>
      {markdownFiles.map((category, index) => (
        <div key={index}>
          {index === 0 && <h3>공부기술</h3>} 
          {index === 4 && <h3>매일기록</h3>} 
          {index === 5 && <h3>대학기록</h3>} 
          
          {category.type === 'folder' && (
              <Link to={`/${category.name}`} 
              onClick={() => handleCategoryClick(category.name)}
              style={{  display: 'block',marginBottom: '10px' }}>
                {category.name}
              </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;

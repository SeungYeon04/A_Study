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
          {index === 0 && <h3>개인언어공부</h3>} 
          {index === 3 && <h3>자격증공부</h3>} 
          {index === 4 && <h3>프로젝트</h3>} 
          {index === 5 && <h3>매일기록</h3>} 
          {index === 6 && <h3>대학공부</h3>} 
          
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

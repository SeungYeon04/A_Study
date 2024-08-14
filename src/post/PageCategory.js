// src/post/PageCategory.js
import React from 'react';
import { Link } from 'react-router-dom';

const markdownFiles = [ 
  {
    name: "CosProC", type: "folder",
    posts: [ 
      { id: 1, name: "가장많이받은선물-lv1", type: "file" },
      { id: 2, name: "C-개구리", type: "file" },
      { id: 3, name: "C-거스름돈", type: "file" },
      { id: 4, name: "C-공항방문객", type: "file" }, 
      { id: 5, name: "C-k번째로작은수", type: "file" }, 
      { id: 6, name: "test", type: "file" } 
    ] 
  }, 
  { 
    name: "리눅스", type: "folder", 
    posts: [
      { id: 0, name: "리눅스핵심정리1", type: "file" }, 
      { id: 0, name: "2020년12월12일", type: "file" },
      { id: 0, name: "2022년09월03일", type: "file" }
    ]
  } 
]; 

const Category = ({ setSelectedCategory }) => {
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setTimeout(() => {
      window.location.reload();  // 페이지 새로고침
    }, 100); // 100ms 후에 새로고침
  };

  return (
    <div> 
    <div>
      {markdownFiles.map((category, index) => (
        category.type === 'folder' && (
          <div key={index}>
            <h3>
              <Link to={`/${category.name}`} onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </Link>
            </h3>
          </div>
        ) 
      ))}
    </div>
    </div>
  );
};

export default Category;

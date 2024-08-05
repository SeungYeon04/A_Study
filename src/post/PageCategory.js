// src/post/PageCategory.js
import React from 'react';
import { Link } from 'react-router-dom';

const markdownFiles = [
  {
    name: "CosProC", type: "folder",
    posts: [
      { id: 1, name: "가장많이받은선물-lv1", type: "file" },
      { id: 2, name: "리눅스", type: "file" }
    ]
  },
  {
    name: "리눅스", type: "folder",
    posts: [
      { id: 3, name: "2020년12월12일", type: "file" },
      { id: 4, name: "2022년09월03일", type: "file" }
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
              <Link to={`/c/${category.name}`} onClick={() => handleCategoryClick(category.name)}>
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

// src/post/PageCategory.js
import React from 'react';
import { Link } from 'react-router-dom';

const markdownFiles = [
  {
    name: "카테고리1", type: "folder",
    posts: [
      { id: 1, name: "대학공부", type: "file" },
      { id: 2, name: "유니티", type: "file" }
    ]
  },
  {
    name: "카테고리2", type: "folder",
    posts: [
      { id: 3, name: "자바스크립트", type: "file" },
      { id: 4, name: "리액트", type: "file" }
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
      {markdownFiles.map((category, index) => (
        category.type === 'folder' && (
          <div key={index}>
            <h3>
              <Link to={`/blog/${category.name}`} onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </Link>
            </h3>
          </div>
        )
      ))}
    </div>
  );
};

export default Category;

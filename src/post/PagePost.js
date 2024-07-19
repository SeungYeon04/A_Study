// src/post/PagePost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

const Post = ({ selectedCategory }) => {
  const { categoryName } = useParams();
  const effectiveCategoryName = selectedCategory || categoryName;
  const selectedCategoryObj = markdownFiles.find(category => category.name === effectiveCategoryName);

  return (
    <div>
      {selectedCategoryObj ? (
        <div>
          <h2>{selectedCategoryObj.name} 포스트 목록</h2>
          {selectedCategoryObj.posts.map(post => (
            <div key={post.id}>
              <Link to={`/blog/${selectedCategoryObj.name}/${post.name}`}>
                <h4>{post.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>카테고리를 선택하세요.</div>
        
      )}
    </div>
  );
  
};

export default Post;

// src/post/PagePost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const markdownFiles = [ 
  {
    name: "CosProC", type: "folder", 
    posts: [
      { id: 1, name: "Giftlv1", type: "file" }, 
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
      { id: 0, name: "2020년12월12일", type: "file" }, 
      { id: 0, name: "2022년09월03일", type: "file" } 
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
              <Link to={`/A_Study/markdown/${selectedCategoryObj.name}/${post.name}`}>
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

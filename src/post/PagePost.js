// src/post/PagePost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
      { id: 3, name: "2-2-리눅스일반-리눅스의이해", type: "file" },
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

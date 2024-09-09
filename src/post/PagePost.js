// src/post/PagePost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { markdownFiles } from './FileData'; // 데이터 임포트

const Post = ({ selectedCategory }) => {
  const { categoryName } = useParams();
  const effectiveCategoryName = selectedCategory || categoryName;
  const selectedCategoryObj = markdownFiles.find(category => category.name === effectiveCategoryName);

  return (
    <div>
      {selectedCategoryObj ? (
        <div>
          <h2>{selectedCategoryObj.name}🩷</h2>
          {selectedCategoryObj.posts.map(post => (
            post.type === "title" ? (
              <h3 key={post.id}>{post.name}</h3>
           ) : (
           <div key={post.id}>
              <Link to={`/${selectedCategoryObj.name}/${post.name}`}>
                <a>{post.name}</a>
                <br></br><br></br>
                
              </Link>
            </div>
          )
          ))}
        </div>
      ) : (
        <div>카테고리를 선택하세요.</div>
      )
      }
    </div>
  );
};

export default Post;

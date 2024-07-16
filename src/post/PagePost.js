import React from "react";
import { Link } from "react-router-dom"; 

export default function Post() {
  const markdownFiles = [
    {
      name: "카테고리1",
      posts: [
        { name: "대학공부", content: "대학 공부에 관한 내용입니다." }, 
        { name: "유니티", content: "유니티 게임 개발에 관한 내용입니다." }
      ]
    },
    {
      name: "카테고리2",
      posts: [
        { name: "자바스크립트", content: "자바스크립트 프로그래밍에 관한 내용입니다." }, 
        { name: "리액트", content: "리액트 프레임워크에 관한 내용입니다." }
      ]
    }
  ];

  return (
    <div>
      <h2>글 목록</h2>
      {markdownFiles.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <div>
            {category.posts.map((post, idx) => (
              <Link key={idx} to={`/blog/${category.name}/${post.name}`}>
                <a>{post.name}</a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


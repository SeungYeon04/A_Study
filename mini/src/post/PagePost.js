import React from "react";
import { Link } from "react-router-dom"; 

export default function Post() {
  const markdownFiles = [
    { name: "글1", content: "내용1" }, 
    { name: "글2", content: "내용2" }
  ]; //여기 자동으로 카테고리, 이름 찾게 할 거임 

  //페이지 데이터 받아서 글자 출력  
  return (
    <div>
        <h2>글</h2>
    <div>
      {markdownFiles.map((file, index) => (
        <Link
          key={index}
          to={`/blog/${file.name}`}
        >
          <h3>{file.name}</h3>
          <p>{file.content}</p> 
        </Link> 
      ))}
    </div>
    </div> 
  );
}

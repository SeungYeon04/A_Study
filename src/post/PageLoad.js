import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "./Read.css"; // 스타일 파일 임포트

const Read = () => {
  const { fileName, categoryName } = useParams();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
  const markdownPath = `markdown/${categoryName}/${fileName}.md`; // 앞에 슬래시 없이
    console.log("요청 경로:", markdownPath); 
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, [fileName, categoryName]);

  return (
    <div className="py-4 px-4">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        className="markdown-body"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Read;

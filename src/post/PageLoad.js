import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import ReactMarkdown from "react-markdown";
import "./Read.css";

const Read = () => {
  const { fileName, categoryName } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const markdownPath = `markdown/${categoryName}/${fileName}.md`;
    console.log("요청 경로:", markdownPath);
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        generateTOC(text);
      });
  }, [fileName, categoryName]);

  const generateTOC = (md) => {
    const lines = md.split("\n");
    const tocItems = [];

    lines.forEach((line) => {
      const h3 = line.match(/^### (.+)/);
      const h4 = line.match(/^#### (.+)/);
      if (h3) tocItems.push({ level: 3, text: h3[1] });
      else if (h4) tocItems.push({ level: 4, text: h4[1] });
    });

    setToc(tocItems);
  };

  // rehype-slug와 동일하게 id 생성
  const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s가-힣-]/g, "")  // 한글·영문·숫자·공백·하이픈만 허용
    .replace(/\s+/g, "-"); 

  return (
    <div className="py-4 px-4 markdown-wrapper">
      {toc.length > 0 && (
        <div className="toc">
          <div className="toc-title">☰ 목차</div>
          <ul>
            {toc.map((item, index) => (
              <li
                key={index}
                className={`toc-item toc-level-${item.level}`}
                onClick={() => {
                  const target = document.getElementById(slugify(item.text));
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                {item.level === 3 ? "-" : "🔥"} {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]} // 🔑 자동 id 부여
        className="markdown-body"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Read;

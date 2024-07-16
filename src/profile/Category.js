import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Post from '../post/PagePost'; 



const Category = () => {
  return (
    <div>
    <br></br>
    <div>
      <h4>대학교 공부정리(B/1-1)</h4>
        <a href="/blog/카테고리1/글1.md">디지털시스템</a><br></br>
        <a href="/blog">컴퓨터네트워크</a><br></br>
        <a href="/blog">리눅스마스터</a><br></br>
        <a href="/blog">C언어</a><br></br>
        <a href="/blog">html + 포토샵</a><br></br>
    </div>
    <div>
      <h4>대학교 공부정리(B/1-1)</h4>
  
        <a href="/blog/카테고리1/글1.md">디지털시스템</a><br></br>
        <a href="/blog">컴퓨터네트워크</a><br></br>
        <a href="/blog">리눅스마스터</a><br></br>
        <a href="/blog">C언어</a><br></br>
        <a href="/blog">html + 포토샵</a><br></br>
    </div>
    <br></br>
    <br></br>
    </div>
  );
};

export default Category;

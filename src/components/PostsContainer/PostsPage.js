//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';


const PostsPage = () => {
  // set up state for your data
  const [postData,] = useState(dummyData);
  console.log(postData)

console.log(postData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
      postData.map(( post, index) => { 
        return <Post post={post} key={post.username} />;})}
    </div>
  );
};

export default PostsPage;

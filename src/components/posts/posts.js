import React from "react";
import Card from "../card/card";

const Posts = ({ posts }) => {

  return (
    <div className="cards">
        {posts.map((post, index) => 
            <Card key={index} post={post}></Card>
        )}
    </div>
  );
};

export default Posts;
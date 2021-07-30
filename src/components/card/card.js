import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  
  return (
    <Link to={`/post/${post.slug}`} className="card">
        <div className="card-thumbnail">
          <img
            src={post.image.url}
            alt={post.image.url}
            height="100"
          />
        </div>
        <div className="card-txt">
          <p className="card-title">
            {post.title}
          </p>
        </div>
    </Link>
  );
};

export default Card;
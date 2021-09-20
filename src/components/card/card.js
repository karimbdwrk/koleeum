import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  
  return (
    
      <div className="card">
        <div className="card-thumbnail">
          <img
            src={post.image.url}
            alt={post.image.url}
          />
        </div>
        <div className="card-txt">
          <h2 className="card-title">
            {post.title}
          </h2>
          <p className="card-description">
            {post.description}
          </p>
          <Link to={`/post/${post.slug}`} className="link">En savoir plus ...</Link>
        </div>
      </div>
  );
};

export default Card;
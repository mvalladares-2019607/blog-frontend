import React from "react";
import './styles.css';

export const Card = ({
  title,
  img,
  description,
  author,
  url,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={img}
          alt={title}
        />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <div className="card-footer">
            <p className="card-author">{author}</p>
            <a
              href={url}
              className="card-link"
            >
              Link repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};




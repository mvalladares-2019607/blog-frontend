import React from "react";

export const Card = ({ data }) => {

  const { title, img, description, author, url } = data;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure><img src={img} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Author: {author}</div>
            <a href={url} className="badge badge-outline">Repository</a>
          </div>
        </div>
      </div>
    </>
  );
};




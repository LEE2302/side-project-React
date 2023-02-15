import React from "react";
import "./Item.css";

const Item = ({ avatarUrl, url, title, author, createdAt }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img className="discussion__avatar--image" src={avatarUrl}></img>
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={url}>{title}</a>
        </h2>
        <div className="discussion__information">
          {author}
          {createdAt}
        </div>
      </div>
      <div className="discussion__answered">
        <p>☑</p>
      </div>
    </li>
  );
};

export default Item;

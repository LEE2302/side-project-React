import React from "react";
import Item from "./Item";

const Content = (props) => {
  return (
    <ul>
      {props.data.map((el) => (
        <Item
          key={el.id}
          avatarUrl={el.avatarUrl}
          url={el.url}
          title={el.title}
          author={el.author}
          createdAt={el.createdAt}
        />
      ))}
    </ul>
  );
};

export default Content;

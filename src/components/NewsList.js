import React from "react";
import New from "./New";

const NewsList = ({news}) => {
  return (
    <div className="row">
      {news.map(i => (
          <New key={i.url} new1={i}></New>
      ))}
    </div>
  );
};

export default NewsList;

import React from "react";
import { Link } from "react-router-dom";

const WidgetTags = () => {
  const tags = [
    "html",
    "css",
    "js",
    "html",
    "css",
    "js",
    "html",
    "css",
    "js",
    "html",
    "css",
    "js",
    "html",
    "css",
    "js",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched Tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag, index) => (
          <Link className="tag-links" key={index}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;

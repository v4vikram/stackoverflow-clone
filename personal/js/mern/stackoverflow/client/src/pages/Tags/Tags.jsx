import React from "react";
import "./tags.css";
import { LeftSidebar } from "../../components";
import TagsList from "./TagsList";

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "css",
      tagDesc: "none",
    },
    {
      id: 2,
      tagName: "html",
      tagDesc: "nothing",
    },
    {
      id: 3,
      tagName: "html",
      tagDesc: "nothing",
    },
    {
      id: 4,
      tagName: "html",
      tagDesc: "nothing",
    },
    {
      id: 5,
      tagName: "html",
      tagDesc: "nothing",
    },
    {
      id: 6,
      tagName: "html",
      tagDesc: "nothing",
    },
    {
      id: 7,
      tagName: "html",
      tagDesc: "nothing",
    },
  ];
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tag.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;

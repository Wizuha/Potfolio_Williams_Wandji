import React from "react";
import "./card.css";

export default function Card(content) {
  return (
    <div className="card">
      <div className="imgcontenair">
        <img src={content.content.img} className="img" />
      </div>
      <div className="language">{content["content"].language}</div>
      <div className="content_description">
        <div className="title">{content["content"].title}</div>
        <div className="description">{content["content"].description}</div>
        <div className="redirection">
            <a target="_blank" href={content["content"].link}>Live ⇋</a>
        </div>
      </div>
    </div>
  );
}

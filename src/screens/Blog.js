import React from "react";
import Card from "../components/UI/Card";

function Blog(props) {
  return (
    <>
      <div className="hero">
        <div className="cards">
          <Card cardData={props.blogData} />
        </div>
      </div>
    </>
  );
}

export default Blog;

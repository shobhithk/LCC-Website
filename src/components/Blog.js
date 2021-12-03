import React from "react";
import Card from "../components/UI/Card";

function Blog(props) {
  return (
    <>
      <div className="cards">
        <Card cardData={props.blogData}/>
      </div>
    </>
  );
}

export default Blog;

import React from "react";
import Card from "./Card";

const Portfolio = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-2 m-4">
      <div className="col">
        <Card/>
      </div>
      <div className="col">
        <Card/>
      </div>
      <div className="col">
        <Card/>
      </div>
      <div className="col">
        <Card/>
      </div>
    </div>
  );
};
export default Portfolio;
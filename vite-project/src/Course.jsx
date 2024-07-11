import React from "react";

const Course = ({ course }) => {
  const { id, Description,title, price, link, image } = course;
  return (
    <div>
      <div className="course">
        <div>
          <img src={image} />
          <h4>{title}</h4>
          <h5>{Description}</h5>
          <h3>{price}</h3>
          <a href={link}>Salam</a>
        </div>
      </div>
    </div>
  );
};

export default Course;

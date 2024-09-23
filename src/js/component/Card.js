import React from "react";

const Card = (props) => {
  return (
    <div className="card h-100 text-center">
      <img
        src="https://www.loch-lomond.co.uk/wp-content/uploads/2015/03/grey-background.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="card-footer">
        <button type="button" class="btn btn-primary">
          Find Out More!
        </button>
      </div>
    </div>
  );
};
export default Card;

import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="container-fluid bg-dark py-4">
        <p className=" text-white text-center fw-lighter fs-6">
          {" "}
          {props.texto}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white bg-dark ms-3" href="#">
            {" "}
            {props.text1}
          </a>
          <div className="collapse navbar-collapse position-absolute top-50 end-0 translate-middle-y me-3">
            <a className="nav-link text-white bg-dark" href="#">
            {" "}
            {props.text2}
            </a>
            <a className="nav-link text-white bg-dark" href="#">
            {" "}
            {props.text3}
            </a>
            <a className="nav-link text-white bg-dark" href="#">
            {" "}
            {props.text4}
            </a>
            <a className="nav-link text-white bg-dark">
            {" "}
            {props.text5}
            </a>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;
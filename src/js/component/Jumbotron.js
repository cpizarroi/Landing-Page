import React from "react";

const Jumbotron=(props) => {
    return(
        <div className="container-fluid">
            <div className="jumbotron bg-light mx-4 my-4 py-5 px-5">
    	        <h1 className="display-4">
				{" "}
          		{props.texto1}
				</h1>

	            <p className="lead">
				{" "}
          		{props.texto2}
				</p>
	    	    <p className="lead"><a className="btn btn-primary btn-lg" href="/#" role="button">
				{" "}
          		{props.texto3}
				</a></p>
        	</div>
    	</div>
    );
};

export default Jumbotron;
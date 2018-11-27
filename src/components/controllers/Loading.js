import React, { Component, Fragment } from "react";
import { BarLoader } from "react-spinners";
import FQLogo from "../../images/FQLogo.png";
import "../../css/loading.css";

class Loading extends Component {
    render() {
    	return (
            <Fragment>
            <img src={FQLogo} alt="Family Quest Logo" className="familyquest-logo"/>
    		<div className="Loading">
                <div className="ring-loader">
                    <BarLoader
                    widthUnit={"vh"}
                    width={30}
                    color={"#FFFFFF"}
                    />
                    <p>Loading ...</p>
                </div>
    		</div>
            </Fragment>
    	);
    }
}
export default Loading;

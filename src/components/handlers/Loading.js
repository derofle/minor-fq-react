import React, { Component, Fragment } from "react";
import { BarLoader } from "react-spinners";
import PropTypes from "prop-types";

import FQLogo from "../../images/FQLogo.png";

class Loading extends Component {
    static propTypes = {
    	history: PropTypes.object,
    }

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
                    <p>Loading...</p>
                </div>
    		</div>
            </Fragment>
    	);
    }
}
export default Loading;

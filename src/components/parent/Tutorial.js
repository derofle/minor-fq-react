import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Tutorial extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

    render() {
    		return (
    			<Fragment>
    				<div className="Tutorial">
    					<p>Settings here please.</p>
    				</div>
    			</Fragment>
    		);
    }
}

export default Tutorial;

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class MissionFAQ extends Component {
	static propTypes = {
		history: PropTypes.object,
	}

    render() {
    		return (
    			<Fragment>
    				<div className="MissionFAQ">
    					<p>FAQ here please.</p>
    				</div>
    			</Fragment>
    		);
    }
}

export default MissionFAQ;

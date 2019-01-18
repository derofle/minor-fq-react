import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class ParentSettings extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

    render() {
    		return (
    			<Fragment>
    				<div className="ParentSettings">
    					<p>De opties zijn nog in ontwikkeling.</p>
    				</div>
    			</Fragment>
    		);
    }
}

export default ParentSettings;

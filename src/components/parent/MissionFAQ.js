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
    					<p>Als je vragen of problemen ervaart. Stuur dan een Whatsapp of bel naar 0629361264</p>
    				</div>
    			</Fragment>
    		);
    }
}

export default MissionFAQ;

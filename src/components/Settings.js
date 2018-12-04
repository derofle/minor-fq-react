import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import cogIcon from "../images/icons/settings.png";

class Settings extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

    state = {
    	isActive: false,
    }

    openSettings = () => {
    	this.setState({
    		isActive: true,
    	});
    }

    closeSettings = () => {
    	this.setState({
    		isActive: false,
    	});
    }

    render() {
    	if (this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="settings-icon" alt="Settings Icon" onClick={this.closeSettings}/>
    				<div className="Settings">
    					<p>Settings here please.</p>
    					<button onClick={this.closeSettings}>Close</button>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="settings-icon" alt="Settings Icon" onClick={this.openSettings}/>
    			</Fragment>
    		);
    	}
    }
}

export default Settings;

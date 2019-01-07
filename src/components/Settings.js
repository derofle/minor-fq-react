import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import cogIcon from "../images/ui/story-settings.png";
import placeHolderSettings from "../images/placeholdersettings.png";

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
					<div className="blur"></div>
    				<div className="Settings">
						<div className="settings-header">
							<h2>SETTINGS</h2>
							<button onClick={this.closeSettings}>X</button>
							</div>
						<div className="settings-content">
    					<img src={placeHolderSettings} alt={placeHolderSettings} className="placeholder-settings"/>
						</div>
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

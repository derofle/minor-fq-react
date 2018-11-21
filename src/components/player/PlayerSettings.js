import React, { Component, Fragment } from "react";
import cogIcon from "../../images/icons/settings.png";
import "../../css/player/playersettings.css";

class Settings extends Component {
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
    				<img src={cogIcon} className="SettingsIcon" alt="Settings Icon" onClick={this.closeSettings}/>
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
    				<img src={cogIcon} className="SettingsIcon" alt="Settings Icon" onClick={this.openSettings}/>
    			</Fragment>
    		);
    	}
    }
}

export default Settings;

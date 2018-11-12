import React, { Component, Fragment } from "react";
import cogIcon from "../images/icons/settings.png";
import "../css/settings.css";


class Settings extends Component {
    state = {
    	cogPressed: false,
    }

    openSettings = () => {
    	this.setState({
    		cogPressed: true,
    	});
    }

    closeSettings = () => {
    	this.setState({
    		cogPressed: false,
    	});
    }

    render() {
    	if (this.state.cogPressed) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="settings-icon" alt="settings-icon" onClick={this.openSettings}/>
    				<div className="settings-box">
    					<p>Settings here please.</p>
    					<button onClick={this.closeSettings}>Close</button>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.cogPressed) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="settings-icon" alt="settings-icon" onClick={this.openSettings}/>
    			</Fragment>
    		);
    	}
    }
}

export default Settings;

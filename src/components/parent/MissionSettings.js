import React, { Component, Fragment } from "react";
import cogIcon from "../../images/icons/settings.png";
import "../../css/parent/parentsettings.css";

class MissionSettings extends Component {
    state = {
    	isActive: false,
    }

    openComponent = () => {
    	if (!this.props.componentActive) {
    		this.setState({
    			isActive: true,
    		});
    		this.props.setComponentActive();
    	}
    }

    closeComponent = () => {
    	this.setState({
    		isActive: false,
    	});
    	this.props.setComponentNonActive();
    }

    render() {
    	if (this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="SettingsIcon" alt="Settings Icon" onClick={this.closeComponent}/>
    				<div className="Settings">
    					<p>Settings here please.</p>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={cogIcon} className="SettingsIcon" alt="Settings Icon" onClick={this.openComponent}/>
    			</Fragment>
    		);
    	}
    }
}

export default MissionSettings;

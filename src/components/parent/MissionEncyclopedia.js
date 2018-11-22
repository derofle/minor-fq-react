import React, { Component, Fragment } from "react";
import Mission from "./Mission";
import encyclIcon from "../../images/icons/encyclopedia.png";
import "../../css/parent/missionencyclopedia.css";

class MissionEncyclopedia extends Component {
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
    				<img src={encyclIcon} className="mission-icon" alt="encyclopedia-icon" onClick={this.closeComponent}/>
    				<div className="encyclopedia-box">
    					<ul className="missions">
    						{Object.keys(this.props.missions).map(key => (
    							<Mission
    								key={key}
    								index={key}
    								details={this.props.missions[key]}
    							/>
    						))}
    					</ul>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={encyclIcon} className="mission-icon" alt="encyclopedia-icon" onClick={this.openComponent}/>
    			</Fragment>
    		);
    	}
    }
}

export default MissionEncyclopedia;

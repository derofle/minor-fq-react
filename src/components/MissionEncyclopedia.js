import React, { Component, Fragment } from "react";
import Mission from "./Mission";
import encyclIcon from "../images/icons/encyclopedia.png";
import "../css/missionencyclopedia.css";

class MissionEncyclopedia extends Component {
	state = {
    	encyclPressed: false,
	}

    openComponent = () => {
    	this.setState({
    		encyclPressed: true,
    	});
    }

    closeComponent = () => {
    	this.setState({
    		encyclPressed: false,
    	});
    }

    render() {
    	if (this.state.encyclPressed) {
    		return (
    			<Fragment>
    				<img src={encyclIcon} className="encyclopedia-icon" alt="encyclopedia-icon" onClick={this.closeComponent}/>
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
    	if (!this.state.encyclPressed) {
    		return (
    			<Fragment>
    				<img src={encyclIcon} className="encyclopedia-icon" alt="encyclopedia-icon" onClick={this.openComponent}/>
    			</Fragment>
    		);
    	}
    }
}

export default MissionEncyclopedia;

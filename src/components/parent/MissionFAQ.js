import React, { Component, Fragment } from "react";
import FAQIcon from "../../images/icons/question.png";
import "../../css/parent/missionfaq.css";

class MissionFAQ extends Component {
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
    				<img src={FAQIcon} className="mission-icon" alt="FAQ Icon" onClick={this.closeComponent}/>
    				<div className="MissionFAQ">
    					<p>FAQ here please.</p>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={FAQIcon} className="mission-icon" alt="FAQ Icon" onClick={this.openComponent}/>
    			</Fragment>
    		);
    	}
    }
}

export default MissionFAQ;

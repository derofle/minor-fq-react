import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import FAQIcon from "../images/icons/question.png";

class FAQ extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

    state = {
    	isActive: false,
    }

    openComponent = () => {
    	this.setState({
    		isActive: true,
    	});
    }

    closeComponent = () => {
    	this.setState({
    		isActive: false,
    	});
    }

    render() {
    	if (this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={FAQIcon} className="faq-icon" alt="Settings Icon" onClick={this.closeComponent}/>
					<div className="blur"></div>
    				<div className="FAQ">
    					<p>Als je vragen hebt of problemen ervaart. Stuur dan een Whatsapp of bel naar 0629361264</p>
    					<button onClick={this.closeComponent}>Close</button>
    				</div>
    			</Fragment>
    		);
    	}
    	if (!this.state.isActive) {
    		return (
    			<Fragment>
    				<img src={FAQIcon} className="faq-icon" alt="Settings Icon" onClick={this.openComponent}/>
    			</Fragment>
    		);
    	}
    }
}

export default FAQ;

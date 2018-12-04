import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import ParentSettings from "./ParentSettings";
import MissionEncyclopedia from "./MissionEncyclopedia";
import MissionFAQ from "./MissionFAQ";

import FAQIcon from "../../images/icons/question.png";
import encyclIcon from "../../images/icons/encyclopedia.png";
import cogIcon from "../../images/icons/settings.png";

class MissionNav extends Component {
	static propTypes = {
		history: PropTypes.object,
		missions: PropTypes.array,
	}

	state = {
		activeComponent: null,
		currentComponent: null,
	}

	loadSubComponent = (e) => {
			switch (e.target.className) {
				case "faq-icon":
					if (this.state.activeComponent !== "MissionFAQ") {
						this.setState({
							activeComponent: "MissionFAQ",
							currentComponent: <MissionFAQ />,
						});
					} else {
						this.setState({
							activeComponent: null,
							currentComponent: null,
						});
					}
					break;
				case "encycl-icon":
					if (this.state.activeComponent !== "MissionEncyclopedia") {
						this.setState({
							activeComponent: "MissionEncyclopedia",
							currentComponent: <MissionEncyclopedia missions={this.props.missions}/>,
						});
					} else {
						this.setState({
							activeComponent: null,
							currentComponent: null,
						});
					}
					break;
				case "cog-icon":
					if (this.state.activeComponent !== "MissionSettings") {
						this.setState({
							activeComponent: "MissionSettings",
							currentComponent: <ParentSettings/>,
						});
					} else {
						this.setState({
							activeComponent: null,
							currentComponent: null,
						});
					}
					break;
				default:
			// do nothing
				}
	}

	render() {
		return (
			<Fragment>
				<div className="MissionNav">
					<div className="filterbox"><p>Chapter 1/3: Part Name</p></div>

				<img src={FAQIcon} className="faq-icon" alt="FAQ Icon" onClick={this.loadSubComponent}/>
				<img src={encyclIcon} className="encycl-icon" alt="encyclopedia-icon" onClick={this.loadSubComponent}/>
				<img src={cogIcon} className="cog-icon" alt="Settings Icon" onClick={this.loadSubComponent}/>
				</div>
				{this.state.currentComponent}
			</Fragment>
		);
	}
}

export default MissionNav;

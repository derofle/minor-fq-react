import React, { Component } from "react";
import missionnameImage from "../../../images/ui/mission-name.png";

class MissionName extends Component {
	render() {
		return (
			<div className={`MissionName ${this.props.fade ? "fade" : ""}`}>
				<img src={missionnameImage} alt={missionnameImage} className="missionnameImage"/>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default MissionName;

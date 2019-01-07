import React, { Component } from "react";
import missionboxImage from "../../../images/ui/mission.png";

class MissionBox extends Component {
	render() {
		return (
		<div className={`MissionBox ${this.props.fade ? "fade" : ""}`}>
			<img src={missionboxImage} alt={missionboxImage} className="missionboxImage"/>
			<p>{this.props.dialogue}</p>
		</div>
		);
	}
}

export default MissionBox;

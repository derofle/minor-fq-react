import React, { Component } from "react";
import missionboxImage from "../../../images/ui/mission.png";

class MissionBox extends Component {
	render() {
		if (this.props.link === "http://fqminor.nl/ar/starmap.html" || this.props.link === "http://fqminor.nl/ar/puzzle.html") {
			return (
				<div className={`MissionBox ${this.props.fade ? "fade" : ""}`}>
					<img src={missionboxImage} alt={missionboxImage} className="missionboxImage"/>
					<p>{this.props.dialogue}</p>
					<a href={this.props.link} target="_blank">Klik hier om de missie in AR te doen!</a>
				</div>
				);
		} return (
			<div className={`MissionBox ${this.props.fade ? "fade" : ""}`}>
				<img src={missionboxImage} alt={missionboxImage} className="missionboxImage"/>
				<p>{this.props.dialogue}</p>
			</div>
			);
	}
}

export default MissionBox;

import React, { Component, Fragment } from "react";
import MissionEncyclopedia from "./MissionEncyclopedia";
import "../css/missioncontrol.css";

class MissionControl extends Component {
	render() {
		return (
			<Fragment>
				<div className="missioncontrol">
					<div className="missioncontrol-nav">
						<MissionEncyclopedia storyProgress={this.props.storyProgress} story={this.props.story} missions={this.props.missions}/>
					</div>
					<div className="missionWindow">
						<p>Your kid is at slide {this.props.storyProgress + 1} of {this.props.story.length} slides</p>
						<button onClick={this.props.prevDialogue}>Prev</button>
						<button onClick={this.props.nextDialogue}>Next</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default MissionControl;

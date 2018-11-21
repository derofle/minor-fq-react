import React, { Component, Fragment } from "react";
import MissionNav from "./MissionNav";
import "../../css/parent/missioncontrol.css";

class MissionControl extends Component {
	render() {
		return (
			<Fragment>
				<MissionNav
					missions={this.props.missions}
				/>
				<div className="missioncontrol">
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

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import MissionNav from "./MissionNav";

import BackwardsIcon from "../../images/icons/backward.png";
import PauseIcon from "../../images/icons/pause.png";
import ResumeIcon from "../../images/icons/play.png";
import ForwardIcon from "../../images/icons/forward.png";

class MissionControl extends Component {
	static propTypes = {
		history: PropTypes.object,
		story: PropTypes.array,
		missions: PropTypes.array,
		nextDialogue: PropTypes.func,
		pauseDialogue: PropTypes.func,
		prevDialogue: PropTypes.func,
		paused: PropTypes.bool,
		storyProgress: PropTypes.number,
	}

	state = {
		changeIcon: PauseIcon,
	}

	pauseDialogue = () => {
		if (!this.props.paused) {
			this.setState({
				changeIcon: PauseIcon,
			});
			this.props.pauseDialogue();
		} else {
			this.setState({
				changeIcon: ResumeIcon,
			});
			this.props.pauseDialogue();
		}
	}

	render() {
		return (
			<Fragment>
				<MissionNav
					missions={this.props.missions}
				/>
				<div className="mission-buttons">
					<img src={BackwardsIcon} alt="Backwards Icon" onClick={this.props.prevDialogue}/>
					<img src={this.state.changeIcon} alt="Backwards Icon" onClick={this.pauseDialogue}/>
					<img src={ForwardIcon} alt="Backwards Icon" onClick={this.props.nextDialogue}/>
				</div>
				<div className="missioncontrol">
					<div className="missionWindow">
						<p>Your kid is at slide {this.props.storyProgress + 1} of {this.props.story.length} slides</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default MissionControl;

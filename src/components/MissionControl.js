import React, { Component } from "react";

class MissionControl extends Component {
	render() {
		return (
			<Fragment>
				<p>Your kid is at slide {this.props.storyProgress + 1} of {this.props.story.length} slides</p>
			</Fragment>
		);
	}
}

export default MissionControl;

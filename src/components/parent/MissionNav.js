import React, { Component, Fragment } from "react";
import MissionSettings from "./MissionSettings";
import MissionEncyclopedia from "./MissionEncyclopedia";
import MissionFAQ from "./MissionFAQ";
import "../../css/missioncontrol.css";

class MissionNav extends Component {
	state = {
		componentActive: false,
	}

	setComponentActive = () => {
		this.setState({
    		componentActive: true,
    	});
	}

	setComponentNonActive = () => {
		this.setState({
    		componentActive: false,
    	});
	}

	render() {
		return (
			<Fragment>
				<div className="MissionNav">
					<MissionEncyclopedia
						missions={this.props.missions}
						componentActive={this.state.componentActive}
						setComponentActive={this.setComponentActive}
						setComponentNonActive={this.setComponentNonActive}
					/>
					<MissionSettings
						componentActive={this.state.componentActive}
						setComponentActive={this.setComponentActive}
						setComponentNonActive={this.setComponentNonActive}
					/>
					<MissionFAQ
						componentActive={this.state.componentActive}
						setComponentActive={this.setComponentActive}
						setComponentNonActive={this.setComponentNonActive}
					/>
				</div>
			</Fragment>
		);
	}
}

export default MissionNav;

import React, { Component, Fragment } from "react";
import ParentSettings from "./ParentSettings";
import MissionEncyclopedia from "./MissionEncyclopedia";
import MissionFAQ from "./MissionFAQ";
import "../../css/parent/missionnav.css";

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
					<ParentSettings
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

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import DialogueBox from "./dialogue/DialogueBox";
import MissionBox from "./mission/MissionBox";
import SpriteHandler from "../handlers/SpriteHandler";
import NameBox from "./dialogue/NameBox";
import MissionName from "./mission/MissionName";
import BackgroundHandler from "../handlers/BackgroundHandler";
import Settings from "../Settings";

class GameScreen extends Component {
	state = {
		fade: false
	}

    static propTypes = {
    	details: PropTypes.shape({
			name: PropTypes.string,
    		character: PropTypes.string,
    		dialogue: PropTypes.string,
    		location: PropTypes.string,
    		type: PropTypes.string,
    	}),
		nextDialogue: PropTypes.func,
	}

	fadeEffect = () => {
		this.setState({ fade: !this.state.fade });
		setTimeout(() => this.setState({ fade: !this.state.fade }), 300);
	}

    render() {
    	const { name, character, dialogue, location, type } = this.props.details;
    	if (type === "dialogue") {
    		return (
    			<Fragment>
    				<div className="settings-upperright"><Settings /></div>
    				<div className="dialogue-window">
    					<SpriteHandler character={character} />
    					<BackgroundHandler location={location} />
    					<NameBox
							name={name}
							fade={this.state.fade}
							/>
    					<DialogueBox
							dialogue={dialogue}
							nextDialogue={this.props.nextDialogue}
							fadeEffect={this.fadeEffect}
							fade={this.state.fade}
							/>
    				</div>
    			</Fragment>
    		);
    	}
    	if (type === "mission") {
    		return (
    			<Fragment>
    				<div className="settings-upperleft"><Settings /></div>
    				<div className="mission-window">
    					<SpriteHandler character={character} />
    					<BackgroundHandler location={location} />
    					<MissionName name={name} />
    					<MissionBox dialogue={dialogue} />
    					<button onClick={this.props.nextDialogue} className="next-button">Next</button>
    				</div>
    			</Fragment>
    		);
    	}
    }
}


export default GameScreen;

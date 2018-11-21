import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import DialogueBox from "./DialogueBox";
import MissionBox from "./MissionBox";
import Sprite from "./Sprite";
import DialogueName from "./DialogueName";
import MissionName from "./MissionName";
import Background from "./Background";
import PlayerSettings from "./PlayerSettings";

import "../../css/dialogue.css";
import "../../css/mission.css";

class DialogueScreen extends Component {
    static propTypes = {
    	details: PropTypes.shape({
    		character: PropTypes.string,
    		dialogue: PropTypes.string,
    		location: PropTypes.string,
    		type: PropTypes.string,
    	}),
    	nextDialogue: PropTypes.func,
    }

    render() {
    	const { character, dialogue, location, type } = this.props.details;
    	if (type === "dialogue") {
    		return (
    			<Fragment>
    				<PlayerSettings />
    				<div className="dialogue-window">
    					<Sprite character={character} />
    					<Background location={location} />
    					<DialogueName character={character} />
    					<DialogueBox dialogue={dialogue} nextDialogue={this.props.nextDialogue}/>
    				</div>
    			</Fragment>
    		);
    	}
    	if (type === "mission") {
    		return (
    			<Fragment>
    				<PlayerSettings />
    				<div className="mission-window">
    					<Sprite character={character} />
    					<Background location={location} />
    					<MissionName character={character} />
    					<MissionBox dialogue={dialogue} />
    					<button onClick={this.props.nextDialogue} className="next-button">Next</button>
    				</div>
    			</Fragment>
    		);
    	}
    }
}


export default DialogueScreen;

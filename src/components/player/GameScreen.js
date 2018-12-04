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
    				<div className="settings-upperleft"><Settings /></div>
    				<div className="dialogue-window">
    					<SpriteHandler character={character} />
    					<BackgroundHandler location={location} />
    					<NameBox name={character} />
    					<DialogueBox dialogue={dialogue} nextDialogue={this.props.nextDialogue}/>
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
    					<MissionName character={character} />
    					<MissionBox dialogue={dialogue} />
    					<button onClick={this.props.nextDialogue} className="next-button">Next</button>
    				</div>
    			</Fragment>
    		);
    	}
    }
}


export default GameScreen;

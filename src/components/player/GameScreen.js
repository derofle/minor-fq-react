import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import DialogueBox from "./dialogue/DialogueBox";
import MissionBox from "./mission/MissionBox";
import SpriteHandler from "../handlers/SpriteHandler";
import NameBox from "./dialogue/NameBox";
import MissionName from "./mission/MissionName";
import BackgroundHandler from "../handlers/BackgroundHandler";
import Settings from "../Settings";

import buttonImage from "../../images/ui/button.png";


class GameScreen extends Component {
	state = {
		fade: false,
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
    	const { name, character, dialogue, location, type, sidecharacter, link } = this.props.details;
    	if (type === "dialogue") {
    		return (
    			<Fragment>
    				<div className="settings-upperright"><Settings /></div>
    				<div className="dialogue-window">
    					<SpriteHandler character={character} type="maincharacter"/>
						<SpriteHandler character={sidecharacter} type="sidecharacter" />
    					<BackgroundHandler location={location} />
    					<NameBox
							name={name}
							fade={this.state.fade}
							type="mainname"/>
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
    					<MissionName name={name} fade={this.state.fade}/>
    					<MissionBox dialogue={dialogue} link={link} fade={this.state.fade}/>
    				</div>
    			</Fragment>
    		);
		}
		if (type === "transition") {
    		return (
    			<Fragment>
    				<div className="settings-upperleft"><Settings /></div>
    				<div className="transition-window">
    					<BackgroundHandler location={location} />
						<img src={buttonImage} alt={buttonImage} className="buttonImage" onClick={this.props.nextDialogue}/>
    					<button	onClick={(e) => {
							this.fadeEffect();
							this.props.nextDialogue();
							}}
						 className="next-button">Volgende</button>
    				</div>
    			</Fragment>
    		);
    	}
    }
}


export default GameScreen;

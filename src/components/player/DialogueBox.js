import React, { Component, Fragment } from "react";
import AnimatedTypingComponent from "../helpers/AnimatedTypingComponent";

class DialogueBox extends Component {
	state = {
		data: "",
		typedOut: false,
	}

	handleClick = () => {
		this.props.nextDialogue();
		this.forceUpdate();
	}

	componentDidUpdate() {
    	const newData = this.props.dialogue;
    	if (newData !== this.state.data) {
    		this.setState({
    			data: newData,
			});
    	}
	}

	render() {
		return (
			<Fragment>
				<div className="dialogue-box" onClick={this.handleClick}>
					<AnimatedTypingComponent dialogue={this.state.data}/>
				</div>
			</Fragment>
		);
	}
}

export default DialogueBox;

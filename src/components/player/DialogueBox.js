import React, { Component, Fragment } from "react";

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
					<p>{this.props.dialogue}</p>
				</div>
			</Fragment>
		);
	}
}

export default DialogueBox;

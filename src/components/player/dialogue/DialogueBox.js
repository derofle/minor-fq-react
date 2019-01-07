import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import textboxImage from "../../../images/ui/textbox.png";

class DialogueBox extends Component {
	state = {
		data: "",
	}

	static propTypes = {
		history: PropTypes.object,
		dialogue: PropTypes.string,
		nextDialogue: PropTypes.func,
	}

	componentDidMount() {
		const newData = this.props.dialogue;
		this.setState({ data: newData });
	}

	handleClick = () => {
		this.props.nextDialogue();
		this.props.fadeEffect();
	}

	componentDidUpdate() {
    	const newData = this.props.dialogue;
    	if (newData !== this.state.data) {
			setTimeout(() => this.setState({ data: newData }), 300);
    	}
	}

	render() {
		return (
			<Fragment>
					<div className={`DialogueBox ${this.props.fade ? "fade" : ""}`} onClick={this.handleClick} >
						<img src={textboxImage} alt={textboxImage} className="textboxImage"/>
						<p>{this.state.data}</p>
					</div>
			</Fragment>
		);
	}
}

export default DialogueBox;

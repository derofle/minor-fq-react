import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

class DialogueBox extends Component {
	state = {
		data: "",
		fade: false,
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
		this.setState({ fade: !this.state.fade });
	}

	componentDidUpdate() {
    	const newData = this.props.dialogue;
    	if (newData !== this.state.data) {
			setTimeout(() => this.setState({ data: newData, fade: !this.state.fade }), 300);
    	}
	}

	render() {
		return (
			<Fragment>
					<div className={`DialogueBox ${this.state.fade ? "fade" : ""}`} onClick={this.handleClick} >
						<p>{this.state.data}</p>
					</div>
			</Fragment>
		);
	}
}

export default DialogueBox;

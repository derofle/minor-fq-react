import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';

class DialogueBox extends Component {
	state = {
		data: "",
		typedOut: false,
	}

	static propTypes = {
		history: PropTypes.object,
		dialogue: PropTypes.string,
		nextDialogue: PropTypes.func,
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
				<CSSTransition
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					<div className="DialogueBox" onClick={this.handleClick}>
						<p>{this.props.dialogue}</p>
					</div>
				</CSSTransition>
			</Fragment>
		);
	}
}

export default DialogueBox;

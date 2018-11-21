import React, { Component } from "react";
import Typing from "react-typing-animation";

class AnimatedTypingComponent extends Component {
    state = {
    	txt: "",
    }

    loopBoolean = false

    finishBoolean = true

    componentDidUpdate() {
    	const newData = this.props.dialogue;
    	this.loopBoolean = false;
    	if (newData !== this.state.txt) {
    		this.setState({
    			txt: newData,
    		});
    		this.loopBoolean = true;
    	}
    }

    finishedTyping = () => {
    	this.finishBoolean = true;
    }

    render() {
    	return (
    		<Typing onFinishedTyping={this.finishedTyping} loop={this.loopBoolean}>
    			<p>{this.props.dialogue}</p>
    		</Typing>
    	);
    }
}
export default AnimatedTypingComponent;

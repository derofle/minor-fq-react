import React, { Component, Fragment } from "react";
import Swipe from "react-swipe-component";
import PropTypes from "prop-types";

class Tutorial extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

	state = {
		tutorialText: ["Vivamus molestie, neque vitae pellentesque porta, nulla nulla volutpat arcu, a feugiat lorem nunc eu dolor. Sed laoreet dictum suscipit. Maecenas non purus ultricies, pretium magna nec, pulvinar nisi. Nullam vitae magna fermentum, mollis purus eu, iaculis urna. Nullam luctus, purus vel finibus ornare, orci neque ultricies quam, id consectetur odio nisl suscipit lectus. Praesent pretium convallis aliquet.", "urabitur posuere fermentum tortor non semper. Quisque ut sem scelerisque, pharetra eros a, maximus metus. Mauris nec mauris tellus. Aenean vel eros sed mauris efficitur posuere eget in mauris. Nullam vestibulum euismod ex, at viverra justo tincidunt a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", "And here are some last things."],
		currentText: null,
		counter: 0,
	}

	componentDidMount() {
		this.setState({
			currentText: this.state.tutorialText[this.state.counter],
		});
	}

	onSwipeLeftListener = () => {
		if (this.state.counter <= this.state.tutorialText.length - 2) {
			this.setState({
				currentText: this.state.tutorialText[this.state.counter + 1],
				counter: this.state.counter + 1,
			});
		} else {
			this.props.tutorialCompleted();
		}
	}

	onSwipeRightListener = () => {
		if (this.state.counter > 0) {
			this.setState({
				currentText: this.state.tutorialText[this.state.counter - 1],
				counter: this.state.counter - 1,
			});
		}
	}

    render() {
    		return (
    			<Fragment>

				<div className="blur"></div>
					<Swipe
					nodeName="div"
					className="Tutorial"
					mouseSwipe={false}
					onSwipeEnd={this.onSwipeEnd}
					onSwipedLeft={this.onSwipeLeftListener}
					onSwipedRight={this.onSwipeRightListener}
					onSwipedDown={this.onSwipeDownListener}
					onSwipedUp={this.onSwipeUpListener}
					onSwipe={this.onSwipeListener}>
					<div className="tutorial-name"><p>Welcome</p></div>
    					<p>Welcome to Family Quest</p>
						<p>{this.state.currentText}</p>

    			</Swipe>
    			</Fragment>
    		);
    }
}

export default Tutorial;

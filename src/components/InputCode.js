import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/inputcode.css";

class InputCode extends Component {
	state = {
		button: null,
	}

    static propTypes = {
    	history: PropTypes.object,
    }

	myInput = React.createRef();

	componentDidMount() {
		if (this.props.history.location.pathname === "/inputcode/parent") {
			this.setState({
				button: <button type="submit" onClick={this.goToParentSection}>Continue</button>,
			});
		}

		if (this.props.history.location.pathname === "/inputcode/child") {
			this.setState({
				button: <button type="submit" onClick={this.goToChildSection}>Continue</button>,
			});
		}
	}

	goBack = (e) => {
		e.preventDefault();
		this.props.history.push(`/menu`);
	}

    goToChildSection = (event) => {
    	event.preventDefault();
		const code = this.myInput.current.value;

		if (typeof data !== "number" && code.length !== 4) {
			alert("This is not a 4 digit number!");
		} else {
			this.props.history.push(`/story/${code}`);
		}
    }

    goToParentSection = (event) => {
    	event.preventDefault();
		const code = this.myInput.current.value;

		if (typeof data !== "number" && code.length !== 4) {
			alert("This is not a 4 digit number!");
		} else {
			this.props.history.push(`/missioncontrol/${code}`);
		}
    }


    render() {
    	return (
    		<div className="InputCode">
    			<form>
					<div className="inputcode-header">
    				<h2>Enter Code</h2>
					</div>
    				<input
    					type="text"
    					ref={this.myInput}
    					required
    					placeholder="Input Code Here"
    				/>
    				<div className="LandingButtons">
						<button onClick={this.goBack}>Back</button>
    					{this.state.button}
    				</div>
    			</form>
    		</div>
    	);
    }
}

export default InputCode;

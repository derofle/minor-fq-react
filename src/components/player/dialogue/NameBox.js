import React, { Component } from "react";
import PropTypes from "prop-types";

import nameboxImage from "../../../images/ui/textbox-name.png";

class NameBox extends Component {
	state = {
		data: "",
	}

	static propTypes = {
		history: PropTypes.object,
		name: PropTypes.string,
	}

	componentDidMount() {
		const newData = this.props.dialogue;
		setTimeout(() => this.setState({ data: newData }), 0);
	}

	componentDidUpdate() {
    	const newData = this.props.name;
		setTimeout(() => this.setState({ data: newData }), 300);
	}

	render() {
		return (
			<div className={`NameBox ${this.props.fade ? "fade" : ""}`}>
				<img src={nameboxImage} alt={nameboxImage} className="nameboxImage"/>
				<p>{this.state.data}</p>
			</div>
		);
	}
}

export default NameBox;

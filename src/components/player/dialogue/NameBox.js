import React, { Component } from "react";
import PropTypes from "prop-types";

class NameBox extends Component {
	static propTypes = {
		history: PropTypes.object,
		name: PropTypes.string,
	}

	render() {
		return (
			<div className={`NameBox ${this.props.fade ? "fade" : ""}`}>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default NameBox;

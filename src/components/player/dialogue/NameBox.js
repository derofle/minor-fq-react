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
		type: PropTypes.string,
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
		if (this.props.type === "mainname" && this.props.name !== "none") {
		return (
			<div className={`NameBox ${this.props.fade ? "fade" : ""}`}>
				<img src={nameboxImage} alt={nameboxImage} className="nameboxImage"/>
				<p>{this.state.data}</p>
			</div>
		);
		}
		if (this.props.type === "sidename" && this.props.name !== "none") {
			return (
				<div className={`SideNameBox ${this.props.fade ? "fade" : ""}`}>
					<img src={nameboxImage} alt={nameboxImage} className="nameboxImage"/>
					<p>{this.state.data}</p>
				</div>
			);
		}
		if (this.props.name === "none") {
			return null;
		}
	}
}

export default NameBox;

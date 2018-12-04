import React, { Component } from "react";
import PropTypes from "prop-types";

class NotFound extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

	render() {
		return (
			<div className="NotFound">
				<h2>Not Found!</h2>
			</div>
		);
	}
}

export default NotFound;

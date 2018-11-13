import React, { Component } from "react";
import PropTypes from "prop-types";

class Mission extends Component {
  static propTypes = {
  	details: PropTypes.shape({
  		name: PropTypes.string,
  		desc: PropTypes.string,
  	}),
  };

  render() {
  	const { name, desc } = this.props.details;
  	return (
  		<li className="mission-list">
  			<h3 className="mission-name">
  				{name}
  			</h3>
  			<p>{desc}</p>
  		</li>
  	);
  }
}

export default Mission;

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Mission from "./Mission";

class MissionEncyclopedia extends Component {
	static propTypes = {
		history: PropTypes.object,
		missions: PropTypes.array,
	}

    render() {
    		return (
    			<Fragment>
    				<div className="encyclopedia-box">
    					<ul className="missions">
    						{Object.keys(this.props.missions).map(key => (
    							<Mission
    								key={key}
    								index={key}
    								details={this.props.missions[key]}
    							/>
    						))}
    					</ul>
    				</div>
    			</Fragment>
    		);
    }
}

export default MissionEncyclopedia;

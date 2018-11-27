import React, { Component, Fragment } from "react";
import Mission from "./Mission";

import "../../css/parent/missionencyclopedia.css";

class MissionEncyclopedia extends Component {
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

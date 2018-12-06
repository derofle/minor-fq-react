import React, { Component } from "react";
import PropTypes from "prop-types";

class MainMenu extends Component {
    static propTypes = {
    	history: PropTypes.object,
    }

    restartGame = () => {
        this.props.history.push(`/`);
    }

    render() {
    	return (
    		<div className="Finish">
                <div className="finish-content">
                    <p>You finished the game!</p>
                    <button onClick={this.restartGame}>Restart</button>
                </div>
    		</div>
    	);
    }
}

export default MainMenu;

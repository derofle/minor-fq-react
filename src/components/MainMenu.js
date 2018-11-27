import React, { Component } from "react";

import ChildSelect from "../images/icons/childselect.png";
import ParentSelect from "../images/icons/parentselect.png";
import "../css/mainmenu.css";

class MainMenu extends Component {
    goToChildSection = () => {
    	this.props.history.push(`/inputcode/child`);
    }

    goToParentSection = () => {
    	this.props.history.push(`/inputcode/parent`);
    }

    render() {
    	return (
    		<div className="MainMenu">
                <div className="menu-header">
                    <h1>SPACE ADVENTURE</h1>
                    <h3>IN SPACE</h3>
                </div>
                <div className="select-buttons">
                    <img src={ChildSelect} alt="" onClick={this.goToChildSection}/>
                    <img src={ParentSelect} alt="" onClick={this.goToParentSection}/>
                </div>
    		</div>
    	);
    }
}

export default MainMenu;

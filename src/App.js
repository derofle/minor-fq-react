import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import initialStory from "./story";
import initialMissions from "./missions";

import DialogueScreen from "./components/player/DialogueScreen";
import MissionControl from "./components/parent/MissionControl";

import base from "./base";

class App extends Component {
  state = {
	  story: [],
	  missions: [],
  	storyProgress: 0,
  }

  static propTypes = {
  	match: PropTypes.object,
  };

  componentDidMount() {
  	this.ref = base.syncState(`${this.props.match.params.storyID}/story`, {
  		context: this,
  		state: "story",
	  });
	  this.ref = base.syncState(`${this.props.match.params.storyID}/missions`, {
  		context: this,
  		state: "missions",
  	});
  	this.ref = base.syncState(`${this.props.match.params.storyID}/storyProgress`, {
  		context: this,
  		state: "storyProgress",
  	});

  	base.fetch(`${this.props.match.params.storyID}/story`, {
  		context: this,
  		asArray: true,
  		then(data) {
  			if (data.length === 0) {
  				this.firstRun();
  			}
  		},
  	});

  	document.onkeydown = (e) => {
  		switch (e.keyCode) {
  		case 37:
  			this.prevDialogue();
  			break;
  		case 39:
  			this.nextDialogue();
  			break;
  		default:
        // do nothing
  		}
  	};

  	console.log(this.props.location.pathname);
  }


  firstRun = () => {
  	this.setState({
		  story: initialStory,
		  missions: initialMissions,
  		storyProgress: 0,
  	});
  }

  componentWillUnmount() {
  	base.removeBinding(this.ref);
  }

  nextDialogue = () => {
  	if (this.state.storyProgress < this.state.story.length - 1) {
  		this.setState({
  			storyProgress: this.state.storyProgress + 1,
  		});
  	}
  }

  prevDialogue = () => {
  	if (this.state.storyProgress > 0) {
  		this.setState({
  			storyProgress: this.state.storyProgress - 1,
  		});
  	}
  }

  render() {
  	if (!this.state.story[this.state.storyProgress] && this.state.storyProgress !== 1) {
  		return (
  			<Fragment>
  				<div className="dialogue-window"></div>
  			</Fragment>
  		);
  	}

  	if (this.props.location.pathname.includes("story")) {
  		return (
  			<Fragment>
  				<DialogueScreen
				  details={this.state.story[this.state.storyProgress]}
				  nextDialogue={this.nextDialogue}
				  />
  			</Fragment>
  		);
  	}

  	if (this.props.location.pathname.includes("missioncontrol")) {
  		return (
  			<Fragment>
  				<MissionControl
				  storyProgress={this.state.storyProgress}
				  story={this.state.story}
				  missions={this.state.missions}
				  nextDialogue={this.nextDialogue}
				  prevDialogue={this.prevDialogue}
				  />
  			</Fragment>
  		);
  	}
  }
}

export default App;

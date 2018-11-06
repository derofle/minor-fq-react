import React, { Component } from 'react';
import PropTypes from 'prop-types';
import initialStory from './story';
import DialogueBox from './components/DialogueBox';
import base from './base';

import cogIcon from './images/icons/settings.png';


class App extends Component {

  state = {
    story: [],
    storyProgress: 1
  }

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storyID}/story`, {
        context: this,
        state: 'story',
    });
    this.ref = base.syncState(`${this.props.match.params.storyID}/storyProgress`, {
      context: this,
      state: 'storyProgress',
    });
    this.setState({
      story: initialStory,
      storyProgress: this.state.storyProgress
    })  
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  nextDialogue = () => {
    this.setState({
      storyProgress: this.state.storyProgress + 1
    })
  }

  render() {
    if (!this.state.story[this.state.storyProgress]) return (
      <div className="dialogue-window"></div>
    );
    return (
      <div>
        <img src={cogIcon} className="settings-icon" alt="settings-icon"/>
        <div className="dialogue-window">
          <DialogueBox details={this.state.story[this.state.storyProgress]} nextDialogue={this.nextDialogue}/>
        </div>
      </div>
    );
  }

}

export default App;

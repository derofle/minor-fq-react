import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import initialStory from './story';
import DialogueBox from './components/DialogueBox';
import Settings from './components/Settings';
import base from './base';

import cogIcon from './images/icons/settings.png';


class App extends Component {

  state = {
    story: [],
    storyProgress: 1,
    cogPressed: false
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
  
    base.fetch(`${this.props.match.params.storyID}/story`, {
      context: this,
      asArray: true,
      then(data) {
        if (data.length === 0) {
          this.firstRun();
        }
      }
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  firstRun = () => {
    this.setState({
      story: initialStory,
      storyProgress: this.state.storyProgress
    }) 
  }

  nextDialogue = () => {
    this.setState({
      storyProgress: this.state.storyProgress + 1
    })
  }

  openSettings = () => {
      this.setState({
        cogPressed: true
      })
  }

  closeSettings = () => {
    this.setState({
      cogPressed: false
    })
  }

  render() {
    if (!this.state.story[this.state.storyProgress]) return (
      <div className="dialogue-window"></div>
    );
    return (
      <Fragment>
        <img src={cogIcon} className="settings-icon" alt="settings-icon" onClick={this.openSettings}/>
        
        <div className="dialogue-window">
          <DialogueBox details={this.state.story[this.state.storyProgress]} nextDialogue={this.nextDialogue}/>
          <Settings cogPressed={this.state.cogPressed} closeSettings={this.closeSettings}/>
        </div>
        
      </Fragment>
    );
  }

}

export default App;

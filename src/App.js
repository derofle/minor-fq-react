import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import initialStory from './story';
import DialogueScreen from './components/DialogueScreen';
import Settings from './components/Settings';
import base from './base';

class App extends Component {

  state = {
    story: [],
    storyProgress: 1,
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

    document.onkeydown = (e) => {
      switch (e.keyCode) {
      case 37:
        this.prevDialogue();
        break;
      case 39:
        this.nextDialogue();
        break;
      default:
        //do nothing
      }
    };
  }


  firstRun = () => {
    this.setState({
      story: initialStory,
      storyProgress: this.state.storyProgress
    }) 
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  nextDialogue = () => {
    if (this.state.storyProgress < this.state.story.length -1) {
      this.setState({
        storyProgress: this.state.storyProgress + 1
      })
    }
  }

  prevDialogue = () => {
    if (this.state.storyProgress > 1) {
      this.setState({
        storyProgress: this.state.storyProgress - 1
      })
    }
  }

  render() {
    if (!this.state.story[this.state.storyProgress]) return (
      <Fragment>
        <Settings />
        <div className="dialogue-window"></div>
      </Fragment>
    );
    return (
      <Fragment>
        <Settings />
        <DialogueScreen details={this.state.story[this.state.storyProgress]} nextDialogue={this.nextDialogue}/> 
      </Fragment>
    );
  }

}

export default App;

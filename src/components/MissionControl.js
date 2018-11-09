import React, { Component } from 'react';

class MissionControl extends Component {
    render() {
      return (
        <p>Your kid is at slide {this.props.storyProgress + 1} of {this.props.story.length} slides</p>
      )
    }

}

export default MissionControl;
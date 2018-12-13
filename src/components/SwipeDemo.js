import React, { Component } from "react";
import Swipe from "react-swipe-component";

class SwipeDemo extends Component {
    state = {
        actionText: null,
    }

  render() {
    return (
        <Swipe
                nodeName="div"
                className="test"
                mouseSwipe={false}
                onSwipeEnd={this.onSwipeEnd}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener}
                onSwipedDown={this.onSwipeDownListener}
                onSwipedUp={this.onSwipeUpListener}
                onSwipe={this.onSwipeListener}>
            Demo
            {this.state.actionText}
    </Swipe>
    );
  }

  onSwipeEnd = () => {
    this.setState({ actionText: "Swipe Ended" });
  }

  onSwipeLeftListener = () => {
    this.setState({ actionText: "Swiped left" });
  }

  onSwipeRightListener = () => {
    this.setState({ actionText: "Swiped right" });
  }

  onSwipeUpListener = () => {
    this.setState({ actionText: "Swiped Up" });
  }

  onSwipeDownListener = () => {
    this.setState({ actionText: "Swiped down" });
  }

  onSwipeListener = (e) => {
    if (e[1] === 0 && this.state.continuousSwipeListener) this.setState({ actionText: `Swipe x: ${e[0]}` });
    else if (e[0] === 0 && this.state.continuousSwipeListener) this.setState({ actionText: `Swipe y: ${e[1]}` });
  }
}

export default SwipeDemo;

import React, { Component, Fragment } from 'react';

import Spacewindow from '../images/backgrounds/spacewindow.png';
import Sandena from '../images/backgrounds/sandena.png';
import Senate from '../images/backgrounds/senate.png';
import Space from '../images/backgrounds/space.png';
import Spacecontrols from '../images/backgrounds/spacecontrols.png';
import Unsinkable from '../images/backgrounds/unsinkable.png';
import Vulcanus from '../images/backgrounds/vulcanus.png';

class Background extends Component {

    state = {
        imgUrl: null
    }

    componentDidMount() {
        this.handleChange();
    }

    handleChange = () => {
        if (this.props.location === "appartment") {
            this.setState({
                imgUrl: <img src={Spacewindow} alt={Spacewindow} className="background"/>
              })
            
        };
        if (this.props.location === "senate") {
            this.setState({
                imgUrl: <img src={Senate} alt={Senate} className="background"/>
              })  
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.imgUrl}
            </Fragment>
        )
    }
}

export default Background;
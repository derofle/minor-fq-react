import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Etheria from "../../images/backgrounds/etheria.png";
import Spacewindow from "../../images/backgrounds/spacewindow.png";
import Sandena from "../../images/backgrounds/sandena.png";
import Senate from "../../images/backgrounds/senate.png";
import Space from "../../images/backgrounds/space.png";
import Spacecontrols from "../../images/backgrounds/spacecontrols.png";
import Unsinkable from "../../images/backgrounds/unsinkable.png";
import Vulcanus from "../../images/backgrounds/vulcanus.png";
import ApproachSenate from "../../images/backgrounds/approach-senate.png";
import EtheriaTheater from "../../images/backgrounds/etheria-theater.png";
import SandenaSettlement from "../../images/backgrounds/sandena-settlement.png";
import VulcanusBase from "../../images/backgrounds/vulcanus-base.png";

class BackgroundHandler extends Component {
	static propTypes = {
		history: PropTypes.object,
		character: PropTypes.string,
	}

    count = 0;

    state = {
    	imgUrl: null,
    }

    componentDidMount() {
    	this.handleChange();
    }

    componentDidUpdate() {
    	this.handleChange();
    }

    handleChange = () => {
    	if (this.props.location === "Appartment" && this.count !== 1) {
    		this.setState({
    			imgUrl: <img src={Spacewindow} alt={Spacewindow} className="background"/>,
    		});
    		this.count = 1;
    	}
    	if (this.props.location === "Senate" && this.count !== 2) {
    		this.setState({
    			imgUrl: <img src={Senate} alt={Senate} className="background"/>,
    		});
    		this.count = 2;
    	}

    	if (this.props.location === "Sandena" && this.count !== 3) {
    		this.setState({
    			imgUrl: <img src={Sandena} alt={Sandena} className="background"/>,
    		});
    		this.count = 3;
    	}

    	if (this.props.location === "Space" && this.count !== 4) {
    		this.setState({
    			imgUrl: <img src={Space} alt={Space} className="background"/>,
    		});
    		this.count = 4;
    	}

    	if (this.props.location === "Spacecontrols" && this.count !== 5) {
    		this.setState({
    			imgUrl: <img src={Spacecontrols} alt={Spacecontrols} className="background"/>,
    		});
    		this.count = 5;
    	}

    	if (this.props.location === "Unsinkable" && this.count !== 6) {
    		this.setState({
    			imgUrl: <img src={Unsinkable} alt={Unsinkable} className="background"/>,
    		});
    		this.count = 6;
    	}

    	if (this.props.location === "Vulcanus" && this.count !== 7) {
    		this.setState({
    			imgUrl: <img src={Vulcanus} alt={Vulcanus} className="background"/>,
    		});
    		this.count = 7;
    	}
    	if (this.props.location === "Etheria" && this.count !== 8) {
    		this.setState({
    			imgUrl: <img src={Etheria} alt={Etheria} className="background"/>,
    		});
    		this.count = 8;
		}
		if (this.props.location === "ApproachSenate" && this.count !== 9) {
    		this.setState({
    			imgUrl: <img src={ApproachSenate} alt={ApproachSenate} className="background"/>,
    		});
    		this.count = 9;
		}
		if (this.props.location === "EtheriaTheater" && this.count !== 10) {
    		this.setState({
    			imgUrl: <img src={EtheriaTheater} alt={EtheriaTheater} className="background"/>,
    		});
    		this.count = 10;
		}
		if (this.props.location === "SandenaSettlement" && this.count !== 11) {
    		this.setState({
    			imgUrl: <img src={SandenaSettlement} alt={SandenaSettlement} className="background"/>,
    		});
    		this.count = 11;
		}
		if (this.props.location === "VulcanusBase" && this.count !== 12) {
    		this.setState({
    			imgUrl: <img src={VulcanusBase} alt={VulcanusBase} className="background"/>,
    		});
    		this.count = 12;
    	}
    }

    render() {
    	return (
    		<Fragment>
    			{this.state.imgUrl}
    		</Fragment>
    	);
    }
}

export default BackgroundHandler;

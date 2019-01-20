import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Joksin
import JoksinNeutral from "../../images/sprites/joksin-neutral.png";
import JoksinAngry from "../../images/sprites/joksin-angry.png";
import JoksinHappy from "../../images/sprites/joksin-happy.png";
import JoksinJoyed from "../../images/sprites/joksin-overjoyed.png";

// Areos
import AreosNeutral from "../../images/sprites/areos-neutral.png";
import AreosUncertain from "../../images/sprites/areos-uncertain.png";

// Morkaas
import MorkaasNeutral from "../../images/sprites/morkaas-neutral.png";
import MorkaasBored from "../../images/sprites/morkaas-bored.png";
import MorkaasHappy from "../../images/sprites/morkaas-happy.png";

// Selena
import SelenaNeutral from "../../images/sprites/selena-neutral.png";
import SelenaHappy from "../../images/sprites/selena-happy.png";
import SelenaTired from "../../images/sprites/selena-tired.png";

// Hakaan
import Hakaan from "../../images/sprites/hakaan-neutral.png";

class SpriteHandler extends Component {
	static propTypes = {
		history: PropTypes.object,
		character: PropTypes.string,
		type: PropTypes.string,
	}

    count = 0;

    state = {
		character: "",
		imgUrl: null,
		fade: false,
    }

    componentDidMount() {
    	this.handleChange();
    }

    componentDidUpdate() {
    	this.handleChange();
	}

	fadeEffect = () => {
		this.setState({ fade: !this.state.fade });
		setTimeout(() => this.setState({ fade: !this.state.fade }), 300);
	}

    handleChange = () => {
    	if (this.props.character === "JoksinNeutral" && this.count !== 1) {
    		this.setState({
				imgUrl: <img src={JoksinNeutral} alt={JoksinNeutral} className={this.props.type}/>,
    		});
    		this.count = 1;
    	}
    	if (this.props.character === "JoksinAngry" && this.count !== 2) {
    		this.setState({
    			imgUrl: <img src={JoksinAngry} alt={JoksinAngry} className={this.props.type}/>,
    		});
    		this.count = 2;
    	}
    	if (this.props.character === "JoksinHappy" && this.count !== 3) {
    		this.setState({
    			imgUrl: <img src={JoksinHappy} alt={JoksinHappy} className={this.props.type}/>,
    		});
    		this.count = 3;
    	}
    	if (this.props.character === "JoksinJoyed" && this.count !== 4) {
    		this.setState({
    			imgUrl: <img src={JoksinJoyed} alt={JoksinJoyed} className={this.props.type}/>,
    		});
    		this.count = 4;
    	}
    	if (this.props.character === "AreosNeutral" && this.count !== 5) {
    		this.setState({
    			imgUrl: <img src={AreosNeutral} alt={AreosNeutral} className={this.props.type}/>,
    		});
    		this.count = 5;
    	}
    	if (this.props.character === "AreosUncertain" && this.count !== 6) {
    		this.setState({
    			imgUrl: <img src={AreosUncertain} alt={AreosUncertain} className={this.props.type}/>,
    		});
    		this.count = 6;
    	}
    	if (this.props.character === "MorkaasNeutral" && this.count !== 7) {
    		this.setState({
    			imgUrl: <img src={MorkaasNeutral} alt={MorkaasNeutral} className={this.props.type}/>,
    		});
    		this.count = 7;
    	}
    	if (this.props.character === "MorkaasHappy" && this.count !== 8) {
    		this.setState({
    			imgUrl: <img src={MorkaasHappy} alt={MorkaasHappy} className={this.props.type}/>,
    		});
    		this.count = 8;
		}

		if (this.props.character === "MorkaasBored" && this.count !== 9) {
    		this.setState({
    			imgUrl: <img src={MorkaasBored} alt={MorkaasBored} className={this.props.type}/>,
    		});
    		this.count = 9;
		}
		if (this.props.character === "SelenaNeutral" && this.count !== 10) {
    		this.setState({
    			imgUrl: <img src={SelenaNeutral} alt={SelenaNeutral} className={this.props.type}/>,
    		});
    		this.count = 10;
		}
		if (this.props.character === "SelenaHappy" && this.count !== 11) {
    		this.setState({
    			imgUrl: <img src={SelenaHappy} alt={SelenaHappy} className={this.props.type}/>,
    		});
    		this.count = 11;
		}
		if (this.props.character === "SelenaTired" && this.count !== 12) {
    		this.setState({
    			imgUrl: <img src={SelenaTired} alt={SelenaTired} className={this.props.type}/>,
    		});
    		this.count = 12;
		}
		if (this.props.character === "Hakaan" && this.count !== 13) {
    		this.setState({
    			imgUrl: <img src={Hakaan} alt={Hakaan} className={this.props.type}/>,
    		});
    		this.count = 13;
		}
		if (this.props.character === "none" && this.count !== 14) {
    		this.setState({
    			imgUrl: null,
    		});
    		this.count = 14;
    	}
    }

    render() {
		if (this.props.character !== "none") {
    	return (
    		<Fragment>
    			{this.state.imgUrl}
    		</Fragment>
		);
		}
		if (this.props.character === "none") {
			return null;
		}
    }
}
export default SpriteHandler;

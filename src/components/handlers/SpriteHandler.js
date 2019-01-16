import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Joksin from "../../images/sprites/joksin.png";
import Professor from "../../images/sprites/professor.png";
import Selena from "../../images/sprites/selena.png";
import Sjaksjok from "../../images/sprites/sjaksjok.png";
import Tando from "../../images/sprites/tando.png";
import Morkaas from "../../images/sprites/morkaas.png";
import Mirabeli from "../../images/sprites/mirabeli.png";
import Aeros from "../../images/sprites/aeros.png";
import Hakaan from "../../images/sprites/hakaan.png";

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
    	if (this.props.character === "Joksin" && this.count !== 1) {
    		this.setState({
				imgUrl: <img src={Joksin} alt={Joksin} className={this.props.type}/>,
    		});
    		this.count = 1;
    	}
    	if (this.props.character === "Professor Slimvolt" && this.count !== 2) {
    		this.setState({
    			imgUrl: <img src={Professor} alt={Professor} className={this.props.type}/>,
    		});
    		this.count = 2;
    	}
    	if (this.props.character === "Selena" && this.count !== 3) {
    		this.setState({
    			imgUrl: <img src={Selena} alt={Selena} className={this.props.type}/>,
    		});
    		this.count = 3;
    	}
    	if (this.props.character === "Sjaksjok" && this.count !== 4) {
    		this.setState({
    			imgUrl: <img src={Sjaksjok} alt={Sjaksjok} className={this.props.type}/>,
    		});
    		this.count = 4;
    	}
    	if (this.props.character === "Tando Stazak" && this.count !== 5) {
    		this.setState({
    			imgUrl: <img src={Tando} alt={Tando} className={this.props.type}/>,
    		});
    		this.count = 5;
    	}
    	if (this.props.character === "Morkaas" && this.count !== 6) {
    		this.setState({
    			imgUrl: <img src={Morkaas} alt={Morkaas} className={this.props.type}/>,
    		});
    		this.count = 6;
    	}
    	if (this.props.character === "Mirabeli" && this.count !== 7) {
    		this.setState({
    			imgUrl: <img src={Mirabeli} alt={Mirabeli} className={this.props.type}/>,
    		});
    		this.count = 7;
    	}
    	if (this.props.character === "Aeros" && this.count !== 8) {
    		this.setState({
    			imgUrl: <img src={Aeros} alt={Aeros} className={this.props.type}/>,
    		});
    		this.count = 8;
		}

		if (this.props.character === "Hakaan" && this.count !== 9) {
    		this.setState({
    			imgUrl: <img src={Hakaan} alt={Hakaan} className={this.props.type}/>,
    		});
    		this.count = 9;
		}
		if (this.props.character === "none" && this.count !== 10) {
    		this.setState({
    			imgUrl: null,
    		});
    		this.count = 10;
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

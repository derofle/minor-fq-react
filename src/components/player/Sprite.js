import React, { Component, Fragment } from "react";

import Joksin from "../../images/sprites/joksin.png";
import Professor from "../../images/sprites/professor.png";
import Selena from "../../images/sprites/selena.png";
import Sjaksjok from "../../images/sprites/sjaksjok.png";
import Tando from "../../images/sprites/tando.png";
import Morkaas from "../../images/sprites/morkaas.png";
import Mirabeli from "../../images/sprites/mirabeli.png";
import Aeros from "../../images/sprites/aeros.png";
import Hakaan from "../../images/sprites/hakaan.png";

class Sprite extends Component {
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
    	if (this.props.character === "Joksin" && this.count !== 1) {
    		this.setState({
    			imgUrl: <img src={Joksin} alt={Joksin} className="sprite"/>,
    		});
    		this.count = 1;
    	}
    	if (this.props.character === "Professor Slimvolt" && this.count !== 2) {
    		this.setState({
    			imgUrl: <img src={Professor} alt={Professor} className="sprite"/>,
    		});
    		this.count = 2;
    	}
    	if (this.props.character === "Selena" && this.count !== 3) {
    		this.setState({
    			imgUrl: <img src={Selena} alt={Selena} className="sprite"/>,
    		});
    		this.count = 3;
    	}
    	if (this.props.character === "Sjaksjok" && this.count !== 4) {
    		this.setState({
    			imgUrl: <img src={Sjaksjok} alt={Sjaksjok} className="sprite"/>,
    		});
    		this.count = 4;
    	}
    	if (this.props.character === "Tando Stazak" && this.count !== 5) {
    		this.setState({
    			imgUrl: <img src={Tando} alt={Tando} className="sprite"/>,
    		});
    		this.count = 5;
    	}
    	if (this.props.character === "Morkaas" && this.count !== 6) {
    		this.setState({
    			imgUrl: <img src={Morkaas} alt={Morkaas} className="sprite"/>,
    		});
    		this.count = 6;
    	}
    	if (this.props.character === "Mirabeli" && this.count !== 7) {
    		this.setState({
    			imgUrl: <img src={Mirabeli} alt={Mirabeli} className="sprite"/>,
    		});
    		this.count = 7;
    	}
    	if (this.props.character === "Aeros" && this.count !== 8) {
    		this.setState({
    			imgUrl: <img src={Aeros} alt={Aeros} className="sprite"/>,
    		});
    		this.count = 8;
		}

		if (this.props.character === "Hakaan" && this.count !== 9) {
    		this.setState({
    			imgUrl: <img src={Hakaan} alt={Hakaan} className="sprite"/>,
    		});
    		this.count = 9;
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
export default Sprite;

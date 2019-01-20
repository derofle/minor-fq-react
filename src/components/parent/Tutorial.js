import React, { Component, Fragment } from "react";
import Swipe from "react-swipe-component";
import PropTypes from "prop-types";

class Tutorial extends Component {
	static propTypes = {
    	history: PropTypes.object,
	}

	state = {
		tutorialText: ["Voordat we beginnen vertellen we kort het een en ander over de website waarop jij het avontuur volgt: Boven deze tekst vind je de “Missie Controle”. Dit is een plaats waar je de vooruitgang van jouw kind in het verhaal kan volgen. Je navigeert door middel van de linker en rechter knoppen (voor- en achteruit) en de middelste knop zet het spel op pauze. Veeg naar links om verder te gaan.", "Het pagina symbool  brengt jou naar een overzicht van alle missies. Hier kun je uitgebreide beschrijvingen en informatie vinden over alle missies en ook over de desbetreffende voorbereidingen voor elke missie. (let op: deze pagina is momenteel nog niet functioneel)", "Het icoontje met de ‘?’ brengt jou naar een pagina met veelgestelde vragen. (let op: deze pagina is momenteel nog niet functioneel maar momenteel staat hier een nummer vermeld waar je contact mee kan opnemen bij vragen en/of problemen)", "Het tandwiel brengt jou op de pagina vol instellingsmogelijkheden. Hier kun je onder andere het geluid dempen en de taal aanpassen.", "Indien je het nog niet hebt gedaan raden wij jou aan om het speelboek door te lezen. Maak je klaar om de wereld te redden!"],
		currentText: null,
		counter: 0,
	}

	componentDidMount() {
		this.setState({
			currentText: this.state.tutorialText[this.state.counter],
		});
	}

	onSwipeLeftListener = () => {
		if (this.state.counter <= this.state.tutorialText.length - 2) {
			this.setState({
				currentText: this.state.tutorialText[this.state.counter + 1],
				counter: this.state.counter + 1,
			});
		} else {
			this.props.tutorialCompleted();
		}
	}

	onSwipeRightListener = () => {
		if (this.state.counter > 0) {
			this.setState({
				currentText: this.state.tutorialText[this.state.counter - 1],
				counter: this.state.counter - 1,
			});
		}
	}

    render() {
    		return (
    			<Fragment>

				<div className="blur"></div>
					<Swipe
					nodeName="div"
					className="Tutorial"
					mouseSwipe={false}
					onSwipeEnd={this.onSwipeEnd}
					onSwipedLeft={this.onSwipeLeftListener}
					onSwipedRight={this.onSwipeRightListener}
					onSwipedDown={this.onSwipeDownListener}
					onSwipedUp={this.onSwipeUpListener}
					onSwipe={this.onSwipeListener}>
					<div className="tutorial-name"><p>Welcome</p></div>
    					<p>Welkom bij Family Quest</p>
						<p>{this.state.currentText}</p>

    			</Swipe>
    			</Fragment>
    		);
    }
}

export default Tutorial;

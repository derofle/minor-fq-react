import React, { Component, Fragment } from 'react';
import joksinSprite from '../images/sprites/Joksin.png';

class DialogueBox extends Component {

    render() {
        const { character, dialogue } = this.props.details;
        return (
            <Fragment>
                <img src={joksinSprite} alt="" className="speech-sprite"/>
                <div className="dialogue-box">
                    <p>{dialogue}</p>
                </div>
                <div className="speech-box"><p>{character}</p></div>
                <button onClick={this.props.nextDialogue} className="next-button">Next</button> 
            </Fragment>
        )
    }
}

export default DialogueBox;
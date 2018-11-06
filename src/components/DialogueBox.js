import React, { Component } from 'react';
import joksinSprite from '../images/sprites/Joksin.png';

class DialogueBox extends Component {



    render() {
        const { character, dialogue } = this.props.details;


        return (
            <div>
                <img src={joksinSprite} alt="" className="speech-sprite"/>
                <div className="dialogue-box">
                    <p>{dialogue}</p>
                </div>
                <div className="speech-box"><p>{character}</p></div>
                <button onClick={this.props.nextDialogue} className="next-button">Next</button>
                
            </div>
        )
    }
}

export default DialogueBox;
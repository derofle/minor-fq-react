import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DialogueBox from './DialogueBox';
import Sprite from './Sprite';
import NameBox from './NameBox';
import Background from './Background';

class DialogueScreen extends Component {

    static propTypes = {
        details: PropTypes.shape({
            character: PropTypes.string,
            dialogue: PropTypes.string,
            location: PropTypes.string,
            type: PropTypes.string
        }),
        nextDialogue: PropTypes.func
    }

    render() {
        const { character, dialogue, location, type } = this.props.details;
        if (type === "dialogue") {
            return (
                <Fragment>
                <div className="dialogue-window">
                    <Background location={location} />
                    <Sprite character={character} />
                    <NameBox character={character} />
                    <DialogueBox dialogue={dialogue}/>
                    <button onClick={this.props.nextDialogue} className="next-button">Next</button> 
                </div>
                </Fragment>
            );
        }
        if (type === "mission") {
            return null;
        }
    }
}



export default DialogueScreen;
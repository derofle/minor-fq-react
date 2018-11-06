import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingPage extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();

    goToChildSection = (event) => {
        event.preventDefault();
        const code = this.myInput.current.value;
        this.props.history.push(`/story/${code}`);
    }

    goToParentSection = (event) => {
        event.preventDefault();
        const code = this.myInput.current.value;
        this.props.history.push(`/story/${code}`);
    }


    render() {
        return (
            <div className="div-landingPage">
                <form className="landingPageForm">
                    <h2>Enter a Code</h2>
                    <input 
                        type="text" 
                        ref={this.myInput}
                        required 
                        placeholder="Input Code Here" 
                    />
                    <div className="landingButtons">
                        <button type="submit" onClick={this.goToChildSection}>Child Section</button>
                        <button type="submit" onClick={this.goToParentSection}>Parent Section</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LandingPage;
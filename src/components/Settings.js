import React, { Component, Fragment } from 'react';


class Settings extends Component {

    render() {
        if (this.props.cogPressed) {
            return (
                <div className="settings-box">
                    <p>Settings here please.</p>
                    <button onClick={this.props.closeSettings}>Close</button>
                </div>
            )
        } else if (!this.props.cogPressed) {
            return null;
        }
    }
}

export default Settings;
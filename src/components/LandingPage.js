import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Loading from "./handlers/Loading";

class LandingPage extends Component {
    static propTypes = {
    	history: PropTypes.object,
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push(`/menu`);
        }, 3000);
    }

    render() {
    	return (
    		<Fragment>
                <Loading />
            </Fragment>
    	);
    }
}

export default LandingPage;

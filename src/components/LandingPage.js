import React, { Component, Fragment } from "react";
import Loading from "./controllers/Loading";

class LandingPage extends Component {
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

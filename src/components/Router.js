import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import App from "../App";
import NotFound from "./NotFound";
import Aframe from "../AFrame";

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/story/:storyID" component={App} />
			<Route path="/missioncontrol/:storyID" component={App} />
			<Route path="/aframe" component={Aframe} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

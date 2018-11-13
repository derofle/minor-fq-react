import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "../App";
import NotFound from "./NotFound";
import AFrame from "../AFrame";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/aframe" component={AFrame} />
			<Route path="/story/:storyID" component={App} />
			<Route path="/missioncontrol/:storyID" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;

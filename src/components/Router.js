import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import MainMenu from "./MainMenu";
import InputCode from "./InputCode";
import App from "../App";
import NotFound from "./NotFound";
import Finish from "./Finish";
import Aframe from "../AFrame";
import SwipeDemo from "./SwipeDemo";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/menu" component={MainMenu} />
			<Route path="/inputcode" component={InputCode} />
			<Route path="/story/:storyID" component={App} />
			<Route path="/missioncontrol/:storyID" component={App} />
			<Route path="/aframe" component={Aframe} />
			<Route path="/swipedemo" component={SwipeDemo} />
			<Route path="/finish" component={Finish} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;

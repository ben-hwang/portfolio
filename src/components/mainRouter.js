import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LandingPage from "./landingPage.js";
import AboutMe from "./aboutMe.js";
import Experience from "./experience.js";
import ContactMe from "./contactMe.js";

import { TransitionGroup, CSSTransition } from 'react-transition-group';

//this is where we set all our routes
const MainRouter = () => (
    <Route
        render={({ location }) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade">

                    <Switch location={location}>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/portfolio" component={LandingPage} />
                        <Route path="/aboutMe" component={AboutMe} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/contactMe" component={ContactMe} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}
    />
);

export default MainRouter;
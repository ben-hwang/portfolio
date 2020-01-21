import React, { Component } from 'react';

//css file imports
import './CSS/App.css';
import './CSS/landingPage.css'
import './CSS/aboutMe.css'
import './CSS/experience.css'
import './CSS/contactMe.css'

//mdl imports
import { Layout, Header, Content} from 'react-mdl';

//react-router-dom imports
import { NavLink } from 'react-router-dom';

//importing the mainRouter.js
import MainRouter from './components/mainRouter.js'

import background from './components/images/background.jpeg';

// This is the main layout
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { location: 0 };
    }

    switchLocation(location) {
        switch(location) {
            // case 0: return { background: 'linear-gradient(to right, #BD3F32, #CB356B)'};
            case 0: return { backgroundImage:`url(${background})`};
                // backgroundImage:`url(${car})`
            case 1: return { background: 'black' };
            case 2: return { background: '#FFDFD3' };
            case 3: return { background: 'white' };
            default: return { background: 'black' };
        }
    }

    switchLocationNav(location) {
        switch(location) {
            case 0: return {color: 'white'};
            case 1: return {color: 'white'};
            case 2: return {color: 'black'};
            case 3: return {color: 'black'};
            default: return {color: 'white'};
        }
    }

    render() {
        const headerColor = this.switchLocation(this.state.location);
        const linkColor = this.switchLocationNav(this.state.location);

        return (
            <div className="layout">
                <Layout>
                    <Header title=" " style={headerColor} waterfall>
                        <NavLink onClick={() => this.setState({ location: 0 })}
                                 style={linkColor} className="nav-link" to={"/"}>Introduction</NavLink>
                        <NavLink onClick={() => this.setState({ location: 1 })}
                                 style={linkColor} className="nav-link" to="/aboutMe">About Me</NavLink>
                        <NavLink onClick={() => this.setState({ location: 2 })}
                                 style={linkColor} className="nav-link" to="/experience">Experience</NavLink>
                        <NavLink onClick={() => this.setState({ location: 3 })}
                                 style={linkColor} className="nav-link" to="/contactMe">Contact Me</NavLink>
                    </Header>

                    <Content>
                        <div className="page-content"/>
                        {/*body of app is going to be between content*/}
                        <MainRouter/>
                    </Content>

                </Layout>
            </div>
        )
    }
}

export default App;

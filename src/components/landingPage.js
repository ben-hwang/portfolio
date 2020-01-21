import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import me from './images/me.jpg';
import background from './images/background.jpeg';

import Typewriter from 'typewriter-effect';

class LandingPage extends Component {

    render() {
        return (
            <div style={{width: '100%', margin: 'auto', backgroundImage:`url(${background})`}}>
                <Grid className="landingPage-grid">

                    <Cell col={3} align="middle">
                    </Cell>

                    <Cell col={4} align="middle">
                        <img
                            src={me}
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>

                    <Cell col={4} align="middle">
                        <div className="banner-text">
                            <h1>Hello World,<br/>
                                I'm Ben!</h1>

                            <h2>
                                <Typewriter
                                    options={{
                                        strings: ['an aspiring Software Engineer',
                                                  'a business and computer science student',
                                                  'an avid dog lover',
                                                  'a competitive badminton player'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 10
                                    }}
                                />
                            </h2>
                        </div>
                    </Cell>

                    <Cell col={1} align="middle">
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default LandingPage;
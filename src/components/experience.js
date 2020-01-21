import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

import sap from './images/sap.png';
import creativeLabs from './images/creative-labs.jpeg'
import ubc from './images/ubc.jpg'

import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Experience extends Component {
    render() {
        return (
            <div className="experience-page">
                <br/><br/><br/><br/><br/><br/><br/><br/>

                <Grid className="experience-grid">

                    <Cell className="cell1" style={{width: '450px', height: '350px', margin: 'auto'}} col={4} align="middle" shadow={1}>

                        <Flippy style={{width: '450px', height: '350px', margin: 'auto'}}
                                flipOnHover="true">
                            <BackSide>
                                <text style={{color: "#1661BE"}}>From Jan 2019 to Aug 2019,<br/>
                                                                 I interned as an Agile Developer in Vancouver, Canada.<br/></text>

                                <text style={{color: "#00B9F2"}}><br/>There I had the opportunity to work on SAP Analytics Cloud<br/>
                                    building features, fixing bugs and maintaining the E2E automation framework.</text>
                            </BackSide>
                            <FrontSide>
                                <br/><br/><br/>
                                <img
                                    src={sap}
                                    alt="sap"
                                />
                            </FrontSide>
                        </Flippy>

                    </Cell>

                    <Cell className="cell2" style={{width: '450px', height: '350px', margin: 'auto'}} col={4} align="middle" shadow={1}>

                        <Flippy style={{width: '450px', height: '350px', margin: 'auto'}}
                                flipOnHover="true">
                            <BackSide>
                                <text style={{color: "#c23b22"}}>Between Sep 2019 and Dec 2019,<br/>
                                                                 I was a Software Developer Intern in Vancouver, Canada.<br/></text>

                                <text style={{color: "white"}}><br/>I helped develop features as a Game Developer on Puzzle Hockey.<br/>
                                                                    While I was there, I worked on the Player vs Player feature, which enabled real time battling between users.</text>
                            </BackSide>
                            <FrontSide>
                                <br/><br/><br/><br/><br/><br/>
                                <img
                                    src={creativeLabs}
                                    alt="creativeLabs"
                                />
                            </FrontSide>
                        </Flippy>

                    </Cell>

                    <Cell className="cell3" style={{width: '450px', height: '350px', margin: 'auto'}} col={4} align="middle" shadow={1}>

                        <Flippy style={{width: '450px', height: '350px', margin: 'auto'}}
                                flipOnHover="true">
                            <BackSide>
                                <text style={{color: "#002145"}}>From Sep 2018 to Dec 2018,<br/>
                                                                 I worked as a Research Assistant, studying the validity of Amazon reviews on marketplace.<br/></text>

                                <text style={{color: "white"}}><br/>Currently, I work as a Teaching Assistant for the Relational Databases course (CS304),
                                                                    leading multiple weekly labs and assisting in course processes.<br/></text>
                            </BackSide>
                            <FrontSide>
                                <br/><br/><br/>
                                <img
                                    src={ubc}
                                    alt="ubc"
                                />
                            </FrontSide>
                        </Flippy>

                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Experience;
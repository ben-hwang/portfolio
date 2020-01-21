import React, { Component } from 'react';
import { Grid, Cell, FABButton } from 'react-mdl';

import badminton from './images/badminton.png'
import muaythai from './images/muaythai.png'
import movie from './images/movie.png'
import snowboard from './images/snowboard.png'
import climbing from './images/climbing.png'

import Carousel from 'react-bootstrap/Carousel'
import { IoIosArrowDropdownCircle } from "react-icons/io";

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {index: 0, direction: null};
        this.handleSelect = this.handleSelect.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    scrollToBottom() {
        this.end.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <div>
                <Grid className="aboutMe-grid" noSpacing="true">

                    <Cell col={6} align="middle">

                        <h1>
                            <text style={{fontSize: 45, color: "#77dd77"}}>
                                Who am I?&nbsp;&nbsp;<br/>
                            </text>

                            <text>
                                --&nbsp;&nbsp;<br/>
                                I am a Combined Major in Business and&nbsp;&nbsp;<br/>
                                Computer Science studying in my 4th year at UBC&nbsp;&nbsp;<br/><br/>
                                While I can handle the&nbsp;
                            </text>

                            <text style={{color: "#77dd77"}}>
                                business side&nbsp;&nbsp;<br/>
                            </text>

                            <text>
                                my passion is in&nbsp;
                            </text>

                            <text style={{color: "#77dd77"}}>
                                software engineering&nbsp;&nbsp;<br/><br/>
                            </text>

                            <text>
                                My current interests (they are ever-evolving)&nbsp;&nbsp;<br/>
                                lie within&nbsp;
                            </text>

                            <text style={{color: "#77dd77"}}>
                                data analytics&nbsp;&nbsp;<br/>
                            </text>

                            <text>and&nbsp;</text>

                            <text style={{color: "#77dd77"}}>
                                back-end development&nbsp;&nbsp;<br/>
                            </text>

                            <text>
                                --&nbsp;&nbsp;<br/>
                            </text>
                        </h1>

                    </Cell>

                    <Cell col={6} align="middle">

                        <h2>
                            <text style={{fontSize: 45, color: "#77dd77"}}>
                                &nbsp;&nbsp;What am I?<br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;--<br/>
                                &nbsp;&nbsp;I am a&nbsp;
                            </text>

                            <text style={{color: "#77dd77"}}>
                                lifelong learner<br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;I enjoy learning new things no matter the area<br/>
                                &nbsp;&nbsp;Along my journey, I created this site with React!<br/><br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;I am&nbsp;
                            </text>

                            <text style={{color: "#77dd77"}}>
                                self motivated<br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;After 10 years of competitive badminton<br/>
                                &nbsp;&nbsp;through successes and failures<br/>
                                &nbsp;&nbsp;I've developed
                            </text>

                            <text style={{color: "#77dd77"}}>
                                &nbsp;mental fortitude<br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;and a reliable
                            </text>

                            <text style={{color: "#77dd77"}}>
                                &nbsp;work ethic<br/>
                            </text>

                            <text>
                                &nbsp;&nbsp;--
                            </text>

                        </h2>

                    </Cell>

                    <FABButton onClick={ this.scrollToBottom } mini colored ripple>
                        <IoIosArrowDropdownCircle />
                    </FABButton>

                </Grid>

                <div className="free-time">

                    <Grid noSpacing="true">

                        <Cell col={4} align="middle">
                        </Cell>

                        <Cell col={4} align="middle">
                            <text style={{fontSize: 25, color: "#77dd77"}}>In my free time you can find me</text>
                            <Carousel
                                activeIndex={index}
                                direction={direction}
                                onSelect={this.handleSelect}

                                nextIcon=""
                                prevIcon=""

                                pauseOnHover="true"
                                interval="1300">

                                <Carousel.Item>

                                    <Grid>
                                        <Cell col={1} align="middle"></Cell>

                                        <Cell col={4} align="middle">
                                            <text>Playing competitive badminton</text>
                                        </Cell>

                                        <Cell col={4} align="middle">
                                            <img
                                                src={badminton}
                                                alt="badminton"
                                            />
                                        </Cell>
                                    </Grid>

                                </Carousel.Item>

                                <Carousel.Item>

                                    <Grid>
                                        <Cell col={1} align="middle"></Cell>

                                        <Cell col={4} align="middle">
                                            <text>Training in Muay Thai</text>
                                        </Cell>

                                        <Cell col={4} align="middle">
                                            <img
                                                src={muaythai}
                                                alt="muaythai"
                                            />
                                        </Cell>
                                    </Grid>

                                </Carousel.Item>

                                <Carousel.Item>

                                    <Grid>
                                        <Cell col={1} align="middle"></Cell>

                                        <Cell col={4} align="middle">
                                            <text>Watching a mystery thriller</text>
                                        </Cell>

                                        <Cell col={4} align="middle">
                                            <img
                                                src={movie}
                                                alt="movie"
                                            />
                                        </Cell>
                                    </Grid>

                                </Carousel.Item>

                                <Carousel.Item>

                                    <Grid>
                                        <Cell col={1} align="middle"></Cell>

                                        <Cell col={4} align="middle">
                                            <text>Snowboarding</text>
                                        </Cell>

                                        <Cell col={4} align="middle">
                                            <img
                                                src={snowboard}
                                                alt="snowboard"
                                            />
                                        </Cell>
                                    </Grid>

                                </Carousel.Item>

                                <Carousel.Item>

                                    <Grid>
                                        <Cell col={1} align="middle"></Cell>

                                        <Cell col={4} align="middle">
                                            <text>Climbing and bouldering</text>
                                        </Cell>

                                        <Cell col={4} align="middle">
                                            <img
                                                src={climbing}
                                                alt="climbing"
                                            />
                                        </Cell>
                                    </Grid>

                                </Carousel.Item>

                            </Carousel>

                        </Cell>

                        <Cell col={4} align="middle"></Cell>
                    </Grid>

                </div>


                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.end = el; }}>
                </div>

            </div>
        )
    }
}

export default AboutMe;
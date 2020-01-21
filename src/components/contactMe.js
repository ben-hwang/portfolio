import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div>

                <Grid className="contactMe-grid" nospacing="true">
                    <Cell col={12} align="middle">
                        <h1><br/><br/>Let's chat!<br/></h1>

                        <h2>I am currently looking for full-time Software Engineering roles.<br/></h2>
                    </Cell>

                    <Cell col={12} align="middle">
                        <text>You can get in touch with me on </text>
                        <a href="https://www.linkedin.com/in/benhwang1997" target="_blank">LinkedIn</a>
                        <text>, </text>

                        <a href="mailto: ben-hwang@outlook.com"  target="_blank">Email</a>
                        <text> or my mobile phone at (778) 892-2882!<br/></text>

                        <text>Check out my work on </text>
                        <a href="https://github.com/ben-hwang" target="_blank">GitHub</a>

                        <text> or </text>
                        <a href="https://devpost.com/ben-hwang" target="_blank">Devpost</a>
                        <text> as well!<br/><br/></text>
                    </Cell>

                    <Cell col={12} align="middle">
                        <h3>Got a question about a project?<br/>
                            Am I a great fit for your company?<br/>
                            Want to chat?<br/>
                            Please do not hesitate to reach out!<br/><br/></h3>
                    </Cell>

                    {/*<a className="resume" href={Pdf} target="_blank">&nbsp;See my Resume here</a>*/}
                </Grid>
            </div>
        )
    }
}

export default Contact;
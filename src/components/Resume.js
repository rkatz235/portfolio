import React, { Component } from 'react'
import '../styles/resume.css';
import resume from '../img/KatzRachelResume.jpg';

export class Resume extends Component {
    render() {
        return (
            <div className="page-container resume-page">
                <a target="__blank" href="https://resume.creddle.io/resume/jha9e4t38h5"><img alt="link to resume" width="563px" height="750px" src={resume} /></a>
            </div>
        )
    }
}

export default Resume

import React, { Component } from 'react'
import '../styles/home.css';
export class Home extends Component {
    render() {
        return (
            <div className="page-container home-page">
                <div className="home-text" >
                    <div className="headline">
                        <p>Hello!  I am a front-end developer working mostly in ReactJS.  My experience is largely within a Node environment.  
                        I graduated from Oberlin College with a BA in computer science and studied web development at General Assembly.
                        I have worked with small teams, individual clients, and teams scattered across the world!  I also love teaching and have 
                        spent three summers working with Girls Who Code where I was able to experience corporate culture at AoL, Viacom, and Amazon.
                        I hope to join teams both large and small throughout my career to deliver trendy designs with a focus on user friendliness.</p>
                    </div>
                    <div className="skills">
                        <ul className="tag-list">
                            <li className="tag">ReactJS</li>
                            <li className="tag">jQuery</li>
                            <li className="tag">Bootstrap</li>
                            <li className="tag">JavaScript</li>
                            <li className="tag">Node.js</li>
                            <li className="tag">Umbraco</li>
                            <li className="tag">Wordpress</li>
                            <li className="tag">HTML/CSS</li>

                        </ul>
                    </div>
                </div>
                <div className="home-img">
                    <img alt="rachel katz profile" src={require("../img/profile.jpg")}/>
                </div>
            </div>
        )
    }
}

export default Home;

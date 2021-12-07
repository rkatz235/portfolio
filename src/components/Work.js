import React, { Component } from 'react'
import { Link }
from 'react-router-dom';
import '../styles/work.css';

export class Work extends Component {
    render() {
        return (
            <div className="page-container work-page">
                <div className="work-list">

                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/0">
                                <h2>THREE Insurance</h2>
                            </Link>
                            <ul className="tag-list">
                                <li className="tag">Umbraco</li>
                                <li className="tag">ASP.Net</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">Responsive</li>
                                <li className="tag">Microsoft Azure</li>
                            </ul>
                        </div>

                        <div className="work-image">
                            <Link to="/work/0">
                            <img alt="three insurance screenshot" src={require("../img/three/three_claims_desk.png")}  />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/3">
                                <h2>Wholefield's</h2>
                            </Link>
                            <h3>Coming Soon</h3>
                            <ul className="tag-list">
                                <li className="tag">Wordpress</li>
                                <li className="tag">Shopify</li>
                                <li className="tag">React</li>
                            </ul>
                        </div>
                        <div className="work-image">
                            <Link to="/work/3">
                            <img alt="wholefields screenshot" src={require("../img/wholefields/wholefields_adobe.png")}  />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/1">
                                <h2>Alev Studios</h2>
                            </Link>
                            <ul className="tag-list">
                                <li className="tag">PHP</li>
                                <li className="tag">GoDaddy</li>
                            </ul>
                        </div>

                        <div className="work-image">
                            <Link to="/work/2">
                            <img alt="alev studios screenshot" src={require("../img/alev/alev_home.png")}  />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/2">
                                <h2>Gary Bennett Architecture</h2>
                            </Link>
                            <ul className="tag-list">
                                <li className="tag">ReactJS</li>
                                <li className="tag">jQuery</li>
                                <li className="tag">Responsive</li>

                            </ul>
                        </div>
                        <div className="work-image">
                            <Link to="/work/2">
                            <img alt="gary bennett screenshot" src={require("../img/gary/gary_home.png")}  />
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Work

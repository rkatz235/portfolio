import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import '../styles/worktemplate.css';

export class WorkTemplate extends Component {
    constructor(){
        super();
        
        this.projInfos = [
            {
                title: "Three Insurance",
                client: "Berkshire Hathaway",
                link: "threeinsurance.com",
                linkText: "threeinsurance.com",
                tags: ["Microsoft Azure", "Umbraco", "jQuery"],
                des: "At Avanade, a subsidiary of Accenture, I joined Berkshire Hathaway's team to build out the front end for their new small business insurance program, Three Insurance.  I was the only front end engineer as it was a start-up environment and thus had to communicate limitations and requirements for mobile-friendly prototypes with designers and API usage with back-end engineers.  After designing a solution I worked with new front-end dev hires to organize them on sections of the project that best aligned with their skills.  I have since been able to use these tools of management, self-directed solution design, and ground-up development to ensure my current clients have control over their portfolios and online stores and are confident in the technologies that are used.",
                imgs: [
                    require("../img/three/three_home_desk.png"),
                    require("../img/three/three_claims_desk.png"),
                    require("../img/three/three_policy_desk.png")
                ]
            },
            {
                title: "Alev Studios",
                client: "Alevita",
                link: "alevstudios.com",
                linkText: "alevstudios.com",
                tags: ["PHP", "jQuery"],
                des: "The goal with this project was to implement major design and content updates while migrating it to GoDaddy servers.  The original website existed on a server in Ukraine and a large part of the process including interacting with developers in Ukraine to gain permissions to accomplish the migration.  Design updates included mobile responsiveness, content changes and additions, and user-friendliness.",
                imgs: [
                    require("../img/alev/alev_home.png"),
                    require("../img/alev/alev_project.png"),
                    require("../img/alev/alev_projects.png")

                ]
            },
            {
                title: "Gary Bennett Architecture",
                client: "Gary Bennett",
                link: "#",
                linkText: "Coming Soon",
                tags: ["React", "jQuery"],
                des: "After receiving site designs from Gary Bennett I used React for implementation.  I advised Gary in mobile-friendly and responsive additions to the prototype.  I used an API for the slideshow and the site is currently in testing.",
                imgs: [
                    require("../img/gary/gary_home.png"),
                    require("../img/gary/gary_project_2.png"),
                    require("../img/gary/gary_projects.png")
                ]
            }, 
            {
                title: "Wholefield's", 
                client: "Wholefield's Foods", 
                link: "#",
                linkText: "Coming Soon",
                tags: ["React", "Wordpress", "WooCommerce"],
                des: "This site is currently in its design changes.  It is to be built on Wordpress with WooCommerce as the e-commerce platform.  The site will include admin and editor accounts so content can be added and updated by members of the company.  I am currently working with SEO specialists in NYC and designers in Vancouver.  The site is scheduled to be launched at the end of 2020.",
                imgs: [
                    require("../img/wholefields/wholefields_adobe.png"),
                    require("../img/wholefields/whole_intro.png"),
                    require("../img/wholefields/whole_products.png"),
                    require("../img/wholefields/whole_product.png"),
                    require("../img/wholefields/whole_footer.png")
                ]
            }
        ]
    }
    
    render() {
        let curProj = this.projInfos[this.props.match.params.id];
        return (
            <div className="page-container project-page">
                <div className="project-text">
                    <div className="info">
                        <div className="title">
                            <h1>{curProj.title}</h1>
                        </div>
                        <div className="info-deets">
                            <div>
                                <p>Client</p>
                                <p>{curProj.client}</p>
                            </div>
                            <div>
                                <p>Link</p>
                                <a href={curProj.link}>{curProj.linkText}</a>
                            </div>
                            <ul className="tag-list">
                                {curProj.tags.map((el, i) => 
                                    <li key={i} className="tag">{el}</li>
                                )}
                            </ul>
                        </div>

                    </div>
                    <div className="des">
                        <p>{curProj.des}</p>
                    </div>
                </div>
                <div className="project-slide">
                    <div className="title">
                        <h2>Screenshots</h2>
                    </div>
                    <Slide easing="ease">
                        {curProj.imgs.map((el, i) => (
                            <div className="each-slide">
                                <img src={el} />
                            </div>
                            
                            )
                        )}

                    </Slide>
                </div>
                {/* <div className="project-imgs">
                    {curProj.imgs.map((el, i) => <img key={i}  alt="website screenshot" src={el} />)}
                </div> */}
            </div>
        )
    }
}

export default WorkTemplate

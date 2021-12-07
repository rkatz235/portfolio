import React, { Component } from 'react'
import '../styles/profile.css';

export class Profile extends Component {
    render() {
        return (
            <div className="page-container profile-container">  
                {/* <div className="profile-section">
                    <div className="section-title">
                        <h1>Bio</h1>
                    </div>
                    <div className="section-details">
                        <p>We are a creative family whose passion is to tell human stories through the medium of picture and sound</p>

                        <p>To date we have honed our focus on feature length documentaries, short films, aligned brand content & music videos.</p>

                        <p>We also have our own record label and music production company; Audio Department Records.</p>
                    </div>
                </div> */}
                
                
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Experience</h1>
                    </div>
                    <div className="section-details">
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Front End Developer</h2>
                                <h4 className="exp-date">Oct '19 - Current</h4>
                                <h3 className="exp-loc">Freelance</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>Advise clients and created solutions for clients' portfolios and online stores.</li>
                                    <li>Clients ranging from architects, interior designers, plant-based ice cream companies, and higher education departments.</li>
                                    <li>Develop solutions using PHP, ReactJS, HTML, CSS, Wordpress, WooCommerce and Go Daddy to ensure clients have control over site content.</li>
                                    <li>Creation of responsive and mobile designs suitable for all platforms and devices.</li>
                                    <li>Communicate remotely with partners in Ukraine, Vancouver, and Oberlin, Ohio.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Junior Associate</h2>
                                <h4 className="exp-date">June '18 - July '19</h4>
                                <h3 className="exp-loc">Avanade</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>Traveled to Boston on a weekly basis to provide expertise in web development for Berkshire Hathaway's Three Insurance.</li>
                                    <li>Managed onboarding and activities of associates to build a front facing website in an agile environment.</li>
                                    <li>Designed and built a content management system with Umbraco to ease updating of site content.</li>
                                    <li>Worked in ASP.Net, JavaScript, CSS, HTML, and Microsoft Azure.</li>
                                    <li>Communicated with teams across continents and among departments including security, advertising, design and back-end.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Summer Immersion Lead Teacher</h2>
                                <h4 className="exp-date">Summer '15 - '17</h4>
                                <h3 className="exp-loc">Girls Who Code at Viacom, AoL, and Amazon</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>Managed a classroom of 20 high school students and two teaching assistants.</li>
                                    <li>Acted as liaison between Girls Who Code, students' parents, host company (Amazon, AoL, Viacom), and host company mentors.</li>
                                    <li>Taught Python, JavaScript, HTML, CSS, web development/design to both beginner and intermediate students.</li>
                                    <li>Created lesson plans, lecture slides, and assignments for both hard skills and soft skills (such as presentation, marketing, and interviewing).</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Sound Engineer Intern</h2>
                                <h3 className="exp-date">Sept '17 - Feb '18</h3>
                                <h3 className="exp-loc">Baby's All Right</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>Ensured shows stay on schedule by managing acts and conducting accurate changeovers.</li>
                                    <li>Managed changeovers between acts and set up/tear down of microphones, amplifiers, cables, and lights.</li>
                                    <li>Programmed lighting in sync with the performers’ style.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Production Assistant</h2>
                                <h3 className="exp-date">Sept '14 - May '16</h3>
                                <h3 className="exp-loc">Oberlin Conservatory Audio Services</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>Provided live sound reinforcement and recording services for classical, jazz, and electronic musicians in a variety of concert halls including churches.</li>
                                    <li>Handled camerawork and online streaming for filmed concerts.</li>
                                    <li>Processed and archived recorded recitals.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Education</h1>
                    </div>
                    <div className="section-details">
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Recurse Center</h2>
                                <h4 className="exp-date">June '20 - Sept '20</h4>
                                <h3 className="exp-loc">NYC, New York</h3>
                            </div>
                            <div className="exp-des">
                                <p>This self-directed, community-driven educational retreat for programmers allowed Rachel to self-study web development and generative art while collaborating with curious programmers of similar interests.  She also used her time and resources to further her knowledge in ReactJS and development.</p>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">General Assembly's Web Dev Immersive</h2>
                                <h4 className="exp-date">Feb 2018 - June 2018</h4>
                                <h3 className="exp-loc">NYC, New York</h3>
                            </div>
                            <div className="exp-des">
                                <p>Rachel received a scholarship to this coding bootcamp and learned web development fundamentals within a Node environment.  She created multiple demo projects using ReactJS, AngularJS, and Express.js.  Her final project was a web audio visualizer utilizing the AudioContext API and jQuery/CSS animations.</p>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Oberlin College</h2>
                                <h4 className="exp-date">Sept '13 - May '17</h4>
                                <h3 className="exp-loc">Oberlin, Ohio</h3>
                            </div>
                            <div className="exp-des">
                                <p>Rachel studied in the College’s Computer Science department and the Conservatory’s TIMARA (Technology in Music and Related Arts department) program.  Classes included mobile app development, AI, machine learning, OOP, algorithms and other computer science fundamentals.  She was able to collaborate with cross-disciplinary artists including dancers, film makers, and other musicians.  Additionally she combined her knowledge of music theory and machine learning to create Python programs that predict the composer of a given piece of classical sheet music.</p>
                            </div>
                    </div>
                    
                    </div>
                </div>
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Skills</h1>
                    </div>
                    <div className="section-details">
                        <ul className="tag-list">
                            <li className="tag">ReactJS</li>
                            <li className="tag">Node.js</li>
                            <li className="tag">Umbraco</li>
                            <li className="tag">Wordpress</li>
                            <li className="tag">jQuery</li>
                            <li className="tag">CSS/HTML</li>
                            <li className="tag">JavaScript</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile

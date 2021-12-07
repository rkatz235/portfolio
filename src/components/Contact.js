import React, { Component } from 'react';
import '../styles/contact.css';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Contact extends Component {
    constructor(){
        super();
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e){
        console.log('ye');
        e.preventDefault();
    }
    render() {
        return (
            <div className="page-container contact-page">
                <div className="contact-info">
                    <h1>Contact</h1>
                    <p>Feel free to reach out via email or text!  Look forward to hearing from you regarding any opportunities.</p>
                    <div className="contact-info-details">
                        <a href="tel:646-236-6015"><FontAwesomeIcon icon={faPhone} />646-236-6015</a>
                        <a href="mailto:rkatz235@gmail.com"><FontAwesomeIcon icon={faEnvelope} />rkatz235@gmail.com</a>
                    </div>
                </div>
                {/* <div className="contact-form">
                    <form className="contact-form" onSubmit={this.sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input className="button" type="submit" value="Send" id="form-submit"/>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default Contact

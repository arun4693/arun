/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import faqImage from '../assets/bannerImage/laptop.jpg';  // Ensure this path is correct

function ContactUs() {
    return (
        <div>
            {/* Header Section with Background Image */}
            <div
                style={{
                    backgroundImage: `url(${faqImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center'
                }}
            >
                <h1>Contact Us</h1>
                {/* Link to navigate back to the home page */}
                <p style={{ marginTop: '10px', fontSize: '18px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link> &gt; Contact Us
                </p>
            </div>

            {/* Contact Form and Google Map Section */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" style={{ backgroundColor: '#fff' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" placeholder="Enter Phone" style={{ backgroundColor: '#fff' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" style={{ backgroundColor: '#fff' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Enter Message" style={{ backgroundColor: '#fff' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.583355548315!2d-122.41990608503672!3d37.774929579759515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b4d12859%3A0x4a44026af0ce3a1f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1663429178230!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

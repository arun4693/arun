import React from 'react';

function Footer() {
    return (
        <div style={{ backgroundColor: '#0d295f', color: 'white', padding: '20px 0' }}>
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-3">
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://nicimmigration.com/assets/img/logo-1.jpg" // Add your logo image here
                                alt="NIC Immigration Services"
                                style={{ width: '150px' }}
                            />
                        </div>
                        <p style={{ marginTop: '10px', textAlign: 'center' }}>
                            NIC Immigration Services (NICIS) is an international migration and consultation services firm. We offer
                            services for skilled migration, Business, Student and Family VISAs. Our head office is in Sydney,
                            Australia.
                        </p>
                    </div>

                    {/* Visa Types Column */}
                    <div className="col-md-3">
                        <h5>Visa Types</h5>
                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>Skilled Migration VISA</li>
                            <li>Student VISA</li>
                            <li>Business VISA</li>
                            <li>Family VISA</li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>Prepare high quality applications</li>
                            <li>Prepare right supporting document</li>
                            <li>Get the right knowledge and VISA processing requirements</li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-md-3">
                        <h5>Contact</h5>
                        <p>NIC Immigration Services P.O. Box 653, Girraween, NSW 2146, Australia.</p>
                        <p>Email: <a href="mailto:nicvenkat@yahoo.com" style={{ color: 'white' }}>nicvenkat@yahoo.com</a></p>
                        <p>Phone: <a href="tel:+61423445159" style={{ color: 'white' }}>+61-423445159</a></p>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '20px' }}>
                    <a href="https://www.facebook.com" style={{ color: 'white', margin: '0 10px' }}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" style={{ color: 'white', margin: '0 10px' }}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com" style={{ color: 'white', margin: '0 10px' }}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                <div className="text-center" style={{ marginTop: '20px' }}>
                    <p>&copy; NIC 2020 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

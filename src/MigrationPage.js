// src/components/MigrationPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Card } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';



// Main Page Component
const MigrationPage = () => {
    return (
        <><div>
            <Carousel>
                <Carousel.Item>
                    <div style={styles.bannerContainer}>
                        <div style={styles.overlay}></div>
                        <div style={styles.content}>
                            <h1 style={styles.heading}>Change Your Life</h1>
                            <h1 style={styles.heading}>With Migration</h1>
                            <Button style={styles.button} variant="primary">Make An Appointment</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={styles.bannerContainer2}>
                        <div style={styles.overlay}></div>
                        <div style={styles.content}>
                            <h1 style={styles.heading}>Change Your Life</h1>
                            <h1 style={styles.heading}>With Migration</h1>
                            <Button style={styles.button} variant="primary">Make An Appointment</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={styles.bannerContainer3}>
                        <div style={styles.overlay}></div>
                        <div style={styles.content}>
                            <h4 style={styles.subheading}>DON'T LOOK FURTHER, HERE IS THE KEY</h4>
                            <h1 style={styles.heading}>How can we help you<br />immigrate to Australia?</h1>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* NIC Immigration Section */}
            <NICImmigration />

            {/* Visa Options Section */}
            <VisaOptions />

            {/* Services Section */}
            <Services />

            {/* Testimonials Section */}
            <div id="testimonials" className="container" style={{ marginTop: "50px" }}>
                <h2 className="text-center">Testimonials</h2>
                <TestimonialCard />
                <br></br><br></br><br></br><br></br><br></br>
            </div>
        </div><br></br></>
    );
};

// NICImmigration Component
const NICImmigration = () => {
    return (
        <div className="container" style={{ padding: "20px", textAlign: "center" }}>
            <h2>NIC IMMIGRATION</h2>
            <p style={{ marginBottom: "20px" }}>
                With over a decade of experience in the immigration industry, Thiru’s
                skills extend to the vast knowledge of expertise in the immigration
                industry beginning from skilled migration and then diversifying to other
                types of immigrations such as student visas and employment visas. His
                expertise in the industry has helped many students and professionals to
                seek successful migration opportunities in Australia.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://nicimmigration.com/assets/img/staff/tiru.jpg"
                        alt="Thiruvengadam Arumugam"
                        style={{
                            borderRadius: "50%",
                            maxWidth: "100px",
                            display: "block",
                            margin: "auto",
                        }}
                    />
                    <h4 style={{ marginTop: "15px" }}>Thiruvengadam Arumugam</h4>
                    <p>Principal Consultant</p>
                    <p style={{ fontStyle: "italic" }}>
                        (Migration Agents Registration Number: MARN 0741766)
                    </p>
                </div>

                <div className="col-md-6">
                    <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/sample-video-id" // Replace with actual video ID
                        title="21st Century Education"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ display: "block", margin: "auto" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

// VisaOptions Component
const VisaOptions = () => {
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h6 style={{ color: '#4682B4', fontWeight: 'bold' }}>WHAT TYPE OF VISA ARE YOU LOOKING FOR?</h6>
            <p>We are a team of immigration specialists guiding individuals, families, and corporates who aspire to migrate to Australia.</p>

            <div className="row mt-5">
                <div className="col-md-1"></div> {/* Adjust column space if needed */}
                <VisaCard
                    imgSrc="https://nicimmigration.com/assets/img/icons/1.jpg"
                    title="I WANT TO"
                    description="Sponsor My Partner or Parents"
                    color="#8A2BE2"
                />
                <VisaCard
                    imgSrc="https://nicimmigration.com/assets/img/icons/2.jpg"
                    title="I AM A"
                    description="Skilled Person & Want to Live and Work in Australia"
                    color="#4682B4"
                />
                <VisaCard
                    imgSrc="https://nicimmigration.com/assets/img/icons/3.jpg"
                    title="I WANT AN"
                    description="Employer Sponsorship Visa"
                    color="#FFA500"
                />
                <VisaCard
                    imgSrc="https://nicimmigration.com/assets/img/icons/4.jpg"
                    title="I WANT A"
                    description="Student Visa or Graduate Visa"
                    color="#4CAF50"
                />
                <VisaCard
                    imgSrc="https://nicimmigration.com/assets/img/icons/5.jpg"
                    title="I WANT TO"
                    description="Start a Business or Invest in Australia"
                    color="#90EE90"
                />
                <div className="col-md-1"></div> {/* Adjust column space if needed */}
            </div>
            <br></br>
        </div>
    );
};


// Services Component
const Services = () => {
    return (
        <div style={{ backgroundColor: '#000', padding: '40px 0' }}>
            <div className="container text-center">
                <h2 style={{ marginBottom: '20px', color: '#fff' }}>Our Services</h2>
                <p style={{ color: '#fff' }}>
                    We are very happy to provide free assessment advice with no obligation to sign or pay in advance to our services.
                </p>

                <div className="row" style={{ marginTop: '40px' }}>
                    <ServiceCard
                        imgSrc="https://nicimmigration.com/assets/img/70.jpg"
                        title="Work Visa"
                        description="Information on how to apply for work visas, skilled occupations in Australia, licensing requirements, and regional employment opportunities."
                    />
                    <ServiceCard
                        imgSrc="https://nicimmigration.com/assets/img/76.jpg"
                        title="Study Visa"
                        description="Learn more about student visa application processes and requirements."
                    />
                    <ServiceCard
                        imgSrc="https://nicimmigration.com/assets/img/73.jpg"
                        title="Business Visa"
                        description="Find out how to start a business in Australia, investment opportunities, and the criteria for business visa applications."
                    />
                </div>
            </div>
        </div>
    );
};

// Reusable ServiceCard Component
const ServiceCard = ({ imgSrc, title, description }) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{ padding: '20px', border: 'none', marginBottom: '30px' }}>
                <img src={imgSrc} alt={title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Reusable VisaCard Component
const VisaCard = ({ imgSrc, title, description, color }) => {
    return (
        <div className="col-md-2">
            <Card style={{ textAlign: 'center', margin: '10px', border: 'none' }}>
                <Card.Img src={imgSrc} style={{ height: '100px', objectFit: 'contain' }} />
                <Card.Body>
                    <h5 style={{ color }}>{title}</h5>
                    <p>{description}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

// Styling
const styles = {
    bannerContainer: {
        height: '80vh',
        background: 'url("https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc=") center center/cover no-repeat',
        position: 'relative',
    },
    bannerContainer2: {
        height: '80vh',
        background: 'url("https://c4.wallpaperflare.com/wallpaper/812/45/133/cute-girl-1920x1080-wallpaper-preview.jpg") center center/cover no-repeat',
        position: 'relative',
    },
    bannerContainer3: {
        height: '80vh',
        background: 'url("https://png.pngtree.com/background/20230604/original/pngtree-white-cruise-ship-in-deep-sea-ocean-water-picture-image_2873001.jpg") center center/cover no-repeat',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        textAlign: 'center',
        top: '30%',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: '1.5rem',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#1E90FF',
        border: 'none',
        padding: '10px 30px',
        fontSize: '1.2rem',
    },
};

export default MigrationPage;

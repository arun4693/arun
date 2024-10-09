import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const styles = {
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    bannerTextContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
    },
    bannerHeader: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    breadcrumb: {
        fontSize: '1.2rem',
    },
    breadcrumbLink: {
        color: 'white',
        textDecoration: 'none',
    },
    cardImage: {
        height: '150px',
        objectFit: 'cover',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '15px',
    },
    cardText: {
        fontSize: '0.9rem',
        color: '#555',
    },
    container: {
        marginTop: '50px',
    }
};

const VisaServices = () => {
    const services = [
        { title: "Skilled Migration", img: "https://nicimmigration.com/assets/img/services/1.png", description: "Australia is a developed country and one of the wealthiest in the world, with the world's 12th-largest economy.In 2012..." },
        { title: "Business Migration", img: "https://nicimmigration.com/assets/img/services/2.png", description: "Australia has a comprehensive economic policy framework in place. The economy is globally competitive and remains an..." },
        { title: "Employer Nomination", img: "https://nicimmigration.com/assets/img/services/3.png", description: "The Employer Nomination Scheme (ENS) enables Australian employers to nominate highly skilled overseas workers to fill..." },
        { title: "Family Migration", img: "https://nicimmigration.com/assets/img/services/4.png", description: "If you are married to an Australian citizen, Australian permanent resident or eligible New Zealand citizen, plan to..." },
        { title: "Student Visas", img: "https://nicimmigration.com/assets/img/services/5.png", description: "Selecting and following a suitable career path is one of the most critical decisions we make in our lifetime. Career..." },
        { title: "Work Visas", img: "https://nicimmigration.com/assets/img/services/6.png", description: "Annual turnover of at least A$ 500,000 in the main business or main businesses for at least 2 of the 4 fiscal years." },
    ];

    return (
        <div>
            {/* Top banner image */}
            <div style={styles.bannerContainer}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8x-rp7SM6XFJBf0L_nrWOJaGl5gptt_Riwo89m1XvA6ngEQY"  // Replace with the actual path of your uploaded image
                    alt="Visa Services Banner"
                    style={styles.bannerImage}
                />
                <div style={styles.bannerTextContainer}>
                    <h1 style={styles.bannerHeader}>Visa Services</h1>
                    <p style={styles.breadcrumb}>
                        <a href="/" style={styles.breadcrumbLink}>Home</a> {'>'} Visa Services
                    </p>
                </div>
            </div>

            {/* Visa Services Content */}
            <Container style={styles.container}>
                <Row>
                    {services.map((service, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card>
                                <Card.Img variant="top" src={service.img} style={styles.cardImage} />
                                <Card.Body>
                                    <Card.Title style={styles.cardTitle}>{service.title}</Card.Title>
                                    <Card.Text style={styles.cardText}>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default VisaServices;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const TestimonialCard = () => {
    const testimonials = [
        {
            name: "Seetharaman, Sivagami, Sandhiya",
            role: "Project Manager @ Infosys",
            location: "Chennai, India",
            message: `You were really patient in answering our queries and your thorough guidance helped us reach success at ease. You gave us the visibility and made us be sure of what was happening with our application and be sure of what to expect next. 
            There have been times when we nearly gave up, but you motivated us to keep going. Thank you for all the efforts and dedication you have put on our application to make this move possible. We would love to recommend you to our friends just like the way we got introduced to you.`,
            rating: 4,
            image: "https://nicimmigration.com/assets/images/testimonial/tes-v1-1.png"
        },
        {
            name: "Sivashanmugam, Muniappan (Siva) / Singapore",
            role: "Software Engineer",
            location: "San Francisco, USA",
            message: "Thiru was totally professional in his approach right from day one. He understood the clients' priorities and displayed a great sense of dedication and timing to file the visa application, communicate with the client, submit documents and answered questions in a highly professional and up-to-the-point manner. Very meticulous and detailed in his work. No fuss whatsoever. Top class service. I would certainly recommend Thiru for any prospective migrant. Thiru, please accept our sincere thanks.",
            rating: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iaf7fkHzHMhWzbrVb4BOpw7btA1nipoTiw&s"
        },
        {
            name: "Seetharaman, Sivagami, Sandhiya / Project Manager @ Infosys Technologies Limited",
            role: "Software Engineer",
            location: "Chennai, India",
            message: "You were really patient in answering our queries and your thorough guidance helped us reach success at ease. You gave us the visibility and made us be sure of what was happening with our application and be sure of what to expect next. There have been times when we nearly gave up, but you motivated us to keep going. Thank you for all the efforts and dedication you have to put on our application to make this move possible. We would love to recommend you to our friends just like the way we got introducued to you.",
            rating: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s"
        }
    ];

    const starRating = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className="star" style={{ color: i < rating ? '#FFD700' : '#e4e5e9' }}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <h2 style={styles.heading}>Our Customer Reviews</h2>
            <Carousel style={styles.carousel}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <Card style={styles.card}>
                            <div style={styles.imageContainer}>
                                <img
                                    src={testimonial.image}
                                    alt="customer"
                                    style={styles.image}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title style={styles.cardTitle}>
                                    <a href="#" style={styles.nameLink}>{testimonial.name}</a> / {testimonial.role}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={styles.location}>
                                    {testimonial.location}
                                </Card.Subtitle>
                                <div style={styles.rating}>{starRating(testimonial.rating)}</div>
                                <Card.Text style={styles.message}>
                                    {testimonial.message}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        position: 'relative',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1Hy6ioUWwbLUF12eNF8otixvdsqAblV7eQ&s) no-repeat center center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    heading: {
        color: '#fff',
        marginBottom: '20px',
        fontSize: '2rem',
        fontWeight: 'bold',
        zIndex: 2,
    },
    carousel: {
        width: '90%',
        maxWidth: '600px',
        marginTop: '200px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        zIndex: 2,
        opacity: 0.95,
        marginTop: '100px', // Increased marginTop to push card content further down
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        textAlign: 'center',
        marginBottom: '10px',
    },
    image: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        border: '3px solid #fff',
    },
    cardTitle: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    nameLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
    location: {
        fontSize: '0.8rem',
        marginBottom: '10px',
    },
    rating: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    message: {
        fontSize: '0.9rem',
        lineHeight: '1.4',
    },
    star: {
        color: '#FFD700',
        fontSize: '1.1rem',
    },
};


export default TestimonialCard;

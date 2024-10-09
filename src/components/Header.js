import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ padding: '20px 40px', justifyContent: 'space-between' }}>
            <Navbar.Brand href="#" className="mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw0NDhANDg4WGA8PGRcQDQ8OFRUWIBYgIiARHxkkKDQsJCYxJxMfLTEhLio3Li4uGB83ODMsNystLjcBCgoKDg0OGhAQGi0fHSUtLS0rLSstKzgtLSstLSstLS0tLSsrKy0tLSstLS0rLS0tLy0tKy0tKy0tKy0tNzctN//AABEIAEsASwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EACsQAAICAQIFAgUFAAAAAAAAAAABAgMRBCEFEjFRYUGBImJxkaETFHJzkv/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACERAQADAAIBBQEBAAAAAAAAAAABAhEDEiExMkFRoUIE/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAwAGDIAAAAAAMHMwZOiJr5zhHnrTnKL5uVdZrG8V5x08orvbq7ENOH8Tp1C5q5xfo03yyi+zi90yNOXXZqnFuwiHQAADmwNZSS6tL3wRm0GI9WpVkvg3iur9G+y7ldOXslNcSi9FH1WnVsHBuUezjs4v0kn3IXrsOxLk9Xw+6yx/q6fR6qSynZC79tP3SfU8/kpaJ8Rq+sx9vKPD/ANN55dVp/wCPEaJJezaITx3+K/qXbVtwvV21TrhZY7qbMxjJuDlCeMqLabTzh43Zo4rWr7p1XasOiNymULieplXGKrSlZJqEc9M9XJ+Elkz83JkZCdYVM4SbxO22yXy201xz4TefwYctb1nV0TjeOkl6URk+9moU/wAIhNM9I/Xe0ff4tNDVLClNx8KCxFLx3+pv4OPIUWlMNSsQdxXcS4RRqPisprss6JvMX9HJb4Kb8Vb+sanW0wpZcInVuqdNWvRafTfuLP8Ac8JfYyTwWp7fCyLxLaE5tSqlXNbx3yrJwaaam2kopp4xBZbz6I5Hf+oJ8ulok3FOSSl64eVnwzfSJxTKs185Kzn5W9nFbOSim1mTS332W26W/czcs+U6vBUTsx8GP7IV3w9msNFHS9/jFnZK0/C4dbKqc/K5NfZmjj/z0j3QjPLP2s4xxsuhriMhTrJHRkkAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==" // replace with your actual logo URL
                    alt="NIC Immigration Services"
                    style={{ width: '80px', height: 'auto', marginRight: '10px' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>NIC Immigration Services</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{ display: 'flex', alignItems: 'center' }}>
                    <Nav.Link href="/about-us" style={navLinkStyle}>About Us</Nav.Link>
                    <Nav.Link href="/visa-services" style={navLinkStyle}>VISA Services</Nav.Link>
                    <Nav.Link href="/news" style={navLinkStyle}>Migration News</Nav.Link>
                    <Nav.Link href="/testimonials" style={navLinkStyle}>Testimonials</Nav.Link>
                    <Nav.Link href="/faq" style={navLinkStyle}>FAQ</Nav.Link>
                    <Nav.Link href="/contact" style={navLinkStyle}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const navLinkStyle = {
    color: '#333',
    marginRight: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
};

export default Header;

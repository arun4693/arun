import React from 'react';
// Import your image if it's local
import bannerImage from '../assets/bannerImage/bannerImage.jpg'; // Adjust the path

const Testimonials = () => {
    const sectionStyle = {
        padding: '50px 20px',
        backgroundColor: '#f8f9fa',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        marginBottom: '20px',
    };

    const locationStyle = {
        color: '#007bff',
        fontSize: '16px',
    };

    const bannerStyle = {
        width: '100%',
        height: '200px',
        background: `url(${bannerImage}) center center/cover no-repeat`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const bannerTextStyle = {
        color: '#fff',
        fontSize: '36px',
        fontWeight: 'bold',
    };

    const breadcrumbStyle = {
        color: '#fff',
        marginTop: '10px',
        fontSize: '18px',
    };

    const breadcrumbLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    return (
        <>
            {/* Banner Section */}
            <div style={bannerStyle}>
                <div>
                    <h1 style={bannerTextStyle}>Testimonials</h1>
                    <p style={breadcrumbStyle}>
                        <a href="/" style={breadcrumbLinkStyle}>Home</a> {'>'} Testimonials
                    </p>
                </div>
            </div>

            {/* Testimonials Section */}
            <section style={sectionStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div style={cardStyle}>
                            <p>To whom it may concern,</p>
                            <p>
                                Thiru was totally professional in his approach right from day one. He understood the
                                clients' priorities and displayed a great sense of dedication and timing to file the
                                visa application, communicate with the client, submit documents and answer questions
                                in a highly professional and up-to-the-point manner. Very meticulous and detailed in
                                his work. No fuss whatsoever. Top class service. I would certainly recommend Thiru
                                for any prospective migrant. Thiru, please accept our sincere thanks.
                            </p>
                            <h3>Sivashanmugam, Muniappan (Siva)</h3>
                            <p style={locationStyle}>Singapore</p>
                        </div>
                        <div style={cardStyle}>
                            <p>Dear Thiru,</p>
                            <p>Thank you for making our long-awaited dream come true.</p>
                            <p>
                                You were really patient in answering our queries and your thorough guidance helped us
                                reach success at ease. You gave us the visibility and made us sure of what was
                                happening with our application and be sure of what to expect next. There have been
                                times when we nearly gave up, but you motivated us to keep going.<br /><br />

                                Thank you for all the efforts and dedication you have put into our application to make this move possible.<br /><br />

                                We would love to recommend you to our friends just like the way we got introduced to you.<br /><br />

                                Thanks & Regards
                            </p>
                        </div>
                        <div style={cardStyle}>
                            <h3>
                                Seetharaman, Sivagami, Sandhiya<br />
                                Project Manager @ Infosys Technologies Limited, Chennai, India
                            </h3><br />
                            <p>
                                Dear Thiru,<br /><br />

                                First of all, we would like to thank you very much for getting positive visa results. We have achieved this visa grant only because of your keen follow-ups.<br /><br />

                                Here we remember the stages we have come across. Each was a milestone in this process. In every stage, the result led to the next step.<br /><br />

                                The first achievement was the Successful TRA Result. This was because of your guidance. Next was the Main application launch. The effort you put in was amazing. Because of your sincere efforts, all have succeeded.<br /><br />

                                We will be enjoying our life in Australia and celebrating our friendship throughout our lives.<br /><br />

                                Once again we all from my family thank you very much.<br /><br />

                                Hearty Thanks
                            </p>
                        </div>
                        <div style={cardStyle}>
                            <h3>Mr & Mrs Lakshmikandan</h3><br />
                            <p>
                                Hi Sir,<br /><br />

                                Wish you a happy and prosperous new year! I would like to thank you for the help that you have done for Maxime and myself in getting the visa process done so fast. I am sure that without your suggestions and timely support we would not have made it possible.<br /><br />

                                Wish you a harmonious and successful year!<br /><br />

                                May this year add even more happiness to you and your family!<br /><br />

                                Thanks & Regards
                            </p><br />
                            <h3>Mary Jones Maxime</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import faqImage from '../assets/bannerImage/image.jpg'; // Add the correct image path

const FAQ = () => {
    const sectionStyle = {
        padding: '50px 20px',
        backgroundColor: '#f8f9fa',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        marginBottom: '20px',
    };

    const questionStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#007bff',
        cursor: 'pointer',
    };

    const answerStyle = {
        marginTop: '10px',
        fontSize: '16px',
        color: '#333',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out', // smooth transition
        opacity: 1,
    };

    const hiddenAnswerStyle = {
        ...answerStyle,
        maxHeight: '0',
        opacity: 0,
    };

    const visibleAnswerStyle = {
        ...answerStyle,
        maxHeight: '500px', // You can adjust this as per the content length
        opacity: 1,
    };

    const headerStyle = {
        backgroundImage: `url(${faqImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const breadcrumbStyle = {
        color: '#fff',
        fontSize: '16px',
    };

    const [openIndex, setOpenIndex] = useState(null);

    const handleOnClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if already open
        } else {
            setOpenIndex(index); // Open the selected FAQ
        }
    };

    return (
        <>
            {/* FAQ Header with Image */}
            <div style={headerStyle}>
                FAQ
                <div style={breadcrumbStyle}>
                    {/* Use Link to navigate back to the home page */}
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                        Home
                    </Link>
                    &nbsp;&gt; FAQ
                </div>
            </div>

            {/* FAQ Section */}
            <section style={sectionStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                        </div>
                        <div className="col-12">
                            {/* FAQ 1 */}
                            <div className="accordion-item" style={cardStyle}>
                                <h2 className="accordion-header" id="headingOne">
                                    <div
                                        style={questionStyle}
                                        onClick={() => handleOnClick(1)}
                                    >
                                        How long will the Australian Immigration Department take to approve my application?
                                    </div>
                                </h2>
                                <div
                                    className="accordion-body"
                                    style={openIndex === 1 ? visibleAnswerStyle : hiddenAnswerStyle}
                                >
                                    Whilst we will act as expeditiously as we possibly can to prepare and submit your application to the Australian Department of Immigration & Citizenship, the length of time it takes for your application to be processed and finalised will depend very much on the workload and backlog existing in the particular office of the Department of Immigration & Citizenship that your application was lodged. Another factor to be considered is how quick you are in responding to our requests for documents and information concerning your application. Depending on the particular category of visa that is being applied for, the processing time may take from one month to one year or perhaps even longer.
                                </div>
                            </div>
                            {/* FAQ 2 */}
                            <div className="accordion-item" style={cardStyle}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <div
                                        style={questionStyle}
                                        onClick={() => handleOnClick(2)}
                                    >
                                        Can you guarantee that the Australian Department of Immigration & Citizenship will approve my application?
                                    </div>
                                </h2>
                                <div
                                    className="accordion-body"
                                    style={openIndex === 2 ? visibleAnswerStyle : hiddenAnswerStyle}
                                >
                                    Once your application is lodged with the Australian Department of Immigration & Citizenship the matter is very much in the hands of the case officer processing your application. We will not accept your instructions to proceed with your application unless we are convinced that your application has a reasonable chance of being approved. We will endeavour to ensure that your application is presented in the best way we know how. However as much as we would like to provide you with a guarantee that your application will be approved, Clause 2.10 of the Migration Agents Code of Conduct strictly prohibits us from providing you that guarantee. If we do provide you with a guarantee that your application will be approved we will be in breach of the Code of Conduct and we will be subject to disciplinary action by the Migration Agents Registration Authority. You can access a copy of the Code of Conduct by visiting the Migration Agents Registration Authority website at http://www.themara.com.au
                                </div>
                            </div>
                            {/* FAQ 3 */}
                            <div className="accordion-item" style={cardStyle}>
                                <h2 className="accordion-header" id="headingThree">
                                    <div
                                        style={questionStyle}
                                        onClick={() => handleOnClick(3)}
                                    >
                                        What are the likely reasons that an application might be refused?
                                    </div>
                                </h2>
                                <div
                                    className="accordion-body"
                                    style={openIndex === 3 ? visibleAnswerStyle : hiddenAnswerStyle}
                                >
                                    There are various reasons why an application is refused least of all is the reason that your application does not meet one or more of the criteria or prerequisites required for the particular category of visa that you are applying for. Another reason could be that you or a member of your family does not meet health or medical requirements. Another reason could be you provided false or incorrect answer to one or more of the questions that you were required to answer. Another reason could be that you or a member of your family failed to meet Australian national security requirements. This list is not conclusive and there could be other reasons that could lead to refusal of your visa application.
                                </div>
                            </div>
                            {/* FAQ 4 */}
                            <div className="accordion-item" style={cardStyle}>
                                <h2 className="accordion-header" id="headingFour">
                                    <div
                                        style={questionStyle}
                                        onClick={() => handleOnClick(4)}
                                    >
                                        Can I get a refund of the fees paid to you if the Department of Immigration & Citizenship refuses my application?
                                    </div>
                                </h2>
                                <div
                                    className="accordion-body"
                                    style={openIndex === 4 ? visibleAnswerStyle : hiddenAnswerStyle}
                                >
                                    In normal circumstances all registered migration agents would have done substantial amount of work in interviewing you to take your instructions, preparing your application and lodging your application with the appropriate overseas post or appropriate onshore office of the Department of Immigration & Citizenship. For the time spent in bringing your application to that stage he/she would expect to be paid for his/her time and services. If your application is refused due to a reason not attributed to the fault or negligence of the agent then it would not be reasonable for any refund to be paid to you, particularly if you had provided false information to certain questions or if you suppressed a criminal background or if you fail your medical examination resulting in the refusal of your application. In such circumstances we regret we will not be refunding any money paid to you.
                                </div>
                            </div>
                            {/* End Accordion */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;

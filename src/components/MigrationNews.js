import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        marginBottom: '20px',
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
    sectionHeader: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop: '20px',
        marginBottom: '10px',
    },
    sectionText: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    link: {
        fontWeight: 'bold',
        color: '#d9534f',
    }
};

const MigrationNews = () => {
    return (
        <div>
            {/* Top banner image */}
            <div style={styles.bannerContainer}>
                <img
                    src="data:image/jpeg;base64,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"  // Replace with the actual path of your banner image
                    alt="Migration News Banner"
                    style={styles.bannerImage}
                />
                <div style={styles.bannerTextContainer}>
                    <h1 style={styles.bannerHeader}>Migration News</h1>
                    <p style={styles.breadcrumb}>
                        <a href="/" style={styles.breadcrumbLink}>Home</a> {'>'} Migration News
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Container>
                <Row>
                    <Col md={12}>
                        <p style={styles.sectionText}>
                            Foreign investment applications are therefore generally considered in light of the overarching principle that the proposed investment should increase Australia’s housing stock (be creating at least one new additional dwelling).
                        </p>
                        <p style={styles.sectionText}>
                            Consistent with this aim, different factors apply depending on whether the type of property being acquired will increase the housing stock or whether it is an established dwelling.
                        </p>
                        <p style={styles.sectionText}>
                            It is important that foreign investors understand and comply with Australia’s foreign investment framework as strict criminal and civil penalties may apply for breaches of the law, including disposal orders.
                        </p>

                        {/* Section 1 */}
                        <h2 style={styles.sectionHeader}>Family members or partners</h2>
                        <p style={styles.sectionText}>
                            As an Australian citizen, Australian permanent resident or an eligible New Zealand citizen, you may be able to sponsor your family to live in Australia. <span style={styles.link}>Department of Immigration and Border Protection</span>
                        </p>

                        {/* Section 2 */}
                        <h2 style={styles.sectionHeader}>Life in Australia - book</h2>
                        <p style={styles.sectionText}>
                            Provides information about Australian history, culture, society and the values we share to help you understand the values statement before you sign. Multicultural language booklets are also available. <span style={styles.link}>Department of Immigration and Border Protection</span>
                        </p>

                        {/* Section 3 */}
                        <h2 style={styles.sectionHeader}>Refugee and humanitarian programme</h2>
                        <p style={styles.sectionText}>
                            Provides information about Australia’s refugee and humanitarian programme, including offshore resettlement, onshore protection, ImmiCards and more. <span style={styles.link}>Department of Immigration and Border Protection</span>
                        </p>

                        {/* Section 4 */}
                        <h2 style={styles.sectionHeader}>Settle in Australia</h2>
                        <p style={styles.sectionText}>
                            Information to assist migrants and refugees and humanitarian entrants settling into Australia. Includes places you can contact for help with settlement and practical information for your life in Australia including health, housing, transport and work. <span style={styles.link}>Department of Social Services</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MigrationNews;

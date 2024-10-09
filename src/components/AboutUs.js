/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            {/* Top banner image */}
            <div style={styles.bannerContainer}>
                <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDeWDjixAx8JoxBLupdsowig-9d_IHvwQkoUglvHg_OqequuIv" // Replace with the actual path of your uploaded image
                    alt="About Us Banner"
                    style={styles.bannerImage}
                />
                <div style={styles.bannerTextContainer}>
                    <h1 style={styles.bannerHeader}>About Us</h1>
                    <p style={styles.breadcrumb}>
                        <a href="/" style={styles.breadcrumbLink}>Home</a> {'>'} About Us
                    </p>
                </div>
            </div>

            {/* About Us content */}
            <div className="container mt-5" style={styles.container}>
                <div className="row">
                    <div className="col-md-8">
                        <h2 style={styles.header}>NIC IMMIGRATION SERVICES (NICIS)</h2>
                        <p style={styles.text}>
                            NIC Immigration Services, known as "NICIS", was founded by Mr. Thiruvegadam Arumugam who is the Principal Migration consultant of the company.
                            Mr. Arumugam is a Registered Migration Agent (MARN 0741766) and a Member of the Migration Institute of Australia. NICIS offers guidance to people
                            wishing to effect a profound and lasting change in their lifestyle, and also provide themselves and their families with opportunities for successful
                            future.
                        </p>
                        <p style={styles.text}>
                            Mr. Thiruvegadam Arumugam, a Registered Migration Agent and Member of the Migration Institute of Australia leads a competent team that is groomed
                            by his able guidance to efficiently process applications through complex procedures and maze of formalities. Mr. Arumugam is also a citizen of
                            Australia and Overseas Citizen of India. Mr Arumugam holds Graduate Certificate in Migration Law & Practice from Australian National University.
                        </p>
                        <p style={styles.text}>
                            He is one of the most experienced figures in the migration industry. He has extensive expertise in all areas of migration, in particular Family,
                            Partner, Skilled, Business, and Review Tribunal applications. He has specialized knowledge and successfully handles a large number of skilled migration cases.
                        </p>
                        <p style={styles.text}>
                            Mr. Arumugam is an active member of Indian Community Associations in Australia. He is a Founder Member and Former President of Australian Tamil
                            Association Inc. He has been actively involved in providing advice and guidance to newly arrived migrants and unemployed people in the community.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://nicimmigration.com/assets/img/79.jpg" alt="NICIS Image" style={styles.image} />
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};


const styles = {
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: '250px',
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
        fontSize: '3rem',
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
    container: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    header: {
        color: '#333',
        marginBottom: '20px',
    },
    text: {
        color: '#555',
        lineHeight: '1.6',
    },
    image: {
        width: '100%',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
};

export default AboutUs;

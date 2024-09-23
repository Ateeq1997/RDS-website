// SpecialitiesPage.js
import React from 'react';
import './specialities.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Specialities = () => {
    return (
        <div className="SP-main-container">
            <div className="SP-content">
                <h1 className="SP-nav-heading">RDS Precision Specialities</h1>
                <p className="SP-paragraph1">
                    Integrates the operational and clinical facets of healthcare specialties <br />
                    through the automated management of administrative functions. Our <br />
                    team of specialized medical professionals oversees the entirety of <br />
                    your medical care journey.
                </p>
            </div>

            <div className="SP-overlay-content1">
                <h1 className="SP-heading44">
                    <span className="heading-part11">Our</span>
                    <span className="heading-part22">specialities</span>
                </h1>
                <p className="SP-paragraph2">
                    Your specialty requires bespoke solutions for medical billing, practice management, and electronic health records (EHR).<br />
                    We not only meet these needs but also enhance your practice’s performance—financial, clinical, and patient-focused—through our <br />
                    comprehensive, cloud-based platform.
                </p>
            </div>

            <div className="row">
                <div className="col">
                <Link to="/obgyn" className="service-card-link">
            <div className="service-card-border">
              <div className="icon"><i className="fas fa-user-md"></i></div>
              <h4>GYN</h4>
            </div>
          </Link>
                </div>
                <div className="col">
                <Link to="/cardiology"  className="service-card-link">
            <div className="service-card-border">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4>Cardiology</h4>
            </div>
          </Link>
                </div>
                <div className="col">
                <Link to="/dermatology"  className="service-card-link">
            <div className="service-card-border">
              <div className="icon"><i className="fa-solid fa-head-side-mask"></i></div>
              <h4>Dermatology</h4>
            </div>
          </Link>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-square-plus"></i></div>
                        <h4>Psychiatry</h4>
                    </div>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-brain"></i></div>
                        <h4>Endocrinology</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-viruses"></i></div>
                        <h4>Pulmonology</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-lungs"></i></div>
                        <h4>Speech Therapy</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-vials"></i></div>
                        <h4>Neurology</h4>
                    </div>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-bone"></i></div>
                        <h4>Orthopedic</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fas fa-baby"></i></div>
                        <h4>Pediatrics</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fas fa-capsules"></i></div>
                        <h4>Family Medicine</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fas fa-syringe"></i></div>
                        <h4>Anesthesiology</h4>
                    </div>
                </div>
            
            </div>
            <div className="row">
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-person-cane"></i></div>
                        <h4>Chiropractic</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-cannabis"></i></div>
                        <h4>Dental</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fas fa-pills"></i></div>
                        <h4>DMC</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-bacteria"></i></div>
                        <h4>FQHC</h4>
                    </div>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col-2">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-teeth-open"></i></div>
                        <h4>Gastroenterology</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="service-card-border">
                        <div className="icon"><i className="fa-solid fa-staff-snake"></i></div>
                        <h4>General-Surgery</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialities;

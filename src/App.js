
// src/App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';  // Import Button and Modal from react-bootstrap
import HomeComponent from './containers/Home';
import CustomNavbar from './components/common/CustomNavbar';
import Specialities from './containers/Specialities';
import RevenueCycleManagement from './containers/RevenueCycleManagement';
import HipaaRules from './containers/HipaaRules';
import HealthcareDigitalMarketing from './containers/HealthcareDigitalMarketing';
import HealthcareAnalytics from './containers/Healthcare&Analytics';
import PatientExperienceManagement from './containers/PatientExperienceManagement';
import Pricing from './containers/Pricing';
import RequestaDemo from './containers/RequestaDemo';
import PracticeManagement from './containers/PracticeManagement';
import MedicalBilling from './containers/MedicalBilling';
import MedicalCoding from './containers/MedicalCoding';
import AccountReceivables from './containers/AccountReceivables';
import Credentialing from './containers/Credentialing';
import DenialManagement from './containers/DenialManagement';
import Oncology from './containers/Oncology';
import OBGYN from './containers/OB-GYN';
import Cardiology from './containers/Cardiology';
import Dermatology from './containers/Dermatology';
import ConditionalFooterWrapper from './components/common/ConditionalFooterWrapper';
import LoginPage from './containers/LoginPage';  // Import the LoginPage component
import SignUp from './containers/SignUp';
import Resetpassword from './containers/Resetpassword';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Step 1: Add the Login button in a global place */}
  
        <Routes>
        <Route path="/login" element={
            <>
              <CustomNavbar showContainer12={false} />
              <LoginPage />  {/* Add your login component here */}
            </>
          } />
          <Route path="/signup" element={
            <>
              <CustomNavbar showContainer12={false} />
              <SignUp />  
            </>
          } />
          <Route path="/resetpassword" element={
            <>
              <CustomNavbar showContainer12={false} />
              <Resetpassword />  
            </>
          } />
          <Route path="/requestademo" element={
            <>
              <CustomNavbar showContainer12={false} />
              <RequestaDemo />
            </>
          } />
          <Route path="/" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <HomeComponent />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/pricing" element={
            <>
              <CustomNavbar showContainer12={false} />
              <ConditionalFooterWrapper>
                <Pricing />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/specialities" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <Specialities />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/revenue-cycle-management" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <RevenueCycleManagement />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/hipaa-rules" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <HipaaRules />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/healthcare-digital-marketing" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <HealthcareDigitalMarketing />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/healthcare-analytics" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <HealthcareAnalytics />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/patient-experience-management" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <PatientExperienceManagement />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/practice-management" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <PracticeManagement />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/medical-billing" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <MedicalBilling />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/medical-coding" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <MedicalCoding />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/account-receivables" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <AccountReceivables />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/credentialing" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <Credentialing />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/denial-management" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <DenialManagement />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/oncology" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <Oncology />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/obgyn" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <OBGYN />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/cardiology" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <Cardiology />
              </ConditionalFooterWrapper>
            </>
          } />
          <Route path="/dermatology" element={
            <>
              <CustomNavbar />
              <ConditionalFooterWrapper>
                <Dermatology />
              </ConditionalFooterWrapper>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
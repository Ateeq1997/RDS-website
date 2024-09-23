// components/ConditionalFooterWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';


const ConditionalFooterWrapper = ({ children }) => {
  const location = useLocation();
  const noFooterRoutes = []; // Add more routes if needed

  // Render the children and Footer only if the current route is not in noFooterRoutes
  return (
    <>
      {children}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default ConditionalFooterWrapper;

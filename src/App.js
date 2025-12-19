import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';
import OurBusinessesPage from './pages/OurBusinessesPage';
import SustainabilityPage from './pages/SustainabilityPage';
import InvestorsPage from './pages/InvestorsPage';
import NewsroomPage from './pages/NewsroomPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';


// --- Main App Component with Routes ---
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="our-businesses" element={<OurBusinessesPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="investors" element={<InvestorsPage />} />
          <Route path="newsroom" element={<NewsroomPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-use" element={<TermsOfUsePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
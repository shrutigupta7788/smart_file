import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import IncomeTax_eFilling from "./components/IncomeTax_eFilling/IncomeTax_eFilling";
import Book_Consultancy from "./components/Book Consultancy/Book_Consultancy";
import BookConsultancyForm from "./components/Book Consultancy/BookConsultancyForm";
import ConsultancyThankYou from "./components/Book Consultancy/ConsultancyThankYou";
import WhyChooseUs from "./components/WhyChooseUs";
import ITRFilingService from "./components/ITRFilingService";
import IsoCertification from "./components/IsoCertification";
import GstRegistration from "./components/GstRegistration";
import GstReturnFiling from "./components/GstReturnFiling";
import MsmeRegistration from "./components/MsmeRegistration";
import CompanyRegistration from "./components/CompanyRegistration";
import FirmRegistration from "./components/FirmRegistration";
import FssaiRegistration from "./components/FssaiRegistration";
import TradingLicence from "./components/TradingLicence";
import Trademark from "./components/Trademark";
import FirRegistration from "./components/FirRegistration";
import PrivateLimitedCompanyRegistration from "./components/PrivateLimitedCompanyRegistration";
import LlpRegistration from "./components/LlpRegistration";
import OnePersonCompanyRegistration from "./components/OnePersonCompanyRegistration";
import ProprietorshipRegistration from "./components/ProprietorshipRegistration";
import PartnershipFirmRegistration from "./components/PartnershipFirmRegistration";
import ContactUs from "./components/ContactUs";
import AffiliatePartner from "./components/AffiliatePartner";
import Review from "./components/Review";
import IsoCertificationInfo from "./components/IsoCertificationInfo";
import ITRTypeAndGuide from './components/ITRTypeAndGuide';


// Add more placeholder components as needed

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income-tax-e-filing" element={<IncomeTax_eFilling />} />
        <Route path="/book-consultancy" element={<Book_Consultancy />} />
        <Route path="/book-consultancy/form" element={<BookConsultancyForm />} />
        <Route path="/book-consultancy/thank-you" element={<ConsultancyThankYou />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/itr_filing_service" element={<ITRFilingService />} />
        <Route path="/iso_certification" element={<IsoCertification />} />
        <Route path="/gst_registration" element={<GstRegistration />} />
        <Route path="/gst_return_filing" element={<GstReturnFiling />} />
        <Route path="/msme_registration" element={<MsmeRegistration />} />
        <Route path="/company_registration" element={<CompanyRegistration />} />
        <Route path="/firm_registration" element={<FirmRegistration />} />
        <Route path="/fssai_registration" element={<FssaiRegistration />} />
        <Route path="/trading_licence" element={<TradingLicence />} />
        <Route path="/trademark" element={<Trademark />} />
        <Route path="/registration" element={<FirRegistration />} />
        <Route path="/private-limited-company-registration" element={<PrivateLimitedCompanyRegistration />} />
        <Route path="/llp-registration" element={<LlpRegistration />} />
        <Route path="/one-person-company-registration" element={<OnePersonCompanyRegistration />} />
        <Route path="/proprietorship-registration" element={<ProprietorshipRegistration />} />
        <Route path="/partnership-firm-registration" element={<PartnershipFirmRegistration />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/affiliate_partner" element={<AffiliatePartner />} />
        <Route path="/review" element={<Review />} />
        <Route path="/iso-certification-info" element={<IsoCertificationInfo />} />
        <Route path="/itr-type-and-guide" element={<ITRTypeAndGuide />} />
        
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

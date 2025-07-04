import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "INCOME TAX FILING", link: "/income-tax-e-filing" },
  { label: "BOOK CONSULTANCY", link: "/book-consultancy" },
  {
    label: "POPULAR SERVICES",
    dropdown: [
      { label: "ITR FILING SERVICES", link: "/itr_filing_service" },
      { label: "ISO CERTIFICATION", link: "/iso_certification" },
      { label: "GST REGISTRATION", link: "/gst_registration" },
      { label: "GST RETURN FILING", link: "/gst_return_filing" },
      { label: "MSME REGISTRATION", link: "/msme_registration" },
      { label: "COMPANY REGISTRATION", link: "/company_registration" },
      { label: "FIRM REGISTRATION", link: "/firm_registration" },
      { label: "FSSAI LICENCE", link: "/fssai_registration" },
      { label: "TRENDMARK REGISTRATION", link: "/trademark" },
      
      
      
    ],
  },
  {
    label: "BUSINESS REGISTRATION",
    dropdown: [
      {
        label: "COMPANY REGISTRATION",
        dropdown: [
          { label: "PRIVATE LIMITED COMPANY REGISTRATION", link: "/private-limited-company-registration" },
          { label: "LLP REGISTRATION", link: "/llp-registration" },
          { label: "ONE PERSON COMPANY REGISTRATION", link: "/one-person-company-registration" },
        ]
      },
      {
        label: "FIRM REGISTRATION",
        dropdown: [
          { label: "PROPRIETORSHIP REGISTRATION", link: "/proprietorship-registration" },
          { label: "PARTNERSHIP FIRM REGISTRATION", link: "/partnership-firm-registration" },
        ]
      },
    ],
  },
  {
    label: "GST SERVICES",
    dropdown: [
      { label: "GST REGISTRATION", link: "/gst_registration" },
      { label: "GST RETURN FILING", link: "/gst_return_filing" },
    ],
  },
  {
    label: "SUPPORT",
    dropdown: [
      { label: "CONTACT US", link: "/contact_us" },
      { label: "AFFILIATE PARTNER", link: "/affiliate_partner" },
      { label: "REVIEW", link: "/review" },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dropdownTimer = useRef();
  const closeTimer = useRef();

  const handleMouseEnter = (idx) => {
    clearTimeout(closeTimer.current);
    dropdownTimer.current = setTimeout(() => {
      setOpenDropdown(idx);
    }, 200); // 200ms delay to open
  };

  const handleMouseLeave = () => {
    clearTimeout(dropdownTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubmenu(null);
    }, 400); // 400ms delay to closee
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 rounded-lg p-3 bg-white/10 hover:bg-white/20 transition-all duration-300">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Icon */}
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg 
                className="w-6 h-6 text-purple-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                <path d="M8 12h8v2H8zm0 4h5v2H8z"/>
              </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide group-hover:text-purple-100 transition-colors duration-300">
                Smart Files
              </span>
              <span className="text-purple-200 text-xs font-medium tracking-wider uppercase">
                Solutions
              </span>
            </div>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center text-white font-medium hover:underline focus:outline-none transition-colors duration-200 ease-in-out cursor-pointer ${openDropdown === idx ? 'bg-white/10' : ''}`}> 
                  {item.label}
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown */}
                {openDropdown === idx && (
                  <div className="absolute -left-4 top-5 mt-2 w-56 bg-white rounded shadow-lg z-10 transition-all duration-200 ease-in-out">
                    {item.dropdown.map((option, optIdx) =>
                      option.dropdown ? (
                        <div key={option.label} className="group relative">
                          <button
                            className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white active:bg-red-700 transition-colors duration-200 ease-in-out rounded cursor-pointer ${openSubmenu === optIdx ? 'bg-red-600 text-white' : ''}`}
                            onClick={() => setOpenSubmenu(openSubmenu === optIdx ? null : optIdx)}
                            type="button"
                          >
                            {option.label}
                            <span className="ml-2">&gt;</span>
                          </button>
                          {openSubmenu === optIdx && (
                            <div className="absolute left-full top-0 mt-0 ml-1 w-72 bg-white rounded shadow-lg z-20">
                              {option.dropdown.map((subOption) => (
                                <Link
                                  key={subOption.label}
                                  to={subOption.link}
                                  className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out rounded cursor-pointer"
                                  onClick={() => { setOpenDropdown(null); setOpenSubmenu(null); }}
                                >
                                  {subOption.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={option.label}
                          to={option.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out rounded cursor-pointer"
                          onClick={() => { setOpenDropdown(null); setOpenSubmenu(null); }}
                        >
                          {option.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className="text-white font-medium px-2 py-1 border border-white rounded hover:bg-white hover:text-purple-600 transition cursor-pointer"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-white rounded shadow-lg p-4">
          {menuItems.map((item, idx) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  className="flex items-center w-full text-left text-purple-700 font-medium py-2 focus:outline-none"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {item.label}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === idx && (
                  <div className="pl-4">
                    {item.dropdown.map((option, optIdx) =>
                      option.dropdown ? (
                        <div key={option.label} className="group relative">
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 transition-colors duration-200 ease-in-out rounded cursor-pointer"
                          >
                            {option.label}
                            <span className="ml-2">▶</span>
                          </button>
                          <div className="absolute left-full top-0 mt-0 ml-1 w-64 bg-white rounded shadow-lg z-20 hidden group-hover:block">
                            {option.dropdown.map((subOption) => (
                              <Link
                                key={subOption.label}
                                to={subOption.link}
                                className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out rounded cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subOption.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={option.label}
                          to={option.link}
                          className="block px-2 py-1 text-gray-700 hover:bg-purple-100 rounded cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {option.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className="block text-purple-700 font-medium px-2 py-2 border border-purple-200 rounded hover:bg-purple-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

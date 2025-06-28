import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-gray-200 pt-20 pb-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Column 1: Services */}
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold text-base mb-1">BUSINESS REGISTRATION</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Pvt Ltd Company Registration</a></li>
              <li><a href="#" className="hover:underline">OPC Registration</a></li>
              <li><a href="#" className="hover:underline">LLP Registration</a></li>
              <li><a href="#" className="hover:underline">Partnership Registration</a></li>
              <li><a href="#" className="hover:underline">Proprietorship Registration</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">GST PORTAL</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">GST Registration</a></li>
              <li><a href="#" className="hover:underline">GST Return Filing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">OTHER LEGAL REGISTRATION</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">MSME Registration</a></li>
              <li><a href="#" className="hover:underline">IEC Code Registration</a></li>
              <li><a href="#" className="hover:underline">FSSAI Registration</a></li>
              <li><a href="#" className="hover:underline">Shop Registration</a></li>
              <li><a href="#" className="hover:underline">Gumasta License</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">ANNUAL SERVICE</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Company Annual Filing</a></li>
              <li><a href="#" className="hover:underline">LLP Annual Filing</a></li>
              <li><a href="#" className="hover:underline">Income Tax Return</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">IPR SERVICES</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Trademark Registration</a></li>
              <li><a href="#" className="hover:underline">Patent Registration</a></li>
            </ul>
          </div>
        </div>
        {/* Column 2: Support, Company, Legal */}
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold text-base mb-1">SUPPORT</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Download the App</a></li>
              <li><a href="#" className="hover:underline">Payment Checkout</a></li>
              <li><a href="#" className="hover:underline">Blog Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">COMPANY</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Join Us : Hiring</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Affiliate Programme</a></li>
              <li><a href="#" className="hover:underline">MyOnlineCA Franchise Partner</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1 mt-4">LEGAL</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        {/* Column 3: Social, Payment, About */}
        <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-bold text-base mb-2">GET THE DEALS : FOLLOW US</h3>
              <div className="flex space-x-3">
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube text-2xl hover:text-red-500"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook text-2xl hover:text-blue-500"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter text-2xl hover:text-blue-400"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin text-2xl hover:text-blue-700"></i></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2">WE SECURELY ACCEPT</h3>
              <div className="flex space-x-2 items-center">
                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="h-6" />
                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-6" />
                <img src="https://img.icons8.com/color/48/000000/bank-card-back-side.png" alt="Net Banking" className="h-6" />
                <img src="https://img.icons8.com/color/48/000000/paytm.png" alt="Paytm" className="h-6" />
                <img src="https://img.icons8.com/color/48/000000/phonepe.png" alt="PhonePe" className="h-6" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-base mb-2">ABOUT US</h3>
            <p className="text-gray-400 text-sm mb-2">
              MyOnlineCA is India's fastest growing "Legal Service Provider Company" attempting to provide better legal solutions via technology and reduce the cost via automation.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              We help you to register your business anywhere in India to manage legal compliance at your fingertips. Best Legal Service Provider Company rating of 4.8/5 based on 1000+ social reviews.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Startup Recognition :DIPP9122<br />
              CIN : U74140RJ2015PTC048757<br />
              GSTIN : 08AAKCM0506E1ZT
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2015 - 2025 | MyOnlineCA Technologies Private Limited. | All Rights Reserved with Copyright & TradeMarks
      </div>
    </footer>
  );
};

export default Footer;

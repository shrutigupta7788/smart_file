import React from "react";
import { useNavigate } from "react-router-dom";

const BookConsultancyForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/book-consultancy/thank-you');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5fc] py-0 px-2">
      <div className="w-full max-w-2xl bg-white rounded border  mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center !mb-0 text-gray-800">Book Consultation Right Now</h2>
        {/* Header */}
        <div className="border-b px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-1">MyOnlineCA Consultancy</h2>
          <p className="text-sm text-center text-gray-600 mb-2">
            Now Book MyOnlineCA Consultancy at Affordable Price and Get Connected One to One Senior Expert for your Queries and Problem.<br />
            One Senior Expert for your Queries and Problem.
          </p>
        </div>
        {/* How it works */}
        <div className="px-8 pt-4 pb-2">
          <p className="text-xs text-gray-700 mb-2">How Its Works ?</p>
          <ul className="text-xs text-gray-600 mb-4 list-disc pl-5">
            <li>a) Fill-Up Below Details with your Queries</li>
            <li>b) Choose your Consultancy Plan [Starting from 500/-INR]</li>
            <li>c) Get Connected with Expert on WhatsApp or Call</li>
          </ul>
        </div>
        {/* Form */}
        <form className="px-8 pb-8 pt-2 flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col text-left">
            <label className="font-semibold text-sm mb-1">Name <span className="text-red-500">*</span></label>
            <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="" required />
            <span className="text-xs text-gray-400 mt-1">Type your Good Name</span>
          </div>
          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="font-semibold text-sm mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" className="border rounded px-3 py-2 text-sm" placeholder="" required />
            <span className="text-xs text-gray-400 mt-1">example@example.com</span>
          </div>
          {/* Contact Number */}
          <div className="flex flex-col text-left">
            <label className="font-semibold text-sm mb-1">Contact Number <span className="text-red-500">*</span></label>
            <input type="tel" className="border rounded px-3 py-2 text-sm" placeholder="" required />
            <span className="text-xs text-gray-400 mt-1">Type Your Contact No without 0 or +91</span>
          </div>
          {/* Preferred Language */}
          <div className="flex flex-col text-left">
            <label className="font-semibold text-sm mb-1">Preferred Language <span className="text-red-500">*</span></label>
            <div className="flex flex-col gap-1 ml-2 mt-1">
              <label className="flex items-center text-sm">
                <input type="radio" name="language" value="Hindi" className="mr-2" required /> Hindi
              </label>
              <label className="flex items-center text-sm">
                <input type="radio" name="language" value="English" className="mr-2" /> English
              </label>
              <label className="flex items-center text-sm">
                <input type="radio" name="language" value="Both" className="mr-2" /> Both
              </label>
            </div>
          </div>
          {/* Queries */}
          <div className="flex flex-col text-left">
            <label className="font-semibold text-sm mb-1">Queries <span className="text-red-500">*</span></label>
            <textarea className="border rounded px-3 py-2 text-sm min-h-[90px]" placeholder="Type here..." required />
            <span className="text-xs text-gray-400 mt-1">Mentioned Your Main Queries Here</span>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-2">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded shadow transition">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookConsultancyForm; 
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ITRFilingServiceExtra from "./ITRFilingServiceExtra";
import ITRFilingServiceWhatIs from "./ITRFilingServiceWhatIs";
import ITRFilingServiceEFiling from "./ITRFilingServiceEFiling";
import ITRTypeAndGuide from "./ITRTypeAndGuide";

const ITRFilingService = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    whatsapp: "",
  });
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  const handleBookNowClick = () => {
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-[30vh] bg-gray-50 flex flex-col justify-start items-center pt-8 pb-0">
      <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-2">We’re Here to Help !
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">Now File ITR Online with India's Largest Tax Consultant at Affordable Cost</span>
        <button
          className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded shadow hover:bg-purple-700 transition text-lg uppercase tracking-wide"
          type="button"
          onClick={handleBookNowClick}
        >
          Get Proposal
        </button>
      </div>
      <ITRFilingServiceExtra />
      <div className="mt-8">
        <ITRFilingServiceWhatIs />
      </div>
      <div className="mt-8">
        <ITRFilingServiceEFiling />
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">Income Tax Return Filing Fee</h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">Service Fee –</div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>ITR-1 (Salary + Other Income) – <b>1499/- INR</b></li>
          <li>ITR-4 (Business + Other Income) – <b>1499/- INR</b></li>
          <li>ITR-2 (Salary+Stock Market+Other Income) – <b>2999/- INR</b></li>
          <li>ITR-3 (Salary+Stocks+F&O+Intraday+Other Income) – <b>3499/- INR*</b></li>
        </ul>
        <div className="mb-3 font-semibold text-gray-800 text-xl">Include :</div>
        <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 All Plans above Include Dedicated ITR Filing by Experienced Tax Consultant.</li>
          <li>#2 Income Tax Final Intimation & Refund Assistance</li>
        </ul>
        <div className="text-xs text-gray-600 mt-5 pl-10">*not included Tax Audit or Books of Accounts Preparations for FNO.</div>
        <div className="flex justify-center mt-10">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase px-6 py-2 rounded shadow-lg text-base tracking-wider transition mb-4"
            type="button"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* Booking Form Section */}
      {showForm && (
        <section ref={formRef} className="w-full flex flex-col items-center bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white flex items-center justify-center gap-2 drop-shadow-lg">
            <span role="img" aria-label="calendar">📅</span> Book Your Income Tax Filing
          </h2>
          <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl border-4 border-purple-300 shadow-2xl mx-auto p-12">
            <div className="border-b-2 border-purple-200 px-10 pt-10 pb-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">Income Tax Return Filing</h2>
              <p className="text-base text-center text-gray-600 mb-2">Fill up Below Form and Let's Start</p>
            </div>
            <div className="px-10 pt-2 pb-4">
              <div className="text-sm text-purple-700 mb-2 font-semibold">We Have Following ITR Plans :</div>
              <ul className="text-sm text-gray-700 mb-2 list-disc pl-6 text-left">
                <li>a) Basic Salary or any other Income(ITR-1) - 1499/-INR</li>
                <li>b) Business Income(ITR-4) - 1499/-INR</li>
                <li>c) Salary+Stocks & MF Gain(ITR-2)- 2999/-INR</li>
                <li>d) Salary+F&O and Intraday(ITR-3)- 3499/-INR</li>
              </ul>
              <div className="text-sm text-purple-700 mb-2 font-semibold">All Plan Include :</div>
              <ul className="text-sm text-gray-700 mb-2 list-disc pl-6 text-left">
                <li># Maximum TDS Tax Refund as per law.</li>
                <li># Filing by Experienced Tax Expert</li>
              </ul>
              <div className="text-sm text-purple-700 mb-2 font-semibold">How to Order ITR Filing Plan :</div>
              <ul className="text-sm text-gray-700 mb-4 list-disc pl-6 text-left">
                <li>#1 Fillup Below Form and Make Payment Online</li>
                <li>#2 Upload Docs and info and Be Relax !</li>
              </ul>
            </div>
            <form className="px-10 pb-10 pt-2" onSubmit={handleSubmit}>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your Good Name"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">Type your Good Name</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your valid Email"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">Type your valid Email</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Insert No. with/without +91 e.g. 9876543210"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">Insert No. with/without +91 e.g. 9876543210</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">Are you on <b>WhatsApp</b>? <span className="text-red-500">*</span></label>
                <div className="flex gap-8 mt-1 ml-2">
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="whatsapp"
                      value="Yes"
                      checked={form.whatsapp === "Yes"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="whatsapp"
                      value="No"
                      checked={form.whatsapp === "No"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-3 rounded-lg shadow-lg text-lg transition">Submit</button>
              </div>
            </form>
          </div>
        </section>
      )}
      {/* ITR Type and Guide Section */}
      <div className="w-full flex flex-col items-center">
        <ITRTypeAndGuide />
      </div>
    </div>
  );
};

export default ITRFilingService; 
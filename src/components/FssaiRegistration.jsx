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
      <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-2">
        FSSAI Registration | Fssai License | Food License
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          #1 Portal to get done FSSAI Registration with lowest cost in 3 simple
          steps with Govt Certified Portal under Registration No : DIPP9122
          ​Package Start From Just 1999/- INR (Lowest Pricing in India)
        </span>
        <button
          className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded shadow hover:bg-purple-700 transition text-lg uppercase tracking-wide"
          type="button"
          onClick={handleBookNowClick}
        >
          Get Proposal
        </button>
      </div>
      {/* <ITRFilingServiceExtra /> */}

      <div className="min-h-[20vh] bg-gradient-to-r from-purple-50 to-blue-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-purple-400">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 mb-4 tracking-tight text-left w-full pl-4">
          What is fssai full form or fssai meaning?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          Iif you are thinking to start a new food business then you have to
          know about the FSSAI Registration or Food License. FSSAI meaning
          refers to "Food Safety and Standard Authority of India". From the 2006
          all the food related acts come under the FSSAI.The FASSI Department
          make sure i.e all the food related business must follow the guidelines
          and regulations under the FSSAI Act 2006. FSSAI is responsible for
          setting the standard and rules & regulations & directly report to
          health & family welfare, government of India.
        </p>
      </div>

      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}

        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is fssai registration | fssai license?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            FSSAI Registration is basically a 14 digit registration number which
            is used by the food related business & printed on the food products
            with license number. FSSAI Registration is required for each type of
            the business whether it's a trader or manufacturer or import export
            or dairy farms etc. if you are involved in the food processing or
            food manufacturing or packaging or distributing then its mandatory
            to required the FSSAI Registration or Food License.
          </p>
        </div>
      </div>
      <div className="mt-8"></div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          FSSAI Basic Registration Package Just at 1999/- INR
        </h2>

        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 FSSAI Application Drafting</li>
          <li>#2 Government and Professional Fee</li>
          <li>
            #3 FSSAI Basic License Registration up to 12 Lakh Rupees Turnover
            Entity
          </li>
          <li>#4 FSSAI Registration Certificate with FSSAI Number</li>

          <li>#5 10+ Premium Legal Agreements</li>
        </ul>

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
        <section
          ref={formRef}
          className="w-full flex flex-col items-center bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white flex items-center justify-center gap-2 drop-shadow-lg">
            <span role="img" aria-label="calendar">
              📅
            </span>{" "}
            Book Free Consultation Right Now
            </h2>
          <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl border-4 border-purple-300 shadow-2xl mx-auto p-12">
            <div className="border-b-2 border-purple-200 px-10 pt-10 pb-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">
              FSSAI Registration
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
              Simply Fill-Up Below Details and Get Started
              </p>
            </div>
           
            <form className="px-10 pb-10 pt-2" onSubmit={handleSubmit}>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your Good Name"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">
                  Type your Good Name
                </span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your valid Email"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">
                  Type your valid Email
                </span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Insert No. with/without +91 e.g. 9876543210"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">
                  Insert No. with/without +91 e.g. 9876543210
                </span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Are you on <b>WhatsApp</b>?{" "}
                  <span className="text-red-500">*</span>
                </label>
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
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Type of License <span className="text-red-500">*</span>
                </label>
                <select
                  name="licenseType"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  required
                >
                  <option value="">Select License Type</option>
                  <option value="Turnover Up to 12 lakh">Turnover Up to 12 lakh</option>
                  <option value="12 lakh to 20 Crore">12 lakh to 20 Crore</option>
                  <option value="20 Crore or More">20 Crore or More</option>
                </select>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  About your Business <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="aboutBusiness"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Tell us about your business"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Let us know your nature of business <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="natureOfBusiness"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Describe your nature of business"
                  required
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-3 rounded-lg shadow-lg text-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
      {/* ITR Type and Guide Section */}
      <div className="w-full flex flex-col items-center">
        {/* <ITRTypeAndGuide /> */}

        {/* Informational Sections for FSSAI Registration */}
        <div className="w-full mx-auto bg-white p-10 mt-0 shadow space-y-12 text-lg md:text-xl text-gray-800">
          {/* Who Requires FSSAI Registration */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Who Requires FSSAI Registration | FSSAI License?</h2>
            <p>FSSAI Registration or Food License is required for all types of food-related business. Even if you are just starting a food-related business (processing, manufacturing, distribution), it is required from the start, irrespective of turnover.</p>
            <ul className="list-disc pl-8 space-y-1">
              <li>Increase your customer confidence in terms of safety</li>
              <li>Helps in removal of multiple legal regulations</li>
              <li>Helps in promoting innovative products</li>
            </ul>
          </section>

          {/* Type of FSSAI Registration | License */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Type of FSSAI Registration | License</h2>
            <p>All small food-related businesses require legal registration to start a business in India. This includes business incorporation entities like private limited company, proprietorship firm, etc. Apart from this, you need other licenses like Food License or GST Registration. Food License and FSSAI License are the same.</p>
            <p>There are mainly 3 types of Food License or FSSAI License categories required by each food-related business:</p>
            <ul className="list-disc pl-8 space-y-1">
              <li><b>FSSAI Basic Registration:</b> Required for small businesses with turnover less than 12 lakh rupees/year. If you are just starting, only basic FSSAI or Food License Registration is needed. Turnover is calculated yearly.</li>
              <li><b>FSSAI State License Registration:</b> If you already have FSSAI Basic Registration and cross 12 lakh rupees/year but less than 20 Cr., you need FSSAI State License Registration.</li>
              <li><b>FSSAI Central License Registration:</b> Required for import/export business, supplying to government departments, or large scale turnover (more than 20 Cr. in a year).</li>
            </ul>
          </section>

          {/* Food and Safety Department or Registration */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">What is Food and Safety Department or Registration?</h2>
            <p>Food and Safety Department is related to the FSSAI Department. It works on forming rules regarding food-related articles and implementing policies. It also provides scientific and technical support to the central government regarding food-related articles, collects food-related data, and raises general awareness about Food Safety and Food Standards.</p>
          </section>

          {/* Documents Required for FSSAI Registration | Food License */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Documents Required for the FSSAI Registration | Food License</h2>
            <h3 className="text-2xl font-bold mt-4 mb-2">Personal Information of the Applicant:</h3>
            <ul className="list-disc pl-8 space-y-1">
              <li>PAN Card: Copy of PAN is mandatory identity proof.</li>
              <li>Copy of Aadhaar Card/ Voter ID/ Driving License/Passport (any one)</li>
              <li>Passport size Photo</li>
            </ul>
            <h3 className="text-2xl font-bold mt-4 mb-2">Documents for Registered Office:</h3>
            <ul className="list-disc pl-8 space-y-1">
              <li>Latest Utility Bill (Electricity / Water Bill)</li>
              <li>Copy of Rent Agreement (if rented property)</li>
              <li>Copy of property paper (if owned property)</li>
            </ul>
            <p className="mt-2">Note: It can be a residential property, but above documentation is required.</p>
            <h3 className="text-2xl font-bold mt-4 mb-2">Additional Documents for Basic FSSAI Registration:</h3>
            <ul className="list-disc pl-8 space-y-1">
              <li>Form-A completed and signed by all directors/partners/proprietor/Executive member of society</li>
              <li>Declaration regarding food safety management system (FSMS) on firm/company letterhead</li>
              <li>Proof of Income determining annual turnover</li>
              <li>Nomination of person appointed by company in Form No.IX and Board Resolution copy</li>
              <li>Self Declaration by Director</li>
              <li>Affidavit on Non-Judicial Stamp paper</li>
            </ul>
            <h3 className="text-2xl font-bold mt-4 mb-2">Additional Documents for State or Central FSSAI License:</h3>
            <ul className="list-disc pl-8 space-y-1">
              <li>Duly filled Form – B completed and signed by directors/partners/proprietor/Executive member of society</li>
              <li>List of Partners/Proprietor/Executive Members of Society with address and contact details</li>
              <li>Blueprint/layout plan of processing unit, installed capacity, and horsepower used</li>
              <li>Constitution of company MOA and AOA / Partnership Deed</li>
              <li>Analysis report as per business activity</li>
              <li>Food and safety management system and certificate</li>
              <li>Declaration regarding FSMS on firm/company letterhead</li>
              <li>Proof of Income determining annual turnover</li>
              <li>Nomination of person appointed by company in Form No.IX and Board Resolution copy</li>
              <li>Self Declaration by Director</li>
              <li>NOC from local authority</li>
              <li>Affidavit on Non-Judicial Stamp paper</li>
              <li>List of food category to be manufactured</li>
              <li>Production unit Photograph</li>
              <li>Any other documents as required by authority</li>
            </ul>
          </section>

          {/* FSSAI Registration Fee or Cost */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">What is FSSAI Registration Fee or Cost?</h2>
            <p>FSSAI Registration Fee is divided into government fee and professional fee. Government fee is charged by the govt for application processing, and professional fee is charged by CA/Lawyer/Professional to prepare your application.</p>
            <ul className="list-disc pl-8 space-y-1">
              <li>FSSAI Registration – 100/- Per Year</li>
              <li>FSSAI State License – 2000/- 5000/- Per Year</li>
              <li>FSSAI Central License – 7500/- Per Year</li>
            </ul>
          </section>

          {/* FSSAI Registration Form */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">FSSAI Registration Form</h2>
            <p>FSSAI Registration or Food License has mainly 2 types of forms: Form A & Form B.</p>
            <ul className="list-disc pl-8 space-y-1">
              <li><b>Form A</b> (For basic FSSAI Registration): Filled by the food business operator, comprises FBOs business activities.</li>
              <li><b>Form B</b> (For State FSSAI Registration): Required for State Food License Registration, mandatory with required documents for state license.</li>
            </ul>
          </section>

          {/* How to Apply for FSSAI Registration */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">How to Apply for FSSAI Registration?</h2>
            <ol className="list-decimal pl-8 space-y-2">
              <li>Submit the customized FSSAI form with necessary details & make payment via debit/credit card/net banking.</li>
              <li>After payment, you get confirmation via SMS & email with documents checklist.</li>
              <li>Send documents via email as scanned copies.</li>
              <li>Be Relax! Our professional will submit your application with the government and deliver the certificate to you.</li>
            </ol>
          </section>

          {/* Validity of FSSAI License */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Validity of FSSAI License</h2>
            <p>FSSAI License is issued for 1-2 years. After that, there is a renewal process. To check validity or authority of FSSAI License, you can check online.</p>
          </section>

          {/* Important Guidelines for Food License Registration */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Important Guidelines for the Food License Registration</h2>
            <ul className="list-disc pl-8 space-y-1">
              <li>If any food operator is operating in more than 10 states, central registration is required for the registered office.</li>
              <li>Importers/exporters need IEC Code before Food License & must apply on the same address.</li>
              <li>Brand owner must display the FSSAI Logo and license number on the food package.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ITRFilingService;

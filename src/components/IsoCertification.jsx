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
    business: "",
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
        ISO Certification in India
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          Now File ITR Online with India's Largest Tax Consultant at Affordable
          Cost
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
          Introduction about ISO Certification in India
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          In today's competitive world, you have to provide people with better
          quality services and to maintain a good image in the market. Even if
          your organization wants to sell and reach the international market,
          you have to prove your organization worthiness and your products in
          the market. ISO Certification in India helps in that. ISO
          Certification certifies that your goods/ services, as well as your
          organization, provide quality and other standards as per the
          international standards. In this article we will talk about ISO
          certification, types, bodies, cost, process and documents required for
          ISO Certification in India and how MyOnlineCA will help you to get
          your ISO certificate. MyOnlineCA is a web service provider which is
          providing services of registration under various recognized authority
          like Ministry of corporate affairs, Income tax department of India and
          others. So let us first begin with what ISO is.
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is ISO Registration
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            International standard organization for standards (ISO) is an
            international entity which develops ISO standards in furtherance of
            international trade. It was formed in 1947 as an organization to
            promote international industrial and commercial standards. Around
            162 countries are members of ISO and has been laying down standards
            for international trade and facilitates world trade by providing a
            common standards for all the countries.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceEFiling /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is ISO Certification in India
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
            ISO certification ensures that the products or services provided are
            meeting standards and quality. ISO is an independent and
            nongovernmental organization providing standards for quality,
            efficiency and safety of goods and services of an organization. The
            ISO certificate certifies the organization's quality management
            systems. There are various objectives of ISO some of which are:
            increase the quality and productivity of the organization, making
            organization hub for profitable opportunities, customer and employee
            satisfaction, and best quality products and services.
          </p>
        </div>
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          ISO Registration Fees
        </h2>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 1499/- INR ( All Inclusive)
        </div>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Include :
        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 ISO Registration by Professional Legal Expert</li>
          <li>#2 ISO Registration application Preparation and Drafting</li>
          <li>
            #3 Submission of the ISO Registration with the Govt with the proper
            documents.
          </li>
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
              ISO Registration Certificate
              </h2>
              <p className="text-lg md:text-xl text-center text-gray-600 mb-2 px-16">
              Trusted by 1 lakh + Customer across India

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
                  About Your Business <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Let us know about Your Business"
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

      {/* Additional ISO Certification Information Sections */}
      <div className="w-full  mx-auto px-4 py-8 space-y-8 bg-white">
        
        {/* Different ISO Certifications Available */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Different ISO Certifications Available in India
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 px-16">
            In India, businesses can choose from several ISO certifications based on their sector and the type of services or products they offer. Below are some popular ISO certification types:
          </p>
          <ul className="space-y-3 text-gray-700 px-16">
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>ISO 9001</strong> – Ensures a strong quality management system for reliable products/services.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>ISO 13485</strong> – Specifically for quality standards in the medical device industry.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>ISO 14001</strong> – Targets effective environmental management practices.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>OHSAS 18001</strong> – Focuses on occupational health and safety procedures.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>AS9100</strong> – Required for quality assurance in aerospace manufacturing.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>ISO ITAR</strong> – Relevant to handling and distributing sensitive technologies.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>Lean Manufacturing</strong> – Reduces waste while boosting productivity.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-blue-600 font-semibold mr-2">•</span>
              <span><strong>R2 Certification</strong> – Mandated for ethical and safe electronic waste management.</span>
            </li>
          </ul>
        </div>

        {/* Understanding ISO Certification Bodies */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Understanding ISO Certification Bodies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-16">
            ISO itself doesn't issue certifications. Instead, accredited third-party organizations do. In India, reputed bodies include Bureau Veritas, BSI, Intertek, and TUV Nord. Always choose a certification provider that is recognized, experienced, and relevant to your industry domain.
          </p>
        </div>

        {/* Choosing a Reliable ISO Certification Body */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Choosing a Reliable ISO Certification Body
          </h2>
          <ul className="space-y-3 text-gray-700 px-16">
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-purple-600 font-semibold mr-2">•</span>
              <span>Must hold proper accreditation or meet ISO accrediting standards.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-purple-600 font-semibold mr-2">•</span>
              <span>Should be trustworthy and well-reviewed in the market.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-purple-600 font-semibold mr-2">•</span>
              <span>Needs relevant industry experience.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-purple-600 font-semibold mr-2">•</span>
              <span>Must offer comprehensive and adaptable audit services.</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-purple-600 font-semibold mr-2">•</span>
              <span>Pricing should be affordable and justified.</span>
            </li>
          </ul>
        </div>

        {/* Required Documents for ISO Certification */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Required Documents for ISO Certification
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 px-16">
            The documents needed depend on the certification you're applying for. For example, ISO 9001 requires:
          </p>
          <ul className="space-y-3 text-gray-700 px-16">
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-yellow-600 font-semibold mr-2">•</span>
              <span><strong>QMS Scope:</strong> Includes calibration records (mandatory) and risk procedure documents (optional).</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-yellow-600 font-semibold mr-2">•</span>
              <span><strong>Policies/Objectives:</strong> Design output reviews (mandatory) and development procedures (non-mandatory).</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-yellow-600 font-semibold mr-2">•</span>
              <span><strong>Evaluation Criteria:</strong> Records of inputs (mandatory) and sales processes (optional).</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-yellow-600 font-semibold mr-2">•</span>
              <span><strong>Supplier Selection:</strong> Includes records of development controls and supplier evaluation.</span>
            </li>
          </ul>
        </div>

        {/* Steps to Obtain ISO Certification */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Steps to Obtain ISO Certification
          </h2>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside px-16 text-lg md:text-xl">
            <li className="px-2 text-lg md:text-xl">Choose the ISO standard and a certified provider.</li>
            <li className="px-2 text-lg md:text-xl">Fill out the application form with all required rights, confidentiality, and legal terms.</li>
            <li className="px-2 text-lg md:text-xl">Your documents and internal quality system will be reviewed.</li>
            <li className="px-2 text-lg md:text-xl">The provider will identify major gaps and give time to fix them.</li>
            <li className="px-2 text-lg md:text-xl">Submit a plan to address all the shortcomings.</li>
            <li className="px-2 text-lg md:text-xl">An audit will be conducted; compliance issues are categorized.</li>
            <li className="px-2 text-lg md:text-xl">If all requirements are met, certification is granted based on the audit report.</li>
          </ol>
        </div>

        {/* Estimated Cost of ISO Certification */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Estimated Cost of ISO Certification
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 px-16">
            The cost to obtain ISO certification differs by business and depends on:
          </p>
          <ul className="space-y-3 text-gray-700 px-16">
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-red-600 font-semibold mr-2">•</span>
              <span>Workforce size</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-red-600 font-semibold mr-2">•</span>
              <span>Chosen ISO standard</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-red-600 font-semibold mr-2">•</span>
              <span>Operational complexity</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-red-600 font-semibold mr-2">•</span>
              <span>Risk factors involved</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-red-600 font-semibold mr-2">•</span>
              <span>Number of work shifts</span>
            </li>
          </ul>
        </div>

        {/* Timeframe to Get ISO Certified */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Timeframe to Get ISO Certified
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 px-16">
            The certification process duration varies by business size:
          </p>
          <ul className="space-y-3 text-gray-700 px-16">
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-teal-600 font-semibold mr-2">•</span>
              <span><strong>Small/Micro Businesses:</strong> Around 6–8 months</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-teal-600 font-semibold mr-2">•</span>
              <span><strong>Medium Businesses:</strong> Around 8–12 months</span>
            </li>
            <li className="flex items-start px-2 text-lg md:text-xl">
              <span className="text-teal-600 font-semibold mr-2">•</span>
              <span><strong>Large Enterprises:</strong> Around 12–15 months</span>
            </li>
          </ul>
        </div>

        {/* Role of ISO Certification Consultants */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Role of ISO Certification Consultants
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-16">
            Many experienced professionals now offer consulting services for ISO implementation. These consultants help companies understand certification requirements, streamline internal processes, and prepare for audits efficiently. You can find these experts online with ease.
          </p>
        </div>

        {/* How MyOnlineCA Supports ISO Certification */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            How MyOnlineCA Supports ISO Certification
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-16">
            MyOnlineCA is a top-tier online platform in India offering legal and compliance solutions. They guide startups and businesses through ISO registration, offering affordable services and personalized support through phone, email, and WhatsApp. They assist in selecting the right ISO standard and help obtain certification from the right bodies.
          </p>
        </div>

        {/* Final Thoughts on ISO Certification */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Final Thoughts on ISO Certification
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-16">
            Getting ISO certified builds trust and showcases your organization's dedication to quality and international standards. Select the right ISO type and a reputed certifying agency to benefit from market competitiveness and customer confidence. ISO helps align your organization with global quality standards.
          </p>
        </div>

        {/* Apply for ISO with MyOnlineCA */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 px-16">
            Apply for ISO with MyOnlineCA
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 px-16">
            If you're planning to get ISO certification, MyOnlineCA makes the process simple. Their team will guide you, apply on your behalf, and ensure quick turnaround. You can register directly on their website or download their mobile app for easier access.
          </p>
          <div className="flex justify-center">
            {/* <button
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg text-lg transition transform hover:scale-105"
              onClick={handleBookNowClick}
            >
              Apply Now
            </button> */}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ITRFilingService;

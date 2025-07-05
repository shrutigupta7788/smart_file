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
        Proprietorship Firm Registration Online
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          Sole Proprietorship Firm Registration Online with Govt Certified
          Portal Starting Package Just Only at 1499/- INR
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
          Proprietorship Firm Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          ​Sole Proprietorship Firm Registration is Single Person Firm
          Registration i.e is the main objective is Open Current Bank Account on
          the Name of Business so it's a simply firm which is enable doing
          business in India with Less Compliance and Less Costing. a Sole
          Proprietorship Firm require minimum 2 Legal Entity Proof for open a
          Current Bank Account.
          <br />
          <br />
        </p>
      </div>

      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            2 Legal Entity Proof for the Sole Proprietorship Registration in
            India :
          </h2>
          <div className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 space-y-6">
            {/* Option 1 */}
            <div>
              <h3 className="font-bold text-blue-800 mb-2">
                Option 1: MSME Registration Certificate + Chartered Accountant
                Business Certification
              </h3>
              <p className="mb-1">Applicable in the following conditions:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Deals within the state only (e.g., Delhi to Delhi)</li>
                <li>
                  Within state, expected turnover or sales less than 20 lakh
                  rupees
                </li>
              </ul>
            </div>
            {/* Option 2 */}
            <div>
              <h3 className="font-bold text-blue-800 mb-2">
                Option 2: GST Registration Certificate as Proprietorship Entity
              </h3>
              <p className="mb-1">
                Applicable if <b>any one</b> of the following conditions is met:
              </p>
              <ul className="list-disc pl-6 mb-2">
                <li>
                  Deal in inter-state sales or services (e.g., Rajasthan to
                  Delhi)
                </li>
                <li>Ecommerce or internet-based business</li>
                <li>Trader, Retailer, Manufacturer, or Aggregator</li>
                <li>Within state, turnover exceeds 20 lakh rupees</li>
              </ul>
            </div>
            <p className="mt-4">
              So your first step is to choose the right legal entity certificate
              to register your proprietorship firm.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">{/* <ITRFilingServiceEFiling /> */}</div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          Proprietorship Firm Fees{" "}
        </h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          There are 2 Pricing Package by MyOnlineCA
        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>Package 1 : Start Only 1499/- INR (all inclusive)</li>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            include:
          </div>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            MSME Registration Certificate + CA Certificate
          </div>

          <li>Package 2 – Start Only 1999/- INR( All inclusive)</li>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            include:
          </div>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            MSME + GST Registration Certificate as Proprietorship Firm
          </div>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            Not Enough ?
          </div>

          <div className="mb-3 font-semibold text-gray-800 text-xl">
            Free with Every Package :
          </div>
          <li>#1 10+ Premium Legal Agreements to start your new firm</li>
          <li>#2 Premium Invoice Templates</li>
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
      {/* Informational Sections for Proprietorship Firm Registration */}
      <div className="w-full mx-auto bg-white p-10 mt-0 shadow space-y-12 text-lg md:text-xl text-gray-800">
        {/* Registration Process */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Proprietorship Firm Registration Process
          </h2>
          <ol className="list-decimal pl-8 space-y-2">
            <li>
              Fill-Up your Proprietorship Firm Application Simplified form.
            </li>
            <li>
              Make payment of package online via cards/netbanking/upi/wallets
              etc in a secure way.
            </li>
            <li>
              Assign a dedicated CA/Legal expert & submit the docs online via
              emails or WhatsApp. Be Relax! Your work is done.
            </li>
          </ol>
        </section>

        {/* How to Register Proprietorship Firm Online */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            How to Register Proprietorship Firm Online?
          </h2>
          <p>
            As mentioned above, proprietorship firm requires 2 legal entity
            proofs. These can be done online with the help of MyOnlineCA at the
            cheapest cost. Why do it online through MyOnlineCA? Here are 6
            reasons:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              Get better & cheap pricing package as compared to agents or
              traditional & other portals.
            </li>
            <li>
              MyOnlineCA is a recognized company under Govt Official Startup
              India Programme, trusted by over 10k customers.
            </li>
            <li>
              Highest social true reviews on Facebook with 5-star ratings.
            </li>
            <li>Dedicated support via Emails, Calls, WhatsApp.</li>
            <li>Free premium legal consultancy to start your new business.</li>
            <li>100% money-back guarantee on any service.</li>
          </ul>
        </section>

        {/* Documents Required */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Documents Required for Sole Proprietorship Registration
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              KYC of Applicant: Pan Card + Aadhar Card or Voter or Driving or
              Passport etc.
            </li>
            <li>
              Firm Address Proof: Electricity Bill, Gas Bill, or Phone Bill etc.
              (No issues if it's on other names)
            </li>
            <li>
              For GST Additional: Passport Size Photograph of the applicant
            </li>
            <li>
              Personal Bank Account Cancel Cheque or Bank Statement or Passbook
              Front Page (any one)
            </li>
          </ul>
        </section>

        {/* Time to Register */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Time to Register Proprietorship Firm?
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              MSME Registration + CA Certification: 2-6 days avg from working on
              the assignment.
            </li>
            <li>
              GST Registration: avg 7 days from working on the assignment.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Benefits of Proprietorship Firm Registration
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>1 Person Required as Single Entrepreneur</li>
            <li>Single Owner of the Business</li>
            <li>Easy to Start and Easy to Close</li>
            <li>Complete Control</li>
            <li>Lower Cost of Formation and Compliance</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            FAQ on Sole Proprietorship Registration
          </h2>
          <ul className="space-y-4">
            <li>
              <b>
                1. Does it require commercial property or office for
                registration?
              </b>
              <br />
              No, you can register on your residential property also, whether
              rented or owned. You need just utility bills copy with permission
              from your landlord or owner.
            </li>
            <li>
              <b>2. Is NOC required in rental or own property case?</b>
              <br />
              If the bill copy is on another person's name, then yes, No
              Objection Certificate is required. Standard format is shared by us
              later.
            </li>
            <li>
              <b>3. Can I keep any name of the Firm?</b>
              <br />
              Yes, you can keep any name. It's not related to private limited
              company or LLP or OPC. Just keep the name without any extension.
            </li>
            <li>
              <b>4. Can I register the firm on my family member's name?</b>
              <br />
              Yes, you can register your firm on your family member's name if
              you have any objection. Same docs required as above.
            </li>
            <li>
              <b>
                5. Is there any other way to register my proprietorship firm
                apart from above 2 options?
              </b>
              <br />
              Yes, but it's expensive and less valid. Options: Shop Act License,
              Income Tax Return (Business ITR).
            </li>
            <li>
              <b>6. Is Sole Proprietorship Firm Registration mandatory?</b>
              <br />
              It's an unregistered legal entity, so only legal entity proof is
              needed from the government to deal with vendors or banks. No
              Registration Certificate under the Firm Act.
            </li>
            <li>
              <b>7. What are disadvantages of Proprietorship Firm?</b>
              <br />
              Lack of Resources, Unlimited Liability, Lack of Credibility,
              Cannot raise funds easily, Cannot add Partners.
            </li>
            <li>
              <b>
                8. Can NRI become Proprietor in Sole Proprietorship
                Registration?
              </b>
              <br />
              No, only Indian residents can register. NRIs can invest.
            </li>
            <li>
              <b>9. How much money is required to start Proprietorship?</b>
              <br />
              No minimum capital required. Start with any amount.
            </li>
            <li>
              <b>
                10. What are the annual compliance or maintenance for
                Proprietorship?
              </b>
              <br />
              GST Returns (if GST registered), Income Tax Return (filed in
              personal return).
            </li>
            <li>
              <b>
                11. Can I convert my Proprietorship Firm into a Company or
                Private Limited Company?
              </b>
              <br />
              Yes, there is a standard process to convert.
            </li>
            <li>
              <b>
                12. How to register the name in Sole Proprietorship
                Registration?
              </b>
              <br />
              No rules for names. Choose any name not trademarked by another
              company. For security, register a trademark.
            </li>
            <li>
              <b>
                13. How do I get my GST or MSME or CA Certificate from
                MyOnlineCA?
              </b>
              <br />
              You get GST & MSME Certificate as digital certificate via email
              and CA Certificate hard copy via courier.
            </li>
            <li>
              <b>14. Do I need to visit any office or department?</b>
              <br />
              No, just send documents via email or WhatsApp.
            </li>
            <li>
              <b>
                15. How can I check the validity of the Govt issued Registration
                Certificate?
              </b>
              <br />
              You get verification steps to check certificate validity on the
              government website.
            </li>
            <li>
              <b>
                16. Proprietorship Firm or Company Registration are the same?
              </b>
              <br />
              No, they are different. Proprietorship is a simple firm legal
              entity, not properly registered with the government, while Private
              Limited Company is registered with the Ministry of Corporate
              Affairs.
            </li>
            <li>
              <b>
                17. Is there any way to reduce the proprietorship firm fees?
              </b>
              <br />
              Yes, go with simple MSME with CA Certification or GST. Shop Act,
              ITR, or Trade License are expensive for startups.
            </li>
          </ul>
        </section>

        {/* Steps for Registering Sole Proprietorship Firm in India for Startups */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Steps for Registering Sole Proprietorship Firm in India for Startups
          </h2>
          <p>
            All valid license certificates can be divided into two categories:
          </p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>
              <b>Tax Registration in India (GST Registration):</b> Required for
              inter-state business, trading, retail, or online business, or if
              turnover exceeds 20 lakh rupees (10 lakh in NE states).
              <br />
              Documents required: Pan Card, Aadhar Card, Electricity Bill, Bank
              Statement/Cancel Cheque, Passport Size Photo.
            </li>
            <li>
              <b>Basic Local or Central Government or Other Body Licenses:</b>{" "}
              Includes CA Certificate, MSME Registration, Income Tax Return,
              Shop Act License. Most banks require any 2 valid certifications
              out of these 4.
            </li>
          </ol>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Conclusion about Registering a Sole Proprietorship Firm in India
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              <b>Option 1 as GST Registration:</b> Go with this option when you
              need GST Registration as mandatory or voluntary registration due
              to business nature and legal conditions.
            </li>
            <li>
              <b>
                Option 2 as MSME or CA Certification + ITR or CA Certification +
                Shop Act License:
              </b>{" "}
              Go with this option when you are starting a very small business
              and do not require GST Registration.
            </li>
          </ul>
        </section>
      </div>
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
            Book Free Consultation Right Now{" "}
          </h2>
          <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl border-4 border-purple-300 shadow-2xl mx-auto p-12">
            <div className="border-b-2 border-purple-200 px-10 pt-10 pb-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">
                Proprietorship Mobile App
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
                100% Govt Certified Platform with Registered 50k+ Firm's
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
      </div>
    </div>
  );
};

export default ITRFilingService;

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
    category: "",
    message: "",
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
        LLP Registration Online
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          India's No #1 Portal to Get Done LLP Registration | LLP Incorporation
          at Cheapest Cost 10000+LLP Registered. Are you Next ?
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
          What is LLP ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          LLP is called Limited Liability Partnership which is introduced in the
          year of 2008 under the Limited Liability Partnership Act 2008. LLP is
          similar to the general Partnership Firm Registration but due to its
          legal structure there is no limited liability in the general
          partnership so govt of India introduce Limited Liability Partnership
          on 9th January 2009 and the First LLP Incorporated on 2nd April 2009
          as per Wikipedia.
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            {/* <ITRFilingServiceWhatIs /> */}What is LLP Registration
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            LLP Registration is a standard Process where 2 LLP Partners create a
            LLP Incorporation Entity with the limited liability and open a
            current bank account on the LLP Name & Start the business. Here
            partners have to pay the Government Fee & Professional Fee for the
            same.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceEFiling /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            LLP Incorporation Rules
          </h2>

          <ul className="list-decimal pl-10 pr-2 text-base md:text-lg text-gray-700 mb-6 space-y-1">
            <li>Minimum required 2 partners to create a LLP Incorporation.</li>
            <li>
              There is No Authorised share capital concept like private limited
              company registration. so you can start with any amount of the
              share capital of the LLP Partners
            </li>
          </ul>
        </div>
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          LLP Registration Fees
        </h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          We at MyOnlineCA offers awesome package to small startups on LLP
          Registration. There are 2 Type of Fee in LLP Registration –
        </div>
        <br />
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 8999/- INR (Exclude GST + Except LLP Agreement Stamp Duty) +
          GST Credit Available
        </div>
        <br />

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          include:
        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>
          #1 2 LLP Designation Partner DIN + DSC

          </li>
          <li>
          #2 Name Approval of LLP Company

          </li>
          <li>
          #3 Certificate of Incorporation + PAN & TAN of the LLP


          </li>
         
        </ul>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
        Free with the above package :

        </div>
        <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>
          #1 MSME Registration Certificate to avail govt benefits.
          .
          </li>
          <li>#2 10+ Premium Legal Agreements Template.

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
              Company Registration in India
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
              100% Govt Certified Platform with 1 lakh+companies
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
              {/* Choose Category */}
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Choose Category <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-2 mt-1 ml-2">
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="category"
                      value="Pvt Ltd Company (2 Person)"
                      checked={form.category === "Pvt Ltd Company (2 Person)"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Pvt Ltd Company (2 Person)
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="category"
                      value="LLP (2 Person)"
                      checked={form.category === "LLP (2 Person)"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    LLP (2 Person)
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="category"
                      value="OPC (1 Person)"
                      checked={form.category === "OPC (1 Person)"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    OPC (1 Person)
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="category"
                      value="Help Me to Choose"
                      checked={form.category === "Help Me to Choose"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Help Me to Choose
                  </label>
                </div>
              </div>
              {/* Your Message */}
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Want to Start Telecom and Petrochemical Company. Help me to Setup my Private Limited Company in Mumbai."
                  required
                  rows={4}
                />
                <span className="text-xs text-gray-400 mt-1">
                  Let us know your Requirements in Details
                </span>
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
      {/* Informational Section: LLP Registration */}
      <section style={{padding: '6rem', width: '100vw', minHeight: '100vh', maxWidth: '100%'}}>
        <h2 style={{fontSize: '2.5rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>LLP Incorporation Procedure</h2>
        <p style={{fontSize: '1.25rem'}}>LLP Incorporation has a complex process by the Govt, but with the help of MyOnlineCA you can simplify it in only 3 steps.</p>
        <ul style={{fontSize: '1.25rem'}}>
          <li><b>Step 1:</b> Simply fill up the LLP Registration Application Form and provide basic business details.</li>
          <li><b>Step 2:</b> Make the professional fee 1st installment (₹1999) via Cards/Netbanking/UPI etc.</li>
          <li><b>Step 3:</b> Get instant confirmation email & call with the assigned dedicated CA who helps you start your LLP Registration process.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Documents Required for LLP Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>PAN Card of all partners</li>
          <li>Identity proof of partners (Voter ID, Passport, Aadhar Card, etc.)</li>
          <li>Address proof of partners (Voter ID, Driver's License, Aadhar Card, etc.)</li>
          <li>Proof of residence of partners (Gas bill, Electricity bill, etc. not older than 2 months)</li>
          <li>Photograph of the partners</li>
          <li>Proof of registered office (Sale Deed, Rent Agreement, NOC with electricity bill copy)</li>
          <li>Digital signature certificate of a partner (provided by MyOnlineCA)</li>
          <li>LLP agreement executed among the parties</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Features of LLP Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>LLP is a body corporate with a separate legal entity from its partners.</li>
          <li>Governed by an LLP agreement; partners' duties and rights are defined there.</li>
          <li>Cannot be started with a sole owner; minimum two partners required.</li>
          <li>Liability is limited to the extent of agreed contribution; partners are not liable for other partners' negligence.</li>
          <li>Only designated partners are responsible for compliance.</li>
          <li>Existing companies can convert to LLP.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Minimum Requirements for LLP Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Minimum two partners required for incorporation.</li>
          <li>No minimum capital required under the LLP Act.</li>
          <li>LLP agreement must be submitted with ROC upon incorporation.</li>
          <li>Designated partners must obtain Designated Partner Identification Number (DPIN/DIN).</li>
          <li>Digital Signature Certificate (DSC) is required.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>LLP Registration Process</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Obtain Digital Signature Certificate (DSC) for proposed partners.</li>
          <li>Reserve firm's name under LLP-RUN services (no Form 1 required now).</li>
          <li>Alternatively, file the FiLLiP form (incorporation form) directly without reserving name separately.</li>
          <li>After incorporation, file the LLP agreement within 30 days.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>LLP Registration Cost</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>DPIN/DIN (2 Partners): ₹1,000 (lifetime validity)</li>
          <li>Digital Signature (DSC, 2 Partners): ~₹2,000</li>
          <li>Name Reservation: ₹500</li>
          <li>Government Charges (incl. Stamp Duty): ~₹750</li>
          <li>LLP Agreement by professional: ₹250</li>
          <li>LLP Partner Consent by professional: ₹250</li>
          <li><b>Total Government Expenses:</b> ₹4,750–5,000</li>
          <li><b>Professional Charges:</b> ₹4,000–6,000 (varies by provider)</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Timeline for LLP Incorporation</h3>
        <p style={{fontSize: '1.25rem'}}>LLP registration is quick and fully online. After filing, you get your incorporation number in a few days. LLP agreement must be filed within 30 days of incorporation.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>How to Choose LLP Name During Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Reserve your LLP name via LLP-RUN web service (max 2 names per application).</li>
          <li>Or, use the FiLLiP form to incorporate and reserve the name in one step.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>How to Check LLP Name Availability</h3>
        <p style={{fontSize: '1.25rem'}}>Check name availability online before applying. You can reserve 2 names per application as per MCA rules.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Annual Compliance After LLP Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>File annual statement and profit & loss statement to MCA.</li>
          <li>File income tax return and obtain PAN for LLP.</li>
          <li>Comply with all MCA and Income Tax rules to avoid penalties.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>FAQ on LLP Registration Online</h3>
        <div style={{fontSize: '1.25rem'}}>
          <div><b>1) Who can become partner in LLP registration?</b><br/>Any individual or body corporate, unless of unsound mind or insolvent.</div>
          <div><b>2) Can NRI become partner in LLP?</b><br/>Yes, NRIs and foreign entities can be partners where 100% FDI is allowed.</div>
          <div><b>3) What is LLP Agreement?</b><br/>Agreement signed among partners, submitted to ROC for incorporation.</div>
          <div><b>4) Minimum/Maximum number of partners?</b><br/>Minimum 2, no maximum limit.</div>
          <div><b>5) Why do small startups prefer LLP?</b><br/>Low compliance, easy incorporation, low fees, limited liability.</div>
          <div><b>6) Is LLP cheaper than Private Limited Company?</b><br/>Yes, lower cost and compliance.</div>
          <div><b>7) What is stamp duty in LLP agreement?</b><br/>Depends on state (e.g., ₹500 in Rajasthan).</div>
          <div><b>8) Is commercial office required for LLP registration?</b><br/>No, residential address can be used.</div>
          <div><b>9) Can I do LLP formation myself?</b><br/>No, professional service and DSC authorization required.</div>
          <div><b>10) What is the tax rate for LLP?</b><br/>Treated as partnership firm, taxed at 30.9% on profit.</div>
          <div><b>11) Can I include family members as partners?</b><br/>Yes, any family member can be a partner.</div>
          <div><b>12) Minimum share capital?</b><br/>No minimum, but ₹10,000 is recommended.</div>
          <div><b>13) Is GST registration required after LLP registration?</b><br/>Required if turnover exceeds ₹20 lakh/year; recommended for input credit.</div>
          <div><b>14) Is LLP eligible for Startup India?</b><br/>Yes, LLP is a recognized legal entity for Startup India.</div>
          <div><b>15) Can LLP have multiple businesses?</b><br/>Yes, multiple businesses can be run under one LLP name.</div>
          <div><b>16) Does LLP secure company name and logo?</b><br/>Only company name is secured; logo/brand needs trademark registration.</div>
          <div><b>17) Criteria to become partner?</b><br/>Minimum age 18 years, valid documents (PAN, etc.).</div>
          <div><b>18) Validity/renewal of LLP registration certificate?</b><br/>Lifetime validity, no renewal required.</div>
          <div><b>19) Can working professionals register LLP?</b><br/>Yes, unless restricted by job agreement.</div>
          <div><b>20) Is physical presence required?</b><br/>No, process is fully online.</div>
          <div><b>21) Do VCs/Angels invest in LLPs?</b><br/>Usually prefer Pvt Ltd, but can invest in LLPs.</div>
          <div><b>22) Mandatory annual compliance?</b><br/>Annual return and statement of accounts; audit not required till ₹40 lakh turnover.</div>
          <div><b>23) Can LLP be converted to Pvt Ltd or other entity?</b><br/>Not practical/possible as of now.</div>
          <div><b>24) Any other license required?</b><br/>Depends on business: GST, Trademark, FSSAI, IEC, etc. as needed.</div>
        </div>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Advantages of LLP Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li><b>Easy to Form:</b> Simple process, low cost (₹4,000–5,000 government fees).</li>
          <li><b>Liability:</b> Separate legal entity, partners' liability limited to their contribution.</li>
          <li><b>Perpetual Succession:</b> LLP continues regardless of partner changes.</li>
          <li><b>Flexible to Manage:</b> Partners can manage as per LLP agreement.</li>
          <li><b>Easy Transferable Ownership:</b> Ownership can be transferred as per LLP agreement.</li>
          <li><b>Separate Property:</b> LLP can own property in its own name.</li>
          <li><b>Taxation:</b> No surcharge, no tax on profit distribution to partners.</li>
          <li><b>Raising Money:</b> LLP can attract finance from investors and institutions.</li>
          <li><b>Capacity to Sue:</b> LLP can sue and be sued in its own name.</li>
          <li><b>No Mandatory Audit Requirement:</b> Audit only if turnover > ₹40 lakh or contribution > ₹25 lakh.</li>
          <li><b>Partners are not agents of other partners:</b> Not liable for individual acts of other partners.</li>
        </ul>
      </section>
    </div>
  );
};

export default ITRFilingService;

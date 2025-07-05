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
        Private Limited Company Registration in India : Start Pvt Ltd Company
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          Private Limited Company Registration by 100% Govt Certified Portal
          Just Fill-Up Below Details and Get Started Your Pvt Ltd Company
          Registration in Seconds with FREE Consultancy !
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
          What is Private Limited Company Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          ​Private Limited Company Registration is one of the most popular legal
          entity in India. In simplified terms, its a proper company
          registration in India with the ministry of corporate affairs and gives
          you rights doing business anywhere in India or outside. MCA register
          your pvt ltd company registration and provide to you CIN Number with
          Certificate of Incorporation. At the end of the process, you have to
          simply open a current bank account on the Company Name on the basis of
          Certificate and Start your Company Operations.

          <br  />
          <br  />
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is Pvt Ltd Company Registration Rules ?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <li>
              ​#1 Require minimum 2 directors or partner in the Private Limited
              Company.
            </li>
            <br />
            <li>
              #2 Authorised Share Capital: 1 Lakh Rupees ( It's just a share
              proposed value, doe'st not mean you have to invest 1 lakh rupees)
            </li>

            <br />
          </p>
        </div>
      </div>
      <div className="mt-8"></div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
        Pvt Ltd Company Registration Fees
        </h2>
        <p className="md:text-2xl mb-0">
          We at MyOnlineCA offers Cheapest Cost on Pvt Ltd Company Registration
          Fees
        </p>
        <br></br>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 10999/- INR (Exclude GST) + GST Credit Available
        </div>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Include :
        </div>

        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 2 Directors DIN + DSC</li>
          <li>#2 Name Approval of Company + MOA & AOA Drafting & Printing</li>
          <li>#3 Certificate of Incorporation + PAN & TAN of the Company</li>
        </ul>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Free with above package :
        </div>

        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 MSME Registration Certificate to avail govt benefits</li>
          <li>#2 10+ Premium Legal Agreements Template.</li>
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
            Book Now for Pvt Ltd Company Registration in India
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
      {/* Informational Sections for Pvt Ltd Company Registration */}
      <div className="w-full mx-auto bg-white p-16 shadow space-y-12 text-lg md:text-xl text-gray-800">
        {/* What is Pvt Ltd Company Registration Online */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Pvt Ltd Company Registration Online</h2>
          <p>
            Pvt Ltd Company Registration Online is possible through the official MCA Govt Website, but you can't do it yourself because it requires additional digital signature attestation from a Practicing Chartered Accountant, Company Secretary, or Lawyer. So, you have to hire a good CA to get your Private Limited Company Registration done anywhere in India.
          </p>
        </section>

        {/* Registration Process */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Private Limited Company Registration Process</h2>
          <p>Simple 5 Steps Process to Register Your Private Limited Company in India:</p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>Apply for the Digital Signature Certificate (DSC) for all persons who will be directors in the Private Limited Company.</li>
            <li>Apply for the DIN Registration for all persons who will be directors in the Pvt Ltd Company.</li>
            <li>Check Private Limited Company name availability on the MCA Portal &amp; apply for name approval with the RUN Form.</li>
            <li>Once the name is approved, proceed with the SPIC(INC 32) Private Limited Incorporation Form with the E-MoA &amp; E-AOA of the company.</li>
            <li>Apply for the PAN &amp; TAN Application, which is issued with the Certificate of Incorporation.</li>
          </ol>
        </section>

        {/* Documents Required */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Documents required for Private Limited Company Registration</h2>
          <p>Below are the documents required for Private Limited Company Registration:</p>
          <h3 className="text-2xl font-bold mt-4 mb-2">Personal Level (Directors Documents):</h3>
          <ul className="list-disc pl-8 space-y-1">
            <li>Directors Personal Pan Card Copy</li>
            <li>Directors Aadhar Card/Voter id/Passport/Driving License Copy (any one for identity verification)</li>
            <li>Passport Size Photograph</li>
          </ul>
          <h3 className="text-2xl font-bold mt-4 mb-2">Company Level Documents:</h3>
          <ul className="list-disc pl-8 space-y-1">
            <li>Company Business Address Proof (Electricity Bill Copy with NOC or Rent Agreement or Sale Deed)</li>
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Benefits of Private Limited Company Registration</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Easily Setup and recommended for Growing Startups</li>
            <li>Limited Liability for Members</li>
            <li>More Credibility compared to others</li>
            <li>Easily raise funds from Investors</li>
            <li>ESOP Option available to motivate Employees</li>
            <li>Name Protection available</li>
          </ul>
        </section>

        {/* Name Availability */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Pvt Ltd Company Registration Name Availability</h2>
          <p>
            In a private limited company, you must choose a unique name. Once a name is registered with the MCA, no other company can take the same name. You must provide 3-4 names during the approval process. MCA will check and approve as per name availability rules. You can check more about how to search a company name on the MCA portal.
          </p>
        </section>

        {/* Different Forms */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">Different Forms of Online Pvt Ltd Company Registration</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Proprietorship Firm</li>
            <li>Partnership Firm</li>
            <li>OPC Registration</li>
            <li>LLP Registration</li>
          </ul>
        </section>

        {/* Cost Involved */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">What is the Cost Involved in the Private Limited Company Registration?</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>2 Digital Signature – (1000*2) = 2000</li>
            <li>Director Identification Number (500*2) = 1000</li>
            <li>Stamp Duty (Approx) = 2500</li>
            <li>Notary Fees – 1000</li>
            <li>Govt Fee for RUN+PAN+TAN = 1200</li>
            <li>Professional Fee (Market Price) = 3000-5000/- INR</li>
          </ul>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">How Much Time Does it Take to Register Your Pvt Ltd Company?</h2>
          <p>
            There is no standard timeline for Private Limited Company Registration. It depends on document submission and incorporation forms. DSC &amp; DIN take 1-2 days, name approval takes 2-3 days on average. The whole process can take a minimum of 10 days.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">FAQ Series on Private Limited Company Registration</h2>
          <ul className="space-y-4">
            <li><b>1. Can I register a Private Limited Company at my home address?</b><br/>Yes, you can. You need only the utility bill copy of the same.</li>
            <li><b>2. Can I register my family members in the company if I have no partner?</b><br/>Yes, you can register family members on paper. You can change or transfer shares later.</li>
            <li><b>3. How many days does it take to register a private limited company?</b><br/>It takes a minimum of 10 to 15 days on average in India.</li>
            <li><b>4. How much does it cost for private limited company registration?</b><br/>It's about 10,999/- INR except in some states due to stamp duty.</li>
            <li><b>5. What is meant by authorized capital (1 lakh rupees)?</b><br/>It's the maximum share value you can issue. You don't have to invest 1 lakh rupees to start.</li>
            <li><b>6. Is GST Registration required for private limited company registration online?</b><br/>GST Registration is optional until 20 lakh rupees turnover (10 lakh for NE states).</li>
            <li><b>7. Is registration with Startup India possible?</b><br/>Yes, after registering your Pvt Ltd company, you can register with the Startup India portal.</li>
            <li><b>8. Can I run multiple businesses under one private limited company?</b><br/>Yes, you can run multiple businesses under one company. Mention all in your MOA.</li>
            <li><b>9. What is DSC (Digital Signature Certificate) for Online Company Registration?</b><br/>All e-forms are filed with DSC. It is delivered via USB token.</li>
            <li><b>10. How do I register my company name or logo in India?</b><br/>Company name is secured with registration. Logo requires separate trademark registration.</li>
            <li><b>11. What are the minimum requirements to become a director?</b><br/>Any individual/company/NRI, 18+ years, and a Director Identification Number.</li>
            <li><b>12. What is the validity of Private Limited Company Registration?</b><br/>Lifetime validity, unless the company fails to start business within 1 year or doesn't file annual returns.</li>
            <li><b>13. Can I be a director if I am working in a private company?</b><br/>Yes, unless your employment contract prohibits it. Check your agreement.</li>
            <li><b>14. Do I need to visit any govt office?</b><br/>No, everything is done online. Just provide scanned documents via email or WhatsApp.</li>
            <li><b>15. Are FDI or local investors allowed?</b><br/>Yes, venture capitalists and angel investors can invest in a private limited company.</li>
            <li><b>16. What are the mandatory annual compliances?</b><br/>Appointment of auditor, filing AGM, annual return, financial statement, and income tax return.</li>
            <li><b>17. Is Private Limited Company best for NRIs or Foreign Nationals?</b><br/>Yes, no prior RBI approval is required.</li>
            <li><b>18. Can I convert my private limited company into another entity?</b><br/>Yes, you can convert to LLP or OPC, but not to a basic form like Proprietorship or Partnership.</li>
            <li><b>19. What is limited liability protection?</b><br/>Your personal assets are separate from company liabilities.</li>
            <li><b>20. What else do I need to start my business?</b><br/>No other mandatory registration after opening a current bank account. Optionally, you can apply for MSME, Trademark, FSSAI, or Patent Registration.</li>
          </ul>
        </section>

        {/* Step-by-step Guide */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">How to Register a Pvt Ltd Company in India</h2>
          <ol className="list-decimal pl-8 space-y-2">
            <li><b>Application for DSC (Digital Signature Certificate):</b> All e-forms are online and require a digital signature. DSC is prepared by government-authorized agencies and costs around 1000/- INR per DSC.</li>
            <li><b>Apply for DIN (Director Identification Number):</b> DIN is mandatory for directors. After obtaining DSC, apply for DIN via SPICe (INC32 Form) for new companies (up to 3 directors at incorporation).</li>
            <li><b>Application for Name Availability:</b> Choose a unique name and apply via RUN (Reserve Unique Name) or SPICe INC32 Form. You get two chances for approval.</li>
            <li><b>Filing of EMoa and EAOA:</b> Attach electronic MOA &amp; AOA of the company in the SPICe's form.</li>
            <li><b>Apply for PAN &amp; TAN:</b> Now included in the SPICe's form.</li>
            <li><b>Certificate of Incorporation by RoC:</b> If approved, you receive the Certificate of Incorporation with PAN &amp; TAN.</li>
            <li><b>Opening a Current Bank Account:</b> After incorporation, open a current account using the provided documents.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ITRFilingService;

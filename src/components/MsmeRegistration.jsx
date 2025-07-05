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
        MSME Registration Online
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          Now Apply for MSME Registration Online anywhere in India with
          MyOnlineCA Govt Recognized Portal. Issued 1 lakh+ certificate
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
          What is MSME Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          MSME Registration is playing very important role for the small and
          medium business across India.Numerous surveys show that country's true
          economic growth reckoned not just on its large-scale industries and
          foreign investments but also on its small and medium level industries
          that also includes various cottage industries operating in India. By
          looking towards the developing country like India whose economy is
          basically dependent on agriculture and small-scale industries,
          applying for MSME registration or SSI Registration could be considered
          as its backbone. In India, every state has its own tradition and
          culture which they follow and become eminent in that kind of industry.
          No doubt that India is a country with its huge stock of natural
          resources with intense climate variations, so promoting and working in
          such type of industries on a very large scale is very common among the
          traders. So Ultimately MSME Registration are a certification which is
          issued by respective state government department to avail to benefits
          under the MSME Act. Now from the 2015 government modified the MSME or
          SSI Registration and its has been changed into the Udyog Aadhar
          Registration.
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            Why MSME Registration are Important for Small Business ?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            MSME registration is really important for developing the
            transparency and accountability of the above-mentioned industries,
            Government of India has basically categorized these industries which
            is known as MSME- Micro, Small and Medium Enterprises. MSME is
            actually an authorized body that helps in promoting these industries
            throughout the country with the help of officially legalized Act.
            One of the unique advantage of MSME registration is that it
            authorizes numerous incentives and incentives to industries included
            under MSMED Act. In order to subscribe under MSME, a MSME
            registration procedure is mandatory. Apart from the enterprises as
            mentioned above, some firms, or shop registration or public and
            private limited companies, LLPs are also eligible to apply for
            registration under MSME to avail its benefits.
          </p>
        </div>
      </div>
      <div className="mt-8">{/* <ITRFilingServiceEFiling /> */}</div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          Classification under MSME Registration
        </h2>
        <div className="mb-6">
          <p className="text-base md:text-lg text-gray-700 mb-4">
            An industry owner, before applying for MSME registration, should
            know the requisites to classify their company and must file the
            application in the correct category to avoid any technical issues.
            The Government of India has set clear rules and regulations for MSME
            classification, as detailed below:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-base md:text-lg text-gray-700">
            <li>
              <b>Micro Industries:</b> Investment shall not exceed{" "}
              <b>₹25 lakhs</b> for companies in the manufacturing sector and{" "}
              <b>₹10 lakhs</b> for the service sector.
            </li>
            <li>
              <b>Small Industries:</b> Investment shall not exceed{" "}
              <b>₹5 crores</b> for companies in the manufacturing sector and{" "}
              <b>₹2 crores</b> for the service sector.
            </li>
            <li>
              <b>Medium Industries:</b> Investment shall not exceed{" "}
              <b>₹10 crores</b> for companies in the manufacturing sector and{" "}
              <b>₹5 crores</b> for the service sector.
            </li>
          </ul>
        </div>
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
      {/* New MSME Registration Details Section */}
      <div className="w-full mx-auto bg-white p-16 shadow space-y-12 text-lg md:text-xl text-gray-800">

        {/* MSME Registration Process */}
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">MSME Registration Process</h2>
          <p className="mb-2">
            MSME Registration process is completely online, but you are advised to take professional help for filling your application and getting approval from the department. The MSMED Act is not compulsory for companies, but it is always suggested to have government backing for your company. As a result, many medium and small-scale industries are registering their companies. The whole process is as follows:
          </p>
          <ol className="list-decimal pl-8 mb-4 space-y-2">
            <li>Prepare and submit the MSME registration application to the respective government office as per the latest rules and regulations.</li>
            <li>File your personal and business details, including the type of industry you want to run.</li>
            <li>
              Attach the following documents and details:
              <ul className="list-disc pl-8 space-y-1">
                <li>Your Aadhaar Number</li>
                <li>Name of Applicant</li>
                <li>Social Category</li>
                <li>Gender</li>
                <li>Name of Enterprise / Business</li>
                <li>Type of Organization you are opting for</li>
                <li>Your PAN number</li>
                <li>Location of Plant</li>
                <li>Current Office Address</li>
                <li>Mobile Number</li>
                <li>Email ID</li>
                <li>Date of Commencement of Business</li>
                <li>Bank Account Number</li>
                <li>Bank IFSC Code</li>
                <li>Main Business Activity of Enterprise</li>
                <li>NIC 2 Digit Code</li>
                <li>Additional details about Business</li>
                <li>Number of Employees</li>
                <li>Investment in Plant & Machinery / Equipment</li>
                <li>Attachment of your scan copy of Aadhaar card</li>
              </ul>
            </li>
            <li>The usual time is between 2-3 days to complete all the documentation and registration.</li>
          </ol>
          <p>
            Although the registration process is hassle-free, it is recommended to complete all formalities to avoid any difficulties later.
          </p>
        </section>

        {/* Benefits under MSME Registration Online */}
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">Benefits under MSME Registration Online</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li><b>Easy Bank Loans:</b> MSME-registered businesses can avail collateral-free loans. Banks and SIDBI have special schemes for small and medium enterprises.</li>
            <li><b>Reservation Benefits:</b> Registered small businesses can increase production and employment opportunities under government schemes.</li>
            <li><b>Easy to Open Business Bank Account or Get Other Licenses:</b> The MSME Registration Certificate acts as legal proof for opening current accounts or applying for other licenses like GST.</li>
            <li><b>Participation in International Trade Fairs:</b> MSMEs get special consideration and support to participate in national and international trade fairs organized by the MSME Department.</li>
            <li><b>Octroi Benefits:</b> Refund of octroi imposed on goods and services delivered by small enterprises.</li>
            <li><b>Stamp Duty and Registration Charges Waived Off:</b> Small enterprises can avail these benefits, previously limited to IT Park or SEZ businesses.</li>
            <li><b>Income Tax Exemption:</b> Innovative or socially beneficial small businesses can get income tax benefits in initial years, including under the Startup India scheme.</li>
            <li><b>Reimbursement under Bar Code Registration:</b> Manufacturing units can get subsidies for mandatory barcode registration.</li>
            <li><b>Subsidy on NSIC Performance and Credit Rating:</b> Small enterprises can get subsidies on various expenses through NSIC Performance.</li>
            <li><b>Industrial Promotion Subsidy:</b> Government provides subsidies to promote small enterprises.</li>
            <li><b>Protection in Delay-Payments from Buyers:</b> MSMEs are protected against delayed payments and can file cases for quick dispute resolution.</li>
            <li>
              <b>Reduction in Interest Rate by Major Banks:</b> Banks have policies to ensure a significant portion of advances go to micro and small enterprises:
              <ul className="list-disc pl-8">
                <li>40% of advances to micro and small manufacturing/service enterprises (up to Rs. 10 lakh/4 lakh investment).</li>
                <li>20% to manufacturing enterprises with Rs. 10–25 lakh investment and service enterprises above Rs. 4 lakh.</li>
                <li>60% of advances must go to micro enterprises.</li>
              </ul>
            </li>
            <li><b>Capital Subsidy:</b> 15% capital subsidy for purchase of plant and machinery.</li>
            <li><b>Security Deposit Waived Off:</b> Security money deposit is waived for MSME-registered enterprises.</li>
            <li><b>Concession in Electricity Bills:</b> MSME Udyog Aadhaar Certificate holders can get concessions in electricity bills in certain areas.</li>
            <li><b>Subsidy for ISO Certificate:</b> Subsidy for ISO Certification when applying for big projects.</li>
            <li><b>Preference in Government Tenders:</b> MSME-certified enterprises are preferred in government tenders.</li>
            <li><b>Subsidy on Patent Registration:</b> 50% waiver on government fees for patent registration for innovative small firms.</li>
          </ul>
        </section>

        {/* Where MSME Registration is Registered */}
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">Where MSME Registration is Registered</h2>
          <p>
            MSME Registration is done online, but each state has a separate DIC (District Industries Centre) department. These authorities approve the MSME Registration Certificate with the MSME Number. To avail schemes or benefits, contact your nearby DIC Department.
          </p>
        </section>

        {/* Documents Required for MSME Registration */}
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">Documents Required for MSME Registration</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li><b>Aadhar Card Copy:</b> Mandatory for MSME Registration Online. For companies/partnerships, partner's Aadhar card is used.</li>
            <li><b>Mobile Number Linked with Aadhar Card:</b> Required for online registration. If not linked, alternative documents like PAN card copy are needed.</li>
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
            Book Free Consultation Right Now
          </h2>
          <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl border-4 border-purple-300 shadow-2xl mx-auto p-12">
            <div className="border-b-2 border-purple-200 px-10 pt-10 pb-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">
                MSME Registration Application
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
                Just Fill-Up the Details and Get Started
              </p>
            </div>
            
            <form className="px-10 pb-10 pt-2" onSubmit={handleSubmit}>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Aadhar Card No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="aadharNo"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Valid Aadhar Number | Ex : 827421323702"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">This field is required.</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Aadhar Card Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="aadharName"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Full Aadhar Card Name : Narendra Modi"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Pan Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="panNo"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="PAN Number, For Ex : CCVPP1698H"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">This field is required.</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Email id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Valid Email id : cm@udyogaadhaar.gov.in"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Insert Indian No without +91 or 0 (10 Digit Only)"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Social Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="socialCategory"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="example : General | SC | ST | OBC"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8 mt-1 ml-2">
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2"
                      required
                    />
                    Male
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Firm/Shop Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firmName"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="example : Reliance Industries"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Type of Entity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="entityType"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Ex : Proprietorship | Partnership | Pvt Ltd Co"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Business Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="businessAddress"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Full Address with Pin Code. Ex Plot or Flat No . + Area or Colony + Nearby Road or any Landmark + District or City + Pin Code"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">Full Business Address like Office or Home</span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Date of Starting Business <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="startDate"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="01/01/2019 | 01/01/2002 Type any date which you remember"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Nature of Business <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="natureOfBusiness"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Deals in Petrochemicals Products and Telecom Industry | Type of Business, Products or Services"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  No of Employees <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="noOfEmployees"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="example - 01 | How many employees work. Type No 01-100"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Investment in Business <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="investment"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Example - 1 lakh | How much investment in your business"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Account No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountNo"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="100% Secure | Only for Govt Certificate | Type your Saving or Current Account No"
                  required
                />
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  IFSC Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your IFSC Code (Cheque Upper Corner)"
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














      </div>
    </div>
  );
};

export default ITRFilingService;

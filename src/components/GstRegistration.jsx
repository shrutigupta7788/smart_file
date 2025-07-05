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
    requirements: "",
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
        GST Registration – New GST Registration Online  
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          India's Only Govt Certified Company "MyOnlineCA" Helps on GST
          Registration | New GST Registration Online Start Only From 999/-INR
          with Free DIY Legal Agreements
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
          What is GST Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          GST Registration introduced in India from July 2017. As per the act
          its a mixture of indirect tax like VAT & Service tax for the same. It
          is required when your turnover or sales cross more than 40 lakh rupees
          in a year ( 10 lakh for NE * Hill States) as per the latest amendment
          from 1st April 2019.
          <br />
          <br />
           For some specific business, it is mandatory
          registration without crossing the turnover limit. For ex, if you are
          running an e-commerce business then you have to require the GST
          Registration from the starting of business. We at MyOnlineCA helps you
          on GST Registration Online which takes only 2-3 working days and got
          the verified GST Certification with login details in your Email Inbox.
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            Who is required New GST Registration
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#1 Previous Law Converted Taxpayer</strong> – if any
            individual or companies are registered under the previous tax law
            like service tax or VAT or cst etc then they have required the New
            GST Registration.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#2 Turnover basis</strong> – if your business sales or
            turnover cross more than 40 lakh rupees in a year then its required
            the GST Registration. For some state like North-Eastern States, J&K,
            Himachal Pradesh, and Uttarakhand the limit is only 10 lakh rupees
            in a year.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#3 Event or Exhibition</strong> – In the GST Act its called
            the casual taxpayer. If they don't have any permanent place of
            business then they can apply for the casual taxpayer under the GST
            Registration. It's valid for a maximum of 90 days (3 months).
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#4 Non-Resident Indian (NRI)</strong> – if you are a
            non-resident person of India or handling the business of NRI in
            India then it's required to apply for the GST Registration Online.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#5 The agent of Suppliers or Input tax Distributor</strong>{" "}
            – if you are an input tax service distributor then it's required to
            apply for the GST Registration to carry forward the benefit of an
            input tax credit under GST Law.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#6 Reverse Charge Mechanism</strong> – Under GST Law there
            is term reverse charge mechanism so if you fall under that category
            then its required the GST registration.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#7 E-commerce Sellers</strong> – if you are an E-commerce
            Sellers of the leading aggregator portal like Flipkart or Amazon
            then yes you need the GST Registration.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#8 E-Commerce Aggregator Portal</strong> – if you are
            thinking to start your own E-commerce business then for ECommerce
            Business Registration you need GST Registration for the same.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <strong>#9 Outside India Online Portal</strong> – if you are
            software as a service company and providing information & database
            access from outside India to Indian visitors then it's required to
            register under the GST.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceEFiling /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            How GST Registration Online can be done
          </h2>

          <ul className="list-decimal pl-10 pr-2 text-base md:text-lg text-gray-700 mb-6 space-y-1">
            <li>First of all, just log in on GST official Portal.</li>
            <li>
              Fill up the Part A of GST Registration Form-1 by the Professional.
            </li>
            <li>
              You will get received the reference number via email and mobile
              number.
            </li>
            <li>
              Fill Up the second part of the registration form and upload the
              below documents as per the business entity.
            </li>
            <li>
              Finally, a Certificate of Registration has been issued by the
              Government of India once your application is approved.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
            But Remember you always need a Professional like CA/GST Consultant
            to Choose the Right AO Code & Proper HSC Code for your registration
            with Proper Documents. so Always take services from Certified GST
            Consultant like myonlineca which helps you to get done GST
            Registration Online
          </p>
        </div>
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto rounded-t-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          GST Registration Package @ 999/- INR
        </h2>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>GST Registration Application Filing by Legal Expert.</li>
          <li>GST ARN Number Delivery in 1 Day.</li>
          <li>GST Registration Final Certificate Delivery in 4-5 Days.</li>
          <li>10+ Premium Legal Agreements for your Business</li>

          <li>Premium Invoice Templates</li>
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
      {/* GST Registration Features Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl p-12 py-16 mx-auto mt-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-8 text-center">
          GST Registration: Features, Benefits & FAQ
        </h2>
        {/* Features */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Features of GST Registration (In Short)</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li><b>Unified Tax System:</b> GST Registration combines all major indirect taxes (VAT, CST, Service Tax, Excise Duty, Entertainment Tax, etc.) into one, effective from July 2017.</li>
            <li><b>Registration Threshold:</b> Required if your business turnover exceeds ₹40 lakh per year (lower for certain businesses/states); some businesses must register from the start.</li>
            <li><b>GST Tax Rates:</b> Vary by product/service, ranging from 0% to 28%.</li>
            <li><b>Input Tax Credit Scheme:</b> Only GSTIN holders (registered under GST) can claim input tax credit for taxes paid on purchases.</li>
            <li><b>GST Return Filing:</b> All GSTIN holders must file 3 GST returns monthly or quarterly, but taxes are paid monthly.</li>
            <li><b>Composition Scheme:</b> Businesses with turnover less than ₹1 crore can opt for the composition scheme, paying tax at 1%-5% without claiming input tax credit.</li>
          </ul>
        </div>
        {/* Benefits */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Benefits of GST Registration</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li><b>Legal Entity Proof:</b> GST Registration provides valid legal entity status, useful for proving legitimacy to other firms or individuals.</li>
            <li><b>Input Tax Credit:</b> GST holders can claim input tax credit on purchases—essential for B2B businesses.</li>
            <li><b>Nationwide Sales:</b> Sell products/services anywhere in India without restrictions (unlike VAT/CST).</li>
            <li><b>Open Business Bank Account:</b> GSTIN holders can easily open a current account using the GST Registration Certificate.</li>
            <li><b>Sell Online:</b> Use your GSTIN to sell on e-commerce platforms like Amazon or Flipkart.</li>
            <li><b>Bid for Government Projects:</b> Required for contractors applying for government tenders.</li>
            <li><b>Work with MNCs:</b> MNCs require valid legal entity proof (GSTIN) to do business.</li>
            <li><b>Increase Customer Trust:</b> Issuing valid GST invoices increases customer trust and brand value.</li>
          </ul>
        </div>
        {/* GSTIN Number */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">What is a GST Registration Number?</h3>
          <p className="text-gray-800 mb-2 text-base md:text-lg">A unique 15-digit identification number assigned to each firm, company, or individual (like a PAN for GST).</p>
          <p className="text-gray-800 mb-2 text-base md:text-lg"><b>Format:</b> First 2 digits: State code, next 10 digits: PAN number, next 1 digit: Entity code (e.g., proprietorship, partnership), next 1 digit: Blank, last 1 digit: Check digit.</p>
          <p className="text-gray-800 mb-2 text-base md:text-lg"><b>Example:</b> 08AAKCM0506E1ZT</p>
        </div>
        {/* Documents Required */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Documents Required for GST Registration</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li><b>Sole Proprietorship Firm:</b> PAN Card and address proof of proprietor, any other firm registration certificate (e.g., MSME Registration)</li>
            <li><b>Partnership Firm:</b> PAN card of the partnership firm and partnership deed, registration certificate, partners' ID & address proof</li>
            <li><b>Private Limited Company or One Person Company:</b> PAN card of the company, Certificate of Incorporation (COI), MOA & AOA, board resolution, directors' ID & address proof</li>
            <li><b>LLP (Limited Liability Partnership):</b> COI & PAN card of company, LLP deed, partners' ID & address proof</li>
            <li><b>All Entities:</b> Bank statement or passbook, proof of business address (electricity bill, NOC, sale deed, etc.)</li>
          </ul>
        </div>
        {/* Online Process */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">GST Registration Online Process</h3>
          <ol className="list-decimal pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li>Place a request using the online form with your basic details.</li>
            <li>Make the online payment (professional fee) via cards/net banking/UPI.</li>
            <li>Get connected with a dedicated CA who will assist you through the entire GST Registration process.</li>
            <li>Receive your ARN Number to track your GST Registration status.</li>
          </ol>
        </div>
        {/* Penalty */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Penalty for Not Registering</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li>10% of the total tax amount (minimum ₹10,000) for non-registration or short payment.</li>
            <li>100% penalty if the offence involves deliberate tax evasion.</li>
          </ul>
        </div>
        {/* Compliance */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Compliance After GST Registration</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li>File GST returns as per compliance: monthly for regular scheme, quarterly for composition dealers (with conditions).</li>
            <li>Raise GST invoices and pay taxes online every month.</li>
          </ul>
        </div>
        {/* FAQ */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">FAQ on GST Registration</h3>
          <div className="space-y-3 text-gray-800 text-base md:text-lg">
            <p><b>Q: What is the full form of GSTIN?</b><br/>A: Goods and Services Tax Identification Number (15 digits).</p>
            <p><b>Q: When is GST Registration mandatory?</b><br/>A: When annual sales exceed ₹40 lakh, or for certain businesses (B2B, e-commerce, interstate sales) from the start.</p>
            <p><b>Q: Do I need multiple GSTINs for my business?</b><br/>A: Only if you operate in multiple states. Otherwise, one GSTIN is sufficient.</p>
            <p><b>Q: Can I use my firm or brand name for GST?</b><br/>A: Yes, you can register any legal entity name.</p>
            <p><b>Q: Is a commercial address required?</b><br/>A: No, residential addresses are allowed with valid proof (e.g., electricity bill, NOC, sale deed, rent agreement).</p>
            <p><b>Q: Is a bank account required?</b><br/>A: Yes, a savings or current account is needed. You can use a personal account initially and open a current account after registration.</p>
            <p><b>Q: What to do after GST Registration?</b><br/>A: Issue GST invoices, collect GST, and file returns monthly.</p>
            <p><b>Q: How long does GST Registration take?</b><br/>A: Usually 4-5 days, depending on government approval.</p>
            <p><b>Q: Can GST Registration be rejected?</b><br/>A: Yes, if documents are incomplete or incorrect.</p>
            <p><b>Q: What is the GST Composition Scheme?</b><br/>A: For businesses with turnover less than ₹1.5 crore (lower in some states), pay lower tax rates with limited benefits.</p>
            <p><b>Q: How to track GST Registration status?</b><br/>A: Use the ARN number provided after application.</p>
            <p><b>Q: What proof is needed for business address?</b><br/>A: Electricity bill and NOC from landlord (if rented).</p>
            <p><b>Q: How to send documents?</b><br/>A: Securely via email or WhatsApp.</p>
            <p><b>Q: Who helps with HSN/SAC codes?</b><br/>A: Your CA will assist in choosing the correct codes.</p>
            <p><b>Q: Is a digital signature required?</b><br/>A: Only for companies/LLPs, not for proprietorships or partnerships.</p>
            <p><b>Q: Do I need to visit the GST office?</b><br/>A: No, the process is fully online.</p>
          </div>
        </div>
        {/* Why Choose */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Why Choose MyOnlineCA?</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-800 text-base md:text-lg">
            <li>Trusted by 25,000+ companies & small businesses across India</li>
            <li>Govt. Startup India Certified Portal</li>
            <li>Issued more than 10,000+ GSTIN Numbers</li>
            <li>Help with GST Return Filing Compliance</li>
          </ul>
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
              Let's Start My GST Registration
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
              Issue over 30k+ GST Number across India
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
                  Requirements or Message
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your requirements or message"
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

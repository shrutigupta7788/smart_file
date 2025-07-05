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
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}

        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
          2 Legal Entity Proof for the Sole Proprietorship Registration in India :

          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            <b>Option 1: MSME Registration Certificate + Chartered Accountant Business Certification</b>
            <br/>
            <span className="ml-4">Applicable if:</span>
            <ul className="list-disc pl-8">
              <li>You deal only within the same state (e.g., Delhi to Delhi).</li>
              <li>Your expected turnover or sales within the state is less than ₹20 lakh.</li>
            </ul>
            <br/>
            <b>Option 2: GST Registration Certificate as Proprietorship Entity</b>
            <br/>
            <span className="ml-4">Applicable if any <b>ONE</b> of the following is true:</span>
            <ul className="list-disc pl-8">
              <li>You deal in inter-state sales or services (e.g., Rajasthan to Delhi).</li>
              <li>You operate an e-commerce or internet-based business.</li>
              <li>You are a trader, retailer, manufacturer, or aggregator.</li>
              <li>Your turnover within the state exceeds ₹20 lakh.</li>
            </ul>
            <br/>
            <b>First Step:</b> Choose the right legal entity certificate based on your business conditions to register your proprietorship firm.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceEFiling /> */}
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
        Proprietorship Firm Fees
        </h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Proprietorship Firm Registration Packages by MyOnlineCA</h3>
          <div className="mb-6">
            <div className="text-xl font-semibold text-gray-800 mb-2">Package 1: <span className="text-green-700">Start Only ₹1499 (All Inclusive)</span></div>
            <ul className="list-disc pl-8 text-lg text-gray-700">
              <li>MSME Registration Certificate</li>
              <li>Chartered Accountant (CA) Certificate</li>
            </ul>
        </div>
          <div className="mb-6">
            <div className="text-xl font-semibold text-gray-800 mb-2">Package 2: <span className="text-green-700">Start Only ₹1999 (All Inclusive)</span></div>
            <ul className="list-disc pl-8 text-lg text-gray-700">
              <li>MSME Registration Certificate</li>
              <li>GST Registration Certificate as Proprietorship Firm</li>
        </ul>
        </div>
          <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
            <div className="text-lg font-semibold text-blue-700 mb-2">Not Enough? Get These Free With Every Package:</div>
            <ul className="list-disc pl-8 text-base text-gray-700">
              <li>10+ Premium Legal Agreements to start your new firm</li>
              <li>Premium Invoice Templates</li>
        </ul>
          </div>
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
      {/* Proprietorship Firm Registration - Single Page Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl p-20">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-8">Proprietorship Firm Registration Process</h2>
        <ol className="list-decimal pl-12 text-xl text-gray-800 mb-8 space-y-3">
          <li><b>Fill-Up Application:</b> Complete your Proprietorship Firm Application using our simplified online form.</li>
          <li><b>Make Payment:</b> Pay for your chosen package securely online via cards, net banking, UPI, wallets, etc.</li>
          <li><b>Assign & Submit Documents:</b> A dedicated CA/legal expert is assigned to you. Submit your documents online via email or WhatsApp. Relax—your work is done!</li>
        </ol>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">How to Register Proprietorship Firm Online?</h2>
        <p className="text-xl text-gray-700 mb-6">A proprietorship firm requires 2 legal entity proofs, which can be obtained online with MyOnlineCA at the lowest cost.</p>
        <h3 className="text-xl font-semibold text-purple-700 mb-3">Why choose MyOnlineCA?</h3>
        <ul className="list-disc pl-12 text-lg text-gray-800 space-y-2 mb-4">
          <li>Better & cheaper pricing compared to agents or other portals.</li>
          <li>Recognized under the Govt. Startup India Programme, trusted by over 10,000 customers.</li>
          <li>Highest-rated social reviews on Facebook (5-star ratings).</li>
          <li>Dedicated support via email, calls, and WhatsApp.</li>
          <li>Free premium legal consultancy to start your business.</li>
          <li>100% money-back guarantee on any service.</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Documents Required for Sole Proprietorship Registration</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li><b>KYC of Applicant:</b> PAN Card + Aadhar Card or Voter ID or Driving License or Passport, etc.</li>
          <li><b>Firm Address Proof:</b> Electricity bill, gas bill, or phone bill (can be in another person's name).</li>
        </ul>
        <div className="text-lg text-gray-800 mb-2"><b>For GST Registration (additional):</b></div>
        <ul className="list-disc pl-16 text-lg text-gray-800 mb-2">
          <li>Passport size photograph of the applicant</li>
          <li>Personal bank account: cancelled cheque, bank statement, or passbook front page (any one)</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Time to Register Proprietorship Firm</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li><b>MSME Registration + CA Certification:</b> 2–6 working days (average)</li>
          <li><b>GST Registration:</b> 7 working days (average)</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Benefits of Proprietorship Firm Registration</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Only 1 person required as single entrepreneur</li>
          <li>Single owner of the business</li>
          <li>Easy to start and close</li>
          <li>Complete control</li>
          <li>Lower cost of formation and compliance</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-8 mt-14">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6 text-lg text-gray-800">
          <div><b>1. Is a commercial property or office required for registration?</b><br/>No, you can register on your residential property (rented or owned). Just provide a utility bill and, if needed, permission from the landlord.</div>
          <div><b>2. Is NOC required for rental or owned property?</b><br/>Yes, if the bill is in another person's name, a No Objection Certificate is required. We provide a standard format.</div>
          <div><b>3. Can I choose any name for my firm?</b><br/>Yes, you can choose any name (not related to Pvt Ltd, LLP, OPC, etc.), as long as it's not a trademark of another company.</div>
          <div><b>4. Can I register the firm in a family member's name?</b><br/>Yes, if you have no objection. The same documents are required.</div>
          <div><b>5. Are there other ways to register a proprietorship firm?</b><br/>Yes, but they are more expensive and less valid. Options include:<ul className="list-disc pl-8"><li>Shop Act License (expensive, state-specific)</li><li>Income Tax Return (only for existing businesses)</li></ul></div>
          <div><b>6. Is Sole Proprietorship Registration mandatory?</b><br/>No, it's an unregistered legal entity. Only legal entity proof is needed for banks/vendors.</div>
          <div><b>7. What are the disadvantages of a proprietorship firm?</b><br/><ul className="list-disc pl-8"><li>Lack of resources</li><li>Unlimited liability</li><li>Lack of credibility</li><li>Cannot raise funds easily</li><li>Cannot add partners</li></ul></div>
          <div><b>8. Can an NRI become a proprietor?</b><br/>No, only Indian residents can register. NRIs can invest.</div>
          <div><b>9. How much money is required to start?</b><br/>No minimum capital is required; you can start with any amount.</div>
          <div><b>10. What are the annual compliance requirements?</b><br/><ul className="list-disc pl-8"><li>GST Returns (if registered)</li><li>Income Tax Return (filed under your personal PAN)</li></ul></div>
          <div><b>11. Can I convert my proprietorship to a company?</b><br/>Yes, there is a standard process to convert to a private limited company.</div>
          <div><b>12. How is the firm name registered?</b><br/>No specific rules; choose any name not already trademarked. For security, consider trademark registration.</div>
          <div><b>13. How do I receive my certificates from MyOnlineCA?</b><br/>GST & MSME certificates are sent digitally via email; CA certificate is sent as a hard copy by courier.</div>
          <div><b>14. Do I need to visit any office?</b><br/>No, everything is done online via email or WhatsApp.</div>
          <div><b>15. How can I check the validity of my registration certificate?</b><br/>Verification steps are provided to check your certificate on the government website.</div>
          <div><b>16. Is proprietorship firm registration the same as company registration?</b><br/>No, they are different. Proprietorship is not registered under the Companies Act.</div>
          <div><b>17. How can I reduce the registration fees?</b><br/>Opt for MSME with CA Certification or GST only, as other licenses are more expensive.</div>
        </div>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Steps to Register a Sole Proprietorship Firm in India</h2>
        <div className="mb-2 text-lg">There are two main categories of valid licenses:</div>
        <div className="mb-2 text-lg"><b>A) Tax Registration in India (GST Registration)</b></div>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Required if turnover exceeds ₹20 lakh/year (₹10 lakh in NE states)</li>
          <li>Required for inter-state business, trading, or e-commerce</li>
        </ul>
        <div className="text-lg text-gray-800 mb-2"><b>Documents for GST Registration:</b></div>
        <ul className="list-disc pl-16 text-lg text-gray-800 mb-2">
          <li>PAN Card</li>
          <li>Aadhar Card</li>
          <li>Electricity Bill (business location)</li>
          <li>Bank Statement/Cancelled Cheque</li>
          <li>Passport Size Photograph</li>
        </ul>
        <div className="mb-2 text-lg"><b>B) Basic Local or Central Government or Other Body Licenses</b></div>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Chartered Accountant Certificate</li>
          <li>MSME Registration Certificate</li>
          <li>Income Tax Return (Business ITR)</li>
          <li>Shop Act License</li>
        </ul>
        <div className="text-lg text-gray-800 mb-2">For new businesses, opt for CA Certification and MSME Registration Certificate, or CA + ITR.</div>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Conclusion</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li><b>Option 1: GST Registration</b> – Go with this option when GST Registration is mandatory or voluntary due to your business nature and legal conditions.</li>
          <li><b>Option 2: MSME or CA Certification + ITR/Shop Act License</b> – Go with this option for very small businesses not requiring GST Registration.</li>
        </ul>
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
            Book Your Income Tax Filing
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














        {/* <div
    className="min-h-screen flex-1 bg-gradient-to-br from-purple-50 to-blue-50 px-0 flex flex-col items-center"
    style={{ paddingBottom: 0, marginBottom: 0 }}
  >
    <div
      className="w-full max-w-full bg-white shadow-2xl p-16 pb-0 mb-0"
      style={{ paddingBottom: 0, marginBottom: 0 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-10">
        Type of Income Tax Return Form
      </h2>
      <ol className="list-decimal pl-12 mb-10 space-y-4 text-gray-800 text-xl">
        <li>
          <b>ITR 1</b>: The form ITR 1 is for resident individuals who have
          total income upto Rs. 50 lakh. You will have to provide break up of
          your salary and house property.
        </li>
        <li>
          <b>ITR 2</b>: The form ITR 2 is applicable for individuals and HUFs
          not having income from profits and gains of business or profession.
        </li>
        <li>
          <b>ITR 3</b>: The Form ITR 3 is for individuals and HUFs having income
          from profits and gains of business or profession.
        </li>
        <li>
          <b>ITR 4</b>: The Form ITR 4 is for presumptive income from business
          and profession.
        </li>
        <li>
          <b>ITR 5</b>: The Form ITR 5 is for persons other than individual HUF
          company i.e. Firms, association of person and body of individuals.
        </li>
        <li>
          <b>ITR 6</b>: The Form ITR 6 is for companies other than companies
          claiming exemption under Section 11.
        </li>
        <li>
          <b>ITR 7</b>: The Form ITR 7 for person including companies which are
          required to furnish return under Section 139(4A) or 139(4B) or 139(4C)
          or 139(4D) or 139(4E) or 139(4F) of the Income Tax Act.
        </li>
      </ol>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Income Tax E-filing Due Date
      </h3>
      <p className="mb-8 text-gray-800 text-lg">
        The due date of E-filling of income tax returns depends upon the
        taxpayer. If the taxpayer is individual, body of individuals,
        association of persons, Hindu undivided family then the due date for
        filling income tax return is July 31 every financial year. However, for
        business and companies which require audit the date for filling income
        tax return is September 30 every financial year. For any person who is
        required to furnish report in form No. 32CEB under section 92E the date
        for filling income tax return is November 30 every financial year. If
        the taxpayer does not file the income tax return in time, then he will
        have to pay the late fee along with the tax payable.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        What are the Benefits or Advantages of Income Tax Return Filing?
      </h3>
      <ul className="list-disc pl-12 mb-8 space-y-2 text-gray-800 text-lg">
        <li>
          <b>Loan:</b> An individual who has filed INCOME TAX RETURN can help
          him in availing vehicle or home loans as many banks asks for a copy of
          Income tax Returns.
        </li>
        <li>
          <b>To claim refund:</b> If any refund claim is due to you form the
          income tax department you will have to file return in order to receive
          the refund claim.
        </li>
        <li>
          <b>To carry forward losses:</b> If you are incurring any capital
          losses, you cannot carry forward the same id you have not filed an
          income tax return.
        </li>
        <li>
          <b>Visa processing:</b> If you are planning to travel overseas, there
          might be chances that at the time of visa interview you are required
          to furnish your Income tax return receipt of last years.
        </li>
        <li>
          <b>Buying high life insurance policy:</b> If you are planning to buy
          any life insurance policy like of Rs. 50 lakh or Rs. 1 Crore, then the
          life insurance company like LIC might ask for your Income Tax Return
          receipts of previous years.
        </li>
        <li>
          <b>Government tender:</b> If you are planning to obtain any government
          tender in future, you should have your income tax returns receipts of
          the last few years. This is required to support your financial status.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Documents Required for Income Tax eFiling
      </h3>
      <ul className="list-disc pl-12 mb-8 space-y-2 text-gray-800 text-lg">
        <li>PAN Card Registration</li>
        <li>Aadhar Number</li>
        <li>Bank Account details</li>
        <li>Form 16</li>
        <li>Form 16A</li>
        <li>Form 26AS</li>
        <li>Investment details</li>
        <li>Rent receipts for claiming house rent allowance</li>
        <li>Bank Passbook</li>
        <li>Fixed deposit statement</li>
        <li>Proof of investment</li>
        <li>Medical expenses receipts, if any</li>
        <li>Proof of home loan interest, if any</li>
        <li>Share transaction statement, if any</li>
        <li>GST Registration Number Details if any</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Who can file online income tax return
      </h3>
      <ul className="list-disc pl-12 mb-8 space-y-2 text-gray-800 text-lg">
        <li>Taxpayers having total income of Rs. 5 lakh and above</li>
        <li>
          Individual or Hindu undivided family resident with assets located
          outside India.
        </li>
        <li>
          Taxpayer who is required to furnish a report of audit specified under
          sections 10(23C) (IV), 10(23C) (v), 10(23C) (VI), 10(23C) (via), 10A,
          12A (1) (b), 44AB, 80IA, 80IB, 80IC, 80ID, 80JJAA, 80LA, 92E or 115JB
          of the income tax act.
        </li>
        <li>
          Firm (not under provisions of Section 44AB), association of person,
          body of individual, artificial juridical person, cooperative society
          and local authority.
        </li>
        <li>
          Taxpayer who is required to furnish return under section 139 (4B) of
          the income tax return
        </li>
        <li>
          Resident who has a signing authority in any account located outside
          India.
        </li>
        <li>
          Taxpayer claiming relief under section 90 or 90A or deductions under
          section 91.
        </li>
        <li>All companies.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Points to be Considered During Efiling of ITR
      </h3>
      <ul className="list-disc pl-12 mb-8 space-y-2 text-gray-800 text-lg">
        <li>Choose the correct income tax return form</li>
        <li>Clearly identify the heads of income under which it is taxable</li>
        <li>
          Declare all your assets if your income is more than Rs. 50 lakhs in a
          year.
        </li>
        <li>Keep all documents and proofs safe for any future reference.</li>
        <li>Should mention your Aadhar Number</li>
        <li>Study your Form 26AS i.e. tax credit statement</li>
        <li>Check your personal details</li>
        <li>Also add interest income earned from fixed deposits</li>
        <li>Don't hide any of your source of income</li>
        <li>Report your exempted income</li>
        <li>Should verify your income tax returns</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Steps to File Income Tax Return eFiling Online
      </h3>
      <ol className="list-decimal pl-12 mb-8 space-y-2 text-gray-800 text-lg">
        <li>
          Visit{" "}
          <a
            href="https://incometaxindiaefiling.gov.in"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://incometaxindiaefiling.gov.in
          </a>{" "}
          and create your e filling account.
        </li>
        <li>
          Your PAN number will be your login id and you have to create account
          using the PAN number as login Id and password.
        </li>
        <li>Login on the website using your PAN number and password</li>
        <li>You now have to link your Aadhar card mandatory.</li>
        <li>
          You should choose the option of 'link Aadhaar' under the profile
          setting tab. Enter details as per Aadhar card like name, Aadhar number
          etc. and then confirm and link your Aadhar card to your Income tax
          account.
        </li>
        <li>
          Open form 26AS under the quick link menu. Form 26 AS contains summary
          of the taxes you have paid over the financial year and includes tax
          deducted at source, advance tax and self-assessment tax.
        </li>
        <li>Then download the correct ITR form as mentioned above</li>
        <li>
          Download the 'excel utility' of the Income tax return and fill in
          details like Name, PAN, Address, Date of birth, Email ID, Mobile
          number, choose whether original or revised return, Other taxable
          income, Investments, Taxes deducted, Bank details etc.
        </li>
        <li>
          After filling the details click on 'validate' button on all sheets of
          the excel utility.
        </li>
        <li>Once all sheets are validated click on calculate tax</li>
        <li>
          Pay the tax payable if any and provide the challan details in the ITR
          form.
        </li>
        <li>Click on generate 'XML' and save the XML file on your desktop.</li>
        <li>Go to your account on the website and click on 'upload return'.</li>
        <li>
          Fill in the ITR form, name, assessment year and upload the XML File.
          If you have digital signature, then upload it too.
        </li>
        <li>Click on 'submit'.</li>
        <li>
          You will get an acknowledgement. Take a print of the acknowledgement.
        </li>
        <li>
          If your have given your digital signature, then your income tax return
          filling process is complete.
        </li>
        <li>
          If not, then you will receive a form ITR-V which is an acknowledgement
          and verification. You can print the same and sign using blue pen and
          then post it to the income tax department within 120 days of e-filling
          at: Income Tax Department – CPC, Post Bag No – 1, Electronic City Post
          Office, Bengaluru – 560100 within 120 days of e-filing. You will then
          receive an acknowledgement of receipt of ITR-V by email and SMS.
        </li>
      </ol>
      <h3 className="text-2xl font-semibold mb-4 text-purple-700">
        Conclusion for Income Tax Return
      </h3>
      <p className="mb-0 text-gray-800 text-lg">
        Every taxpayer whether it be an individual, Hindu undivided family,
        company association of persons, Company etc all have to file income tax
        returns to the income tax departments. Filling income tax return is very
        simple and can be done online also.
      </p>
    </div>
  </div> */}













       


















      </div>
    </div>
  );
};

export default ITRFilingService;

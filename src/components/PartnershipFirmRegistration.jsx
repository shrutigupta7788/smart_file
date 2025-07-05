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
        Partnership Firm Registration
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          #1 Portal to get done registration of partnership firm at Cheapest
          Cost with simple 3 Steps. Package Start Only From 2499/- INR​
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
          What is Partnership Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
          A Partnership Firm is one of the most popular forms of business entity in India for entrepreneurs who wish to work together. It requires just two persons to start a business.
        </p>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          <b>3 Important Factors in Partnership Firm Registration:</b>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li><b>Partnership Deed:</b> Must be executed on stamp paper and notarized.</li>
            <li><b>PAN & TAN of the Partnership:</b> Obtain a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for the partnership firm.</li>
            <li><b>Registration under Other Acts:</b> Register the firm under relevant acts such as the MSME Act, 2006.</li>
          </ol>
        </div>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceEFiling /> */}
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          Partnership Firm Registration fees –
        </h2>
        <div className="mb-8">
          <div className="mb-6">
            <div className="text-xl font-semibold text-gray-800 mb-2">Basic Partnership Firm Registration – <span className="text-green-700">Starts at ₹2,499/- INR</span></div>
            <ul className="list-disc pl-8 text-lg text-gray-700">
              <li>Partnership Deed Drafting Service by Legal Expert</li>
              <li>PAN & TAN Application</li>
              <li>Partnership Firm Registration under MSME Act</li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="text-xl font-semibold text-gray-800 mb-2">Premium Partnership Firm Registration – <span className="text-green-700">Starts at ₹3,999/- INR</span></div>
            <ul className="list-disc pl-8 text-lg text-gray-700">
              <li>Everything in the Basic Registration package</li>
              <li>GST Registration on Partnership Firm Name</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400 mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">Not Enough? Get These Free With Every Package:</div>
            <ul className="list-disc pl-8 text-base text-gray-700">
              <li>10+ Premium Legal Agreements Templates to start your Partnership Firm</li>
              <li>Premium Invoice Templates</li>
            </ul>
          </div>
          <div className="text-base text-gray-600 mt-2">
            <b>Note:</b> Printing of the Deed on Stamp Paper and Notarization Services are not included in the above packages, as these require the physical presence of all partners.
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
      {/* Partnership Firm Process and Procedure Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl p-20 mt-0">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-8">Partnership Firm Process and Procedure</h2>
        <ol className="list-decimal pl-12 text-xl text-gray-800 mb-8 space-y-3">
          <li><b>Fill-Up Simplified Partnership Application Form:</b> Complete the partnership application form online.</li>
          <li><b>Make Payment:</b> Pay securely online as per your chosen package via cards, netbanking, UPI, or wallet.</li>
          <li><b>Assign a Dedicated Legal Expert & Submit Documents:</b> A dedicated legal expert is assigned to you. Submit your documents via email or WhatsApp. Relax—your partnership deed drafting, PAN & TAN, and all other steps are handled online.</li>
        </ol>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Documents Required for Partnership Firm</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li><b>ID and Address Proof of Partners:</b> PAN Card, Passport, Voter ID, Aadhar Card, or Driving License of all partners.</li>
          <li><b>Business Place Address Proof:</b>
            <ul className="list-disc pl-8">
              <li>If property is rented: Rent Agreement and NOC from landlord.</li>
              <li>If property is owned: Electricity bill or any other address proof.</li>
              <li><i>Note: Business and home address can be the same.</i></li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Is Online Registration of Partnership Firm Possible?</h2>
        <p className="text-lg text-gray-700 mb-6">Yes! With MyOnlineCA, you can register your partnership firm online at the lowest cost. Here's how we simplify the government's legal process:</p>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Steps to Register a Partnership Firm</h2>
        <ol className="list-decimal pl-12 text-lg text-gray-800 mb-8 space-y-2">
          <li>Choose Partnership Firm Name (ensure it's not trademarked or registered as a company; avoid restricted words).</li>
          <li>Fill Application Form with business and personal details.</li>
          <li>Create Partnership Agreement/Deed drafted by MyOnlineCA professionals.</li>
          <li>Print & Notarize Deed: Print the deed on stamp paper and have all partners sign and notarize it.</li>
          <li>Email Deed & Apply for PAN & TAN: Send the scanned deed to us and apply for PAN & TAN.</li>
          <li>Receive PAN & TAN Acknowledgement via email.</li>
          <li>Receive PAN Card: Physical PAN card will be sent by the department.</li>
          <li>Apply for MSME Registration with MyOnlineCA professionals.</li>
          <li>Receive MSME Certificate & Legal Agreements via email.</li>
          <li>Open Current Bank Account using the deed, PAN, TAN, and MSME certificate.</li>
        </ol>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Features of a Partnership Firm</h2>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Minimum 2 persons required as partners</li>
          <li>Partners share responsibilities and duties</li>
          <li>More capital can be brought into the business</li>
          <li>Flexible management and shared control</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-700 mb-8 mt-14">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6 text-lg text-gray-800">
          <div><b>1. Can a residential address be used for registration?</b><br/>Yes, you can use a partner's home address. Just provide proof (electricity bill, rental agreement, or NOC).</div>
          <div><b>2. What is NOC in case of rented/owned property?</b><br/>If the bill is in another person's name, a No Objection Certificate from the owner is required.</div>
          <div><b>3. How to register a partnership firm name?</b><br/>There is no name protection. Choose any name, but for security, consider trademark registration.</div>
          <div><b>4. Can employees register in a family member's name?</b><br/>Yes, you can register in a family member's name with the required documents.</div>
          <div><b>5. What capital is required to start a partnership firm?</b><br/>No minimum capital is required—just enough to maintain your current account.</div>
          <div><b>6. Why is a partnership firm an unregistered legal entity?</b><br/>Most people don't register with the Registrar of Firms due to cost. Unregistered firms have some legal limitations.</div>
          <div><b>7. What is MSME registration for a partnership firm?</b><br/>MSME registration is an alternative to Registrar of Firms registration and is sufficient for opening a bank account.</div>
          <div><b>8. Who can be a partner?</b><br/>Only Indian residents can be partners. For foreign partners, consider a private limited company.</div>
          <div><b>9. What are the annual compliance requirements?</b><br/><ul className="list-disc pl-8"><li>Business Partnership Income Tax Return</li><li>Personal Income Tax Return</li><li>Business GST Return Filing</li></ul>Annual cost: approx. ₹4,000–₹5,000</div>
          <div><b>10. Can a partnership firm be converted to a private limited company?</b><br/>Yes, by setting up a new company and arranging an agreement between the entities.</div>
          <div><b>11. Timeline for registration with MyOnlineCA?</b><br/>Deed drafting: minimum 2 days; PAN Card: 4–6 days; MSME Certificate: minimum 1 day</div>
          <div><b>12. How to open a current bank account?</b><br/>Provide the partnership deed, ID/address proof, and PAN card.</div>
          <div><b>13. How to get a PAN card in the firm's name?</b><br/>After notarizing the deed, apply for a PAN card with MyOnlineCA.</div>
          <div><b>14. Will my partnership firm have a registration certificate?</b><br/>You will receive an MSME certificate as legal proof. Registrar of Firms certificate is optional and expensive.</div>
          <div><b>15. Can investments be made in a partnership firm?</b><br/>Yes, but there is no limited liability. Any Indian resident can invest.</div>
          <div><b>16. How to notarize the partnership deed?</b><br/>Print the deed on stamp paper and notarize it with a lawyer in the presence of all partners.</div>
          <div><b>17. Is partnership deed registration compulsory?</b><br/>No, registration with the Registrar of Firms is optional and often avoided due to cost.</div>
          <div><b>18. Do I need to visit any department?</b><br/>No, everything is online except for printing and notarizing the deed.</div>
          <div><b>19. Why choose MyOnlineCA?</b><br/><ul className="list-disc pl-8"><li>Better & cheaper pricing than agents or other portals</li><li>Recognized under Govt. Startup India Programme</li><li>Trusted by over 10,000 customers</li><li>Highest social reviews (5-star ratings)</li><li>Dedicated support</li><li>Free premium legal consultancy</li><li>100% money-back guarantee</li></ul></div>
        </div>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-14">Guide: How to Register a Partnership Firm Step by Step</h2>
        <div className="mb-2 text-lg">Step 1: <b>Choose Partnership Firm Name</b></div>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Ensure the name is not trademarked or registered as a company.</li>
          <li>Avoid restricted words (e.g., Crown, Emperor, Empire).</li>
        </ul>
        <div className="mb-2 text-lg">Step 2: <b>Create Partnership Deed</b></div>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Drafted on stamp paper and notarized.</li>
          <li>Includes: Name of the firm, registered office address, nature of business, profit sharing ratio, names & addresses of partners, salary (if any), capital contribution, rules for admission, retirement, death, etc.</li>
        </ul>
        <div className="mb-2 text-lg">Step 3: <b>Register Partnership Deed (Optional)</b></div>
        <ul className="list-disc pl-12 text-lg text-gray-800 mb-2">
          <li>Registration with Registrar of Firms is optional and expensive.</li>
          <li>Required documents: Application in Form No. 1, Specimen of Affidavit, Certified copy of the partnership deed, Proof of business address</li>
          <li>Registrar will verify and, if satisfied, record the firm. MSME registration is a simpler, cost-effective alternative.</li>
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
            Book Free Consultation Right Now
            </h2>
          <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl border-4 border-purple-300 shadow-2xl mx-auto p-12">
            <div className="border-b-2 border-purple-200 px-10 pt-10 pb-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">
              Partnership Firm Registration Form
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
              100% Govt Certified with 50k+ Partnership Firm's
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

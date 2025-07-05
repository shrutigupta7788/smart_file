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
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}
        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is Pvt Ltd Company Registration Rules ?
          </h2>
          <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
            <li>
              ​#1 Require minimum 2 directors or partner in the Private Limited
              Company.
            </li>
            <li>
              #2 Authorised Share Capital: 1 Lakh Rupees ( It's just a share
              proposed value, doe'st not mean you have to invest 1 lakh rupees)
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">{/* <ITRFilingServiceEFiling /> */}</div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          Pvt Ltd Company Registration Fees
        </h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          We at MyOnlineCA offers Cheapest Cost on Pvt Ltd Company Registration
          Fees
        </div>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 10999/- INR (Exclude GST) + GST Credit Available –
        </div>

        <div className="mb-3 font-semibold text-gray-800 text-xl">include:</div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 2 Directors DIN + DSC</li>
          <li>#2 Name Approval of Company + MOA & AOA Drafting & Printing</li>
          <li>#3 Certificate of Incorporation + PAN & TAN of the Company</li>
        </ul>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Free with above package :
        </div>
        <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
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

        {/* Informational Section: Pvt Ltd Company Registration */}
        <section
          style={{
            padding: "6rem",
            width: "100vw",
            minHeight: "100vh",
            maxWidth: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Pvt Ltd Company Registration Online
          </h2>
          <p style={{ fontSize: "1.25rem" }}>
            Pvt Ltd Company Registration Online is possible through the official
            MCA Govt Website, but you can't do it yourself. It requires digital
            signature attestation from a Practicing Chartered Accountant,
            Company Secretary, or Lawyer. So, you need to hire a good CA to get
            your Private Limited Company Registration done anywhere in India.
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Private Limited Company Registration Process
          </h3>
          <ul style={{ fontSize: "1.25rem" }}>
            <li>
              Apply for the Digital Signature Certificate (DSC) for all persons
              who will be directors.
            </li>
            <li>Apply for the DIN Registration for all directors.</li>
            <li>
              Check company name availability on the MCA Portal & apply for name
              approval with the RUN Form.
            </li>
            <li>
              Once the name is approved, proceed with the SPICe (INC 32)
              Incorporation Form with E-MoA & E-AOA.
            </li>
            <li>
              Apply for PAN & TAN, which are issued with the Certificate of
              Incorporation.
            </li>
          </ul>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Documents Required for Private Limited Company Registration
          </h3>
          <div style={{ fontSize: "1.25rem" }}>
            <b>Personal Level (Directors):</b>
            <ul>
              <li>Directors' Personal PAN Card Copy</li>
              <li>
                Directors' Aadhar Card/Voter ID/Passport/Driving License (any
                one for identity verification)
              </li>
              <li>Passport Size Photograph</li>
            </ul>
            <b>Company Level:</b>
            <ul>
              <li>
                Business Address Proof (Electricity Bill with NOC, Rent
                Agreement, or Sale Deed)
              </li>
            </ul>
          </div>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Benefits of Private Limited Company Registration
          </h3>
          <ul style={{ fontSize: "1.25rem" }}>
            <li>Easily setup and recommended for growing startups</li>
            <li>Limited liability for members</li>
            <li>More credibility compared to other structures</li>
            <li>Easily raise funds from investors</li>
            <li>ESOP option available to motivate employees</li>
            <li>Name protection available</li>
          </ul>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Name Availability for Pvt Ltd Company Registration
          </h3>
          <p style={{ fontSize: "1.25rem" }}>
            You must choose a unique name for your company. Once registered with
            the MCA, no other company can use the same name. Provide 3-4 names
            during the approval process. MCA will check and approve as per rules
            and regulations.
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Other Forms of Online Registration
          </h3>
          <ul style={{ fontSize: "1.25rem" }}>
            <li>Proprietorship Firm</li>
            <li>Partnership Firm</li>
            <li>OPC Registration</li>
            <li>LLP Registration</li>
          </ul>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Cost Involved in Private Limited Company Registration
          </h3>
          <ul style={{ fontSize: "1.25rem" }}>
            <li>2 Digital Signatures: ₹2,000</li>
            <li>Director Identification Number: ₹1,000</li>
            <li>Stamp Duty (Approx): ₹2,500</li>
            <li>Notary Fees: ₹1,000</li>
            <li>Govt Fee for RUN+PAN+TAN: ₹1,200</li>
            <li>Professional Fee (Market Price): ₹3,000–5,000</li>
          </ul>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            How Much Time Does It Take?
          </h3>
          <p style={{ fontSize: "1.25rem" }}>
            There is no standard timeline. It depends on document submission and
            incorporation forms. DSC & DIN: 1–2 days, Name approval: 2–3 days
            (avg). Total: Minimum 10 days for complete incorporation.
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            FAQ: Private Limited Company Registration
          </h3>
          <div style={{ fontSize: "1.25rem" }}>
            <div>
              <b>
                1. Can I register a Private Limited Company at my home address?
              </b>
              <br />
              Yes, you can. You need only the utility bill copy of your
              residence.
            </div>
            <div>
              <b>2. Can I register my family members if I have no partner?</b>
              <br />
              Yes, you can register family members as partners. You can change
              or transfer shares later.
            </div>
            <div>
              <b>3. How many days does it take to register?</b>
              <br />
              Minimum 10–15 days on average.
            </div>
            <div>
              <b>4. What is the cost?</b>
              <br />
              Around ₹10,999 (except in some states due to stamp duty).
            </div>
            <div>
              <b>5. What is meant by authorized capital (₹1 lakh)?</b>
              <br />
              It's the maximum share value you can issue. You don't have to
              invest ₹1 lakh to start.
            </div>
            <div>
              <b>6. Is GST registration required?</b>
              <br />
              Optional until ₹20 lakh turnover (₹10 lakh for NE states). It's a
              separate registration.
            </div>
            <div>
              <b>7. Can I register with Startup India?</b>
              <br />
              Yes, after registering your Pvt Ltd Company, you can register with
              Startup India.
            </div>
            <div>
              <b>8. Can I run multiple businesses under one company?</b>
              <br />
              Yes, you can mention multiple activities in your MOA.
            </div>
            <div>
              <b>9. What is DSC?</b>
              <br />
              Digital Signature Certificate for e-filing. Delivered via USB
              token.
            </div>
            <div>
              <b>10. How do I register my company name or logo?</b>
              <br />
              Company name is secured with registration. Logo requires separate
              trademark registration.
            </div>
            <div>
              <b>11. Minimum requirements to become a director?</b>
              <br />
              18+ years of age and a Director Identification Number.
            </div>
            <div>
              <b>12. Validity of registration?</b>
              <br />
              Lifetime, unless the company fails to start business within 1 year
              or doesn't file annual returns.
            </div>
            <div>
              <b>13. Can I be a director if I have a job?</b>
              <br />
              Yes, unless your employment contract restricts it.
            </div>
            <div>
              <b>14. Do I need to visit any govt office?</b>
              <br />
              No, the process is fully online.
            </div>
            <div>
              <b>15. Are FDI or local investors allowed?</b>
              <br />
              Yes, both are allowed.
            </div>
            <div>
              <b>16. What are the annual compliances?</b>
              <br />
              Appointment of auditor, filing AGM, annual return, financial
              statement, and income tax return.
            </div>
            <div>
              <b>17. Is it best for NRIs or foreign nationals?</b>
              <br />
              Yes, no prior RBI approval required.
            </div>
            <div>
              <b>18. Can I convert my company to LLP or OPC?</b>
              <br />
              Yes, conversion is possible (not to proprietorship/partnership).
            </div>
            <div>
              <b>19. What is limited liability protection?</b>
              <br />
              Your personal assets are separate from company liabilities.
            </div>
            <div>
              <b>20. What else do I need to start my business?</b>
              <br />
              No other mandatory registration after opening a current account.
              Optionally, apply for MSME, Trademark, FSSAI, or Patent
              Registration.
            </div>
          </div>
          <h3
            style={{
              fontSize: "2rem",
              color: "#6D28D9",
              fontWeight: "bold",
              paddingBottom: "0.5rem",
            }}
          >
            Step-by-Step: How to Register a Pvt Ltd Company in India
          </h3>
          <ul style={{ fontSize: "1.25rem" }}>
            <li>
              <b>Application for DSC (Digital Signature Certificate):</b> All
              e-forms are online and require a digital signature. Only class 2
              DSC is needed, costing around ₹1,000 per DSC.
            </li>
            <li>
              <b>Apply for DIN (Director Identification Number):</b> Mandatory
              for directors. Use SPICe (INC32) Form for new companies (max 3
              directors at incorporation).
            </li>
            <li>
              <b>Application for Name Availability:</b> Use RUN (Reserve Unique
              Name) or SPICe INC32 Form. You can submit 2 proposed names with 1
              resubmission.
            </li>
            <li>
              <b>Filing of eMOA and eAOA:</b> Attach electronic MOA & AOA with
              SPICe's form. Digital signature attestation by a professional is
              required.
            </li>
            <li>
              <b>Apply for PAN & TAN:</b> Now included in SPICe's form.
            </li>
            <li>
              <b>Certificate of Incorporation by RoC:</b> Issued with PAN & TAN
              if all is approved.
            </li>
            <li>
              <b>Open a Current Bank Account:</b> After incorporation, open a
              current account with the provided documents.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ITRFilingService;

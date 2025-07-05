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
    returnType: "",
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
        Gst Return Filing Online
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          #1 Portal to get done gst return filing at cheapest cost with simple 3
          steps ​Package Start From Just Only 400/- Per Month
        </span>
        <button
          className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded shadow hover:bg-purple-700 transition text-lg uppercase tracking-wide"
          type="button"
          onClick={handleBookNowClick}
        >
          Get Proposal
        </button>
      </div>
      {/* GST Return Filing Information Section */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-purple-50 to-blue-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg mx-auto border-l-8 border-purple-400">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 mb-4 tracking-tight text-left w-full px-4">
          What is GST Return Filing?
        </h2>
        <div className="w-full px-4 space-y-4">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
            Every person who is applying for the GST Registration has to file
            GST return Filing. GST Return is mandatory for each person whose
            enroll under the GST Registration.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
            There is a lot of the type of the GST Returns which you have to file
            the monthly basis with one annual return. A registered personal have
            to file the returns about the following things –
          </p>
          <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
            <li>
              <strong>Total Sales of the Month</strong>
            </li>
            <li>
              <strong>Total Output GST Tax</strong>
            </li>
            <li>
              <strong>Total Purchase of the Month</strong>
            </li>
            <li>
              <strong>Total Input GST Credit Tax</strong>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
            If you are registered under the GST Composition Scheme then there
            are the different rules for the same.
          </p>
        </div>
      </div>
      {/* <ITRFilingServiceExtra /> */}

      {/* <ITRFilingServiceExtra /> */}
      <div className="mt-8">{/* <ITRFilingServiceWhatIs /> */}</div>
      <div className="mt-8">{/* <ITRFilingServiceEFiling /> */}</div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          GST Return Filing Fee
        </h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 400/- INR Per Month [Starting]Include :
        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>
            #1 Collection of the Data and Preparation of the Tax Data in Govt
            Format
          </li>
          <li>#2 GSTR3B Return Filing</li>
          <li>#3 GSTR1 Return Filing</li>
          <li>#4 GST Tax Consultancy</li>
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

      {/* New GST Return Filing Information Page */}
      <div className="w-full mx-auto space-y-12 bg-white p-20 shadow-lg">
        
        {/* How to File GST Return */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            How to File GST Return
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              GST Return Filing is an online procedure; if you have the GST
              Software, then it will be easy for you to file GST Return. Even
              GST Portal issued an offline excel utility which is very easy to
              file the GST Returns. but you need the knowledge about the returns
              for the same.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              So below are the simplified steps to file your GSTR Returns –
            </p>
            <ol className="list-decimal pl-20 space-y-3 text-lg md:text-xl text-gray-700">
              <li>
                Login with your user id and password on the GST Portal for gst e
                filing.
              </li>
              <li>
                Just proceed with the GSTR-3B Return tab and insert your sales
                amount with the tax & purchase amount with the input credit.
              </li>
              <li>
                Just make the payment of the GST by creating the challan &
                submit the gst e filing.
              </li>
            </ol>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 ml-12">
              <p className="text-lg text-gray-700">
                <strong>Note –</strong> In the GSTR 1 you have to upload each
                invoice details for the same.
              </p>
            </div>
          </div>
        </div>

        {/* GST Return Filing Procedure */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            GST Return Filing Procedure
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              We at MyOnlineCA build a simplified excel sheet where you have to
              just maintain your invoice records basic details, at the end of
              the month you can file your returns through our GST Experts
              assistance plan.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              There are main overall three steps in gst return filing procedure:
            </p>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  1. Download the MyOnlineCA Simplified Excel Template
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Every registered person has to upload the invoice on GST
                  portal so for that you have to required to maintain the
                  invoice records electronically. We build a simplified excel
                  template where you can maintain your invoice records easily.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  2. Email to MyOnlineCA GST Experts
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Once you prepare your data then you can email to MyOnlineCA
                  GST Experts which review your all the data entries and prepare
                  GSTR1,2 and 3 & maintain your gst compliance at your
                  fingertips.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  3. Filing of the GSTR1,2 and 3 or GSTR3B
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  once your data has been finalized then our GST Expert file
                  your GSTR Returns with the proper challan & generated the ARN
                  Number for the same.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* All about GST Software */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            All about GST Software
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              There are lot of the good GST Software in the market which cost
              from 5000 to 10000 or more per annum but it's expensive for the
              small business whose don't have knowledge about the GST Returns
              and Accounts. Even Small business have to hire the accountant for
              the data entry. Instead of the expensive software, you can use
              myonlineca gst assistant plan where you have to maintain your
              records in simplified excel sheet and file the returns.
            </p>
          </div>
        </div>

        {/* GST Payment Due Date */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            GST Payment Due Date
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              You can make the payment of the GST via online net banking or NEFT
              Transfer or Echallan for the same in the banks. You have to just
              generate the challan through your dashboard then you can make the
              GST Payment.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              So you have to require an online internet banking account for the
              GST Payments. if we talk about the GST Payment Due dates. then
              during the filing of the GSTR3B you have to make the payment in
              advance on a monthly basis.
            </p>
          </div>
        </div>

        {/* Documents Required */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            Documents Required for the GST Return Filing
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-12">
              GST Return filing have no proper set of the documents. Its
              required the mainly the sales invoice of taxable services or
              goods. So for the GST Return filing you have to follow some
              standard guidelines –
            </p>
            <ul className="list-disc pl-20 space-y-3 text-lg md:text-xl text-gray-700">
              <li>Prepare each invoice as per the GST Law.</li>
              <li>Maintain records online or offline as bookkeeping.</li>
              <li>
                Try to maintain records in your GST Filing software or else use
                our simplified excel sheets.
              </li>
            </ul>
          </div>
        </div>

        {/* Type of GST Return Forms */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            Type of GST Return Forms
          </h2>
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-1
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Details of all outward supplies of taxable goods and services
                  to be filed by registered taxable supplier. The due date to
                  file this form is 10th of the next month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-2
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Details of all inward supplies of taxable goods and services
                  to be filed by registered taxable recipient of the goods and
                  services. The due date of filing this form is 15th of next
                  month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-3
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form will be filled automatically on the basis of outward
                  supplies and inward supplies with the payment of tax furnished
                  in GSTR-1 and 2. The form will be prepared by 20th of the next
                  month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-4
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form contain the details of outward supplies, tax payable
                  and payment of tax. The due date of filing this form is 18th
                  of the month succeeding quarter.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-5
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form contain the details of outward supplies, imports,
                  input tax, tax paid and reaming stock. The form has to be
                  filed by non-resident taxable person by 20th of the next
                  month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-6
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form contains the details of return for input service
                  distributor and it is filed by input service distributor by
                  13th of the next month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-7
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form contains the details of the tax deduction. Due date
                  to file this form is 10th of the next month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-8
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  This form contain the details of all supplies made through
                  e-commerce operator and the amount of tax collected. The
                  GSTR-8 form will be filed by e-commerce operator or tax
                  collector by 10th of every month.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-9
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Annual return filed by registered taxable person by 31st
                  December of next financial year.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-10
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Final return filed by taxable person whose registration has
                  been surrendered or cancelled within three months of the date
                  of cancellation or surrender whichever is later.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-11
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Details of inward supplies to be furnished by a person who
                  have Unique Identification Number (UIN) by 28th of the month
                  following the month for which statement is filed.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-3B
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Details of taxable supply of the goods and services in the
                  month of July and Aug 2017. Do note that you do not have to
                  provide invoice level information in this form. Only total
                  values for each field have to be provided.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Current GST Return Filing Dates */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 tracking-tight pl-12">
            Important Current GST Return Filing Dates
          </h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-3B (Jun 2018)
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jul 20th, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-5 (Jun 2018)
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jul 20th, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-6 (Jul'17 – Jun'18)
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jul 31st, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-4 (Apr-Jun, 2018)
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jul 18th, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GSTR-5A (Jun 2018)
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jul 20th, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  GST TRAN-2
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Jun 30th, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">RFD-10</h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  Eighteen months after end of the quarter for which refund is
                  to be claimed
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  Quarterly return for registered persons with aggregate
                  turnover up to Rs. 1.50 Crores
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  GSTR-1 (Apr-Jun, 2018) - Jul 31st, 2018
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-700 mb-3 pl-12">
                  Turnover exceeding Rs. 1.5 Crores or opted to file monthly
                  Return
                </h3>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  GSTR-1 (Jun 2018) - Jul 10th, 2018
                </p>
                <p className="text-lg md:text-xl text-gray-700 pl-12">
                  GSTR-1 (May 2018) - Jun 10th, 2018
                </p>
              </div>
            </div>
          </div>
        </div>

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
                GST Return Filing Online
              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
                100% Govt Certified with Registered 30k+ GSTIN
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
                  Type of Return <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8 mt-1 ml-2">
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="returnType"
                      value="Nil Transactions"
                      checked={form.returnType === "Nil Transactions"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Nil Transactions
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="returnType"
                      value="Taxable Transactions"
                      checked={form.returnType === "Taxable Transactions"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Taxable Transactions
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

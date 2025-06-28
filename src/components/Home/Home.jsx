import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleBookNowClick = (e) => {
    e.preventDefault();
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Income Tax, Accounting & Tax Consultant Company</h1>
            <p className="text-lg md:text-xl mb-6">Expert solutions for Income Tax Filing, GST, Business Registration, and more. Let us handle your compliance while you focus on your business growth.</p>
            <a
              href="#consultation-form-section"
              onClick={handleBookNowClick}
              className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-100 transition"
            >
              GET PROPOSAL
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://img.freepik.com/free-vector/tax-consultant-concept-illustration_114360-9026.jpg?w=700" alt="Tax Consultant" className="w-full max-w-xs rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials Section (below hero) */}
      <section className="w-full py-16 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">India's top-class Accounting & Tax Consultant, trusted by more than 10000+ happy clients & 1000+ social reviews</h2>
          <div className="mx-auto mb-10 w-24 h-1 bg-purple-400 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Chirag Dhanani" className="w-16 h-16 rounded-full mb-2 object-cover" />
              <div className="font-bold text-lg mb-1 text-gray-800">Chirag Dhanani</div>
              <p className="text-gray-700 text-sm mb-2">Thank you so much for registering my business so easily. I compared couple of service provides and Myonlineca is found to be the most cost effective service provider for registration of businesses. Appreciate all your efforts!</p>
              <div className="font-semibold text-gray-800 text-xs mt-2">Web Developer</div>
              <div className="text-yellow-500 mt-1">★★★★★</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Subodh Maheshwari" className="w-16 h-16 rounded-full mb-2 object-cover" />
              <div className="font-bold text-lg mb-1 text-gray-800">Subodh Maheshwari</div>
              <p className="text-gray-700 text-sm mb-2">Very much prompt and reliable services by them as I applied for GSTN through their website myonlineca.in , and I get my GSTIN in 5 days.</p>
              <div className="font-semibold text-gray-800 text-xs mt-2">Youtuber with English Teacher</div>
              <div className="text-yellow-500 mt-1">★★★★★</div>
          </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
              <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Nam Kamei" className="w-16 h-16 rounded-full mb-2 object-cover" />
              <div className="font-bold text-lg mb-1 text-gray-800">Nam Kamei</div>
              <p className="text-gray-700 text-sm mb-2">MyOnlineCA is one of the trustful Online Company. Its team are very active & clearly respond to our question. In my suggestion if you are looking for Online Company registration you can go to this company.</p>
              <div className="font-semibold text-gray-800 text-xs mt-2">CEO at Liftup Construction Pvt. Ltd</div>
              <div className="text-yellow-500 mt-1">★★★★★</div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-700">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-purple-600 text-4xl mb-2">★</div>
              <h4 className="font-semibold mb-1">Expert Team</h4>
              <p className="text-gray-600 text-sm">Experienced CAs and tax professionals at your service.</p>
            </div>
            <div>
              <div className="text-purple-600 text-4xl mb-2">⚡</div>
              <h4 className="font-semibold mb-1">Fast & Reliable</h4>
              <p className="text-gray-600 text-sm">Quick turnaround and accurate filings, every time.</p>
            </div>
            <div>
              <div className="text-purple-600 text-4xl mb-2">💬</div>
              <h4 className="font-semibold mb-1">Personalized Support</h4>
              <p className="text-gray-600 text-sm">One-on-one guidance and support for all your queries.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Income Tax Return Filing Fee Section */}
      <section className="w-full py-12 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Income Tax Return Filing Fee</h2>
          <hr className="my-4 border-t border-blue-100 opacity-60 w-1/2 mx-auto" />
          <div className="mb-2 font-semibold">Service Fee –</div>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>ITR-1 (Salary + Other Income) – <b>1499/- INR</b></li>
            <li>ITR-4 (Business + Other Income) – <b>1499/- INR</b></li>
            <li>ITR-2 (Salary+Stock Market+Other Income) – <b>2999/- INR</b></li>
            <li>ITR-3 (Salary+Stocks+F&O+Intraday+Other Income) – <b>3499/- INR*</b></li>
          </ul>
          <div className="mb-2 font-semibold">Include :</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>#1 All Plans above Include Dedicated ITR Filing by Experienced Tax Consultant.</li>
            <li>#2 Income Tax Final Intimation & Refund Assistance</li>
            <li className="text-xs mt-2">*not included Tax Audit or Books of Accounts Preparations for FNO.</li>
          </ul>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleBookNowClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase px-5 py-2 rounded shadow transition text-base tracking-wider"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-500">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
            <img src="https://img.icons8.com/ios-filled/50/4f46e5/tax.png" alt="Income Tax Filing" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">Income Tax Filing</h3>
            <p className="text-gray-600">Hassle-free and accurate income tax return filing for individuals and businesses.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
            <img src="https://img.icons8.com/ios-filled/50/4f46e5/accounting.png" alt="Accounting Services" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">Accounting Services</h3>
            <p className="text-gray-600">Professional bookkeeping, payroll, and financial statement preparation.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl active:shadow-xl focus:shadow-xl hover:border-purple-400 active:border-purple-500 focus:border-purple-500 transition">
            <img src="https://img.icons8.com/ios-filled/50/4f46e5/gst.png" alt="GST & Compliance" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">GST & Compliance</h3>
            <p className="text-gray-600">GST registration, return filing, and compliance management for your business.</p>
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section
        id="consultation-form-section"
        ref={formRef}
        className={`w-full py-12 px-2 flex flex-col items-center bg-gradient-to-r from-purple-600 to-blue-500 ${showForm ? '' : 'hidden'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Book Your Income Tax Filing</h2>
        <div className="w-full max-w-2xl bg-white rounded border shadow-2xl mx-auto">
          <div className="border-b px-8 pt-8 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-1">Income Tax Return Filing</h2>
            <p className="text-sm text-center text-gray-600 mb-2">Fill up Below Form and Let's Start</p>
          </div>
          <div className="px-8 pt-4 pb-2">
            <ul className="text-xs text-gray-600 mb-4 list-disc pl-5 text-left">
              <li>a) Basic Salary or any other Income(ITR-1) - 1499/-INR</li>
              <li>b) Business Income(ITR-4) - 1499/-INR</li>
              <li>c) Salary+Stocks & MF Gain(ITR-2)- 2999/-INR</li>
              <li>d) Salary+F&O and Intraday(ITR-3)- 3499/-INR</li>
            </ul>
            <ul className="text-xs text-gray-600 mb-4 list-disc pl-5 text-left">
              <li>Maximum TDS Tax Refund as per law.</li>
              <li>Filing by Experienced Tax Expert</li>
            </ul>
            <ul className="text-xs text-gray-600 mb-4 list-disc pl-5 text-left">
              <li>#1 Fillup Below Form and Make Payment Online</li>
              <li>#2 Upload Docs and info and Be Relax !</li>
            </ul>
          </div>
          <form className="px-8 pb-8 pt-2 flex flex-col gap-4">
            <div className="flex flex-col text-left">
              <label className="font-semibold text-sm mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Steve Jobs" required />
              <span className="text-xs text-gray-400 mt-1">Type your Good Name</span>
            </div>
            <div className="flex flex-col text-left">
              <label className="font-semibold text-sm mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" className="border rounded px-3 py-2 text-sm" placeholder="steve@apple.com" required />
              <span className="text-xs text-gray-400 mt-1">Type your Valid Email</span>
            </div>
            <div className="flex flex-col text-left">
              <label className="font-semibold text-sm mb-1">Contact Number <span className="text-red-500">*</span></label>
              <input type="tel" className="border rounded px-3 py-2 text-sm" placeholder="9876543210" required />
              <span className="text-xs text-gray-400 mt-1">Insert No without 0 or +91Ex - 9876543210</span>
            </div>
            <div className="flex flex-col text-left">
              <label className="font-semibold text-sm mb-1">Are you on WhatsApp <span className="text-red-500">*</span></label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center text-sm">
                  <input type="radio" name="whatsapp" value="Yes" className="mr-2" required /> Yes
                </label>
                <label className="flex items-center text-sm">
                  <input type="radio" name="whatsapp" value="No" className="mr-2" /> No
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded shadow transition">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Type of Income Tax Return Form Section */}
      <section className="w-full py-12 px-4 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Type of Income Tax Return Form</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><b>ITR 1</b>: The form ITR 1 is for resident individuals who have total income upto Rs. 50 lakh. You will have to provide break up of your salary and house property.</li>
            <li><b>ITR 2</b>: The form ITR 2 is applicable for individuals and HUFs not having income from profits and gains of business or profession.</li>
            <li><b>ITR 3</b>: The Form ITR 3 is for individuals and HUFs having income from profits and gains of business or profession.</li>
            <li><b>ITR 4</b>: The Form ITR 4 is for presumptive income from business and profession.</li>
            <li><b>ITR 5</b>: The Form ITR 5 is for persons other than individual HUF company i.e. Firms, association of person and body of individuals.</li>
            <li><b>ITR 6</b>: The Form ITR 6 is for companies other than companies claiming exemption under Section 11.</li>
            <li><b>ITR 7</b>: The Form ITR 7 for person including companies which are required to furnish return under Section 139(4A) or 139(4B) or 139(4C) or 139(4D) or 139(4E) or 139(4F) of the Income Tax Act.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Income Tax E-filing Due Date</h3>
          <p className="mb-4">The due date of E-filling of income tax returns depends upon the taxpayer. If the taxpayer is individual, body of individuals, association of persons, Hindu undivided family then the due date for filling income tax return is <b>July 31</b> every financial year. However, for business and companies which require audit the date for filling income tax return is <b>September 30</b> every financial year. For any person who is required to furnish report in form No. 32CEB under section 92E the date for filling income tax return is <b>November 30</b> every financial year. If the taxpayer does not file the income tax return in time, then he will have to pay the late fee along with the tax payable.</p>
          <h3 className="text-xl font-semibold mb-2">What are the Benefits or Advantages of Income Tax Return Filing?</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><b>Loan:</b> An individual who has filed INCOME TAX RETURN can help him in availing vehicle or home loans as many banks asks for a copy of Income tax Returns.</li>
            <li><b>To claim refund:</b> If any refund claim is due to you form the income tax department you will have to file return in order to receive the refund claim.</li>
            <li><b>To carry forward losses:</b> If you are incurring any capital losses, you cannot carry forward the same id you have not filed an income tax return.</li>
            <li><b>Visa processing:</b> If you are planning to travel overseas, there might be chances that at the time of visa interview you are required to furnish your Income tax return receipt of last years.</li>
            <li><b>Buying high life insurance policy:</b> If you are planning to buy any life insurance policy like of Rs. 50 lakh or Rs. 1 Crore, then the life insurance company like LIC might ask for your Income Tax Return receipts of previous years.</li>
            <li><b>Government tender:</b> If you are planning to obtain any government tender in future, you should have your income tax returns receipts of the last few years. This is required to support your financial status.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Documents Required for Income Tax eFiling</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
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
          <h3 className="text-xl font-semibold mb-2">Who can file online income tax return</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Taxpayers having total income of Rs. 5 lakh and above</li>
            <li>Individual or Hindu undivided family resident with assets located outside India.</li>
            <li>Taxpayer who is required to furnish a report of audit specified under sections 10(23C) (IV), 10(23C) (v), 10(23C) (VI), 10(23C) (via), 10A, 12A (1) (b), 44AB, 80IA, 80IB, 80IC, 80ID, 80JJAA, 80LA, 92E or 115JB of the income tax act.</li>
            <li>Firm (not under provisions of Section 44AB), association of person, body of individual, artificial juridical person, cooperative society and local authority.</li>
            <li>Taxpayer who is required to furnish return under section 139 (4B) of the income tax return</li>
            <li>Resident who has a signing authority in any account located outside India.</li>
            <li>Taxpayer claiming relief under section 90 or 90A or deductions under section 91.</li>
            <li>All companies.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Points to be Considered During Efiling of ITR</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Choose the correct income tax return form</li>
            <li>Clearly identify the heads of income under which it is taxable</li>
            <li>Declare all your assets if your income is more than Rs. 50 lakhs in a year.</li>
            <li>Keep all documents and proofs safe for any future reference.</li>
            <li>Should mention your Aadhar Number</li>
            <li>Study your Form 26AS i.e. tax credit statement</li>
            <li>Check your personal details</li>
            <li>Also add interest income earned from fixed deposits</li>
            <li>Don't hide any of your source of income</li>
            <li>Report your exempted income</li>
            <li>Should verify your income tax returns</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Steps to File Income Tax Return eFiling Online</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-1">
            <li>Visit <a href="https://incometaxindiaefiling.gov.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://incometaxindiaefiling.gov.in</a> and create your e filling account.</li>
            <li>Your PAN number will be your login id and you have to create account using the PAN number as login Id and password.</li>
            <li>Login on the website using your PAN number and password</li>
            <li>You now have to link your Aadhar card mandatory.</li>
            <li>You should choose the option of 'link Aadhaar' under the profile setting tab. Enter details as per Aadhar card like name, Aadhar number etc. and then confirm and link your Aadhar card to your Income tax account.</li>
            <li>Open form 26AS under the quick link menu. Form 26 AS contains summary of the taxes you have paid over the financial year and includes tax deducted at source, advance tax and self-assessment tax.</li>
            <li>Then download the correct ITR form as mentioned above</li>
            <li>Download the 'excel utility' of the Income tax return and fill in details like Name, PAN, Address, Date of birth, Email ID, Mobile number, choose whether original or revised return, Other taxable income, Investments, Taxes deducted, Bank details etc.</li>
            <li>After filling the details click on 'validate' button on all sheets of the excel utility.</li>
            <li>Once all sheets are validated click on calculate tax</li>
            <li>Pay the tax payable if any and provide the challan details in the ITR form.</li>
            <li>Click on generate 'XML' and save the XML file on your desktop.</li>
            <li>Go to your account on the website and click on 'upload return'.</li>
            <li>Fill in the ITR form, name, assessment year and upload the XML File. If you have digital signature, then upload it too.</li>
            <li>Click on 'submit'.</li>
            <li>You will get an acknowledgement. Take a print of the acknowledgement.</li>
            <li>If your have given your digital signature, then your income tax return filling process is complete.</li>
            <li>If not, then you will receive a form ITR-V which is an acknowledgement and verification. You can print the same and sign using blue pen and then post it to the income tax department within 120 days of e-filing at: Income Tax Department – CPC, Post Bag No – 1, Electronic City Post Office, Bengaluru – 560100 within 120 days of e-filing. You will then receive an acknowledgement of receipt of ITR-V by email and SMS.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Conclusion for Income Tax Return</h3>
          <p>Every taxpayer whether it be an individual, Hindu undivided family, company association of persons, Company etc all have to file income tax returns to the income tax departments. Filling income tax return is very simple and can be done online also.</p>
        </div>
      </section>

      {/* Pvt Ltd Company Registration Fees Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Pvt Ltd Company Registration Fees</h1>
        <hr className="my-4 border-t border-blue-100 opacity-60 w-1/2 mx-auto" />
        <p className="text-white mb-2 font-semibold text-sm">We at MyOnlineCA offers Cheapest Cost on Pvt Ltd Company Registration Fees</p>
        <div className="text-2xl font-bold text-green-200 mb-2 text-sm">Pricing : 10,999/- INR <span className="text-base font-normal">(Exclude GST) + GST Credit Available</span></div>
        <div className="text-left max-w-lg mx-auto text-sm">
          <div className="font-semibold text-white mb-2">Include :</div>
          <ul className="list-disc pl-6 mb-4 text-white text-sm">
            <li>2 Directors DIN + DSC</li>
            <li>Name Approval of Company + MOA & AOA Drafting & Printing</li>
            <li>Certificate of Incorporation + PAN & TAN of the Company</li>
          </ul>
          <div className="font-semibold text-white mb-2">Free with above package :</div>
          <ul className="list-disc pl-6 text-white text-sm">
            <li>MSME Registration Certificate to avail govt benefits</li>
            <li>10+ Premium Legal Agreements Template</li>
          </ul>
        </div>
      </section>

      {/* Private Limited Company Registration Info Section */}
      <section className="my-12 py-8 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">What is Private Limited Company Registration?</h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Private Limited Company Registration is one of the most popular legal entity in India. In simplified terms, it's a proper company registration in India with the Ministry of Corporate Affairs and gives you rights doing business anywhere in India or outside. MCA registers your Pvt Ltd company and provides you a CIN Number with Certificate of Incorporation. At the end of the process, you have to simply open a current bank account on the Company Name on the basis of Certificate and start your Company Operations.
        </p>
        <h3 className="text-xl font-semibold text-purple-700 mb-2">What is Pvt Ltd Company Registration Rules?</h3>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2 max-w-xl mx-auto text-left">
          <li><span className="font-bold">Require minimum 2 directors or partner</span> in the Private Limited Company.</li>
          <li><span className="font-bold">Authorised Share Capital:</span> 1 Lakh Rupees (It's just a share proposed value, doesn't mean you have to invest 1 lakh rupees)</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

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
        One Person Company Registration
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          India's No #1 Company to Get Done One Person Company Registration
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
          What is One Person Company Meaning ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          One person company as a company which has only one person as a member.
          This paradigm shifts from the Companies Act 1956, where minimum two
          members are required float private limited company as well as public
          company.
          <br />
          <br />
          For the 1st time the concept of One Man Company or OPC has been
          introduced in India under Companies Act 2013 and the intent is
          apparently to permit entrepreneurship of a single individual to obtain
          the benefit of a corporate form of organization. This concept has
          opened huge business opportunities for small entrepreneurs.
          <br />
          <br />A single individual forms a company satisfying all the legal
          requirements of the law for a definite purpose, usually for profit
          making. It has only one person as a member who will be promoter and
          director of the company. Hence it is a single shareholder corporate
          entity, where legal and financial liability is limited to the company
          only
        </p>
      </div>

      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}

        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            What is One Person Company Registration ?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            Under companies act 1956 minimum two members were required for the
            formation of Private Limited Company Registration. This was a
            hindrance to entrepreneurs who wanted to go solo or do business
            alone. So, the only option available was sole proprietorship firm.
            The major problem with doing business as a sole proprietorship firm
            is that it does not have a separate legal entity and has unlimited
            liability. OPC is a legitimate way to form a company with only one
            member. It can work like proprietorship, but it holds the status of
            the company and of course, it enjoys the benefit that comes with it
            i.e. limited liability. Although an OPC comes under a private
            company, it has been given many exemptions and thus has a
            comparatively lesser compliance burden.
            <br />
            <br />
            The Minimum number of directors is limited to one and only one
            director can sign the financial statement and the Board's report
          </p>
        </div>
      </div>
      <div className="mt-8">{/* <ITRFilingServiceEFiling /> */}</div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
          OPC Registration Fees
        </h2>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          We at MyOnlineCA offers an awesome package for the startups to
          register your pvt ltd company in India.
        </div>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Pricing : 9999/- INR (Exclude GST) + GST Credit Available
        </div>

        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Include :
        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 1 Directors DIN + DSC</li>
          <li>#2 Name Approval of Company + MOA & AOA Drafting & Printing</li>
          <li>#3 Certificate of Incorporation + PAN & TAN of the Company</li>
        </ul>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Free with above package :
        </div>
        <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>#1 MSME Registration Certificate to avail govt benefits</li>
          <li>#2 10+ Premium Legal Agreements Template</li>
        </ul>

        <br />
        <br />
        <div className="mb-3 font-semibold text-gray-800 text-xl">
          Limited Offer for Instant CheckOut User : Get Free GST Registration
          with above Package
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
      {/* Informational Section: One Person Company Registration */}
      <section style={{padding: '6rem', width: '100vw', minHeight: '100vh', maxWidth: '100%'}}>
        <h2 style={{fontSize: '2.5rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>What is OPC Registration Govt Cost?</h2>
        <p style={{fontSize: '1.25rem'}}>For OPC with nominal share capital more than ₹10,00,000, the fee is ₹2,000 plus ₹200 for every ₹10,000 of nominal share capital after the first ₹10,00,000 up to ₹50,00,000. Registration generally takes 20–30 days and you receive a certificate of incorporation.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>OPC Stands For?</h3>
        <p style={{fontSize: '1.25rem'}}>OPC means One Person Company—a company incorporated by one person. OPC is a short name for One Person Company.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Minimum Requirements for One Person Company Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Minimum 1 shareholder</li>
          <li>Minimum 1 director (director and shareholder can be the same person)</li>
          <li>Minimum 1 nominee</li>
          <li>Shareholder/nominee must be an Indian resident</li>
          <li>Minimum authorized share capital: ₹1 lakh</li>
          <li>Digital signature certificate for director</li>
          <li>Director identification number for the director</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Nomination in case of One Person Company</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>The memorandum must indicate the nominee's name and consent.</li>
          <li>Written consent of the nominee is filed with incorporation documents.</li>
          <li>The member can change the nominee at any time by notice.</li>
          <li>The new nominee must give consent; changes require amendment in the memorandum.</li>
          <li>Nominee must be a natural person, Indian citizen, resident in India, and not a minor.</li>
          <li>Nominee can withdraw; a new nominee must be appointed within 15 days and notified to the company and ROC within 30 days.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Documents Required for OPC Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Copy of passport/PAN card/Voter ID/Driver's License of the Director</li>
          <li>Copy of bank statement/mobile or electricity bill of Director</li>
          <li>Passport size photo of director</li>
          <li>Copy of autograph of director</li>
          <li>No objection certificate for registered office</li>
          <li>Rental Agreement/Sale deed of the registered office</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>One Person Company (OPC) Registration Process</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Get Director Identification Number (DIN) and Digital Signature Certificate (DSC).</li>
          <li>Apply for the company name.</li>
          <li>Get nominee's consent in prescribed forms.</li>
          <li>File consent and incorporation forms with MOA, AOA, and other documents.</li>
          <li>Receive incorporation certificate from ROC and commence business.</li>
          <li>Apply for PAN and open a current bank account in the company's name.</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Advantages of One Person Company Registration</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Only one member required</li>
          <li>Separate legal entity, like any registered corporate</li>
          <li>Incorporated as a private limited company</li>
          <li>Only one member and one director at any time</li>
          <li>Member and nominee must be natural persons, Indian citizens, and residents in India</li>
          <li>One person cannot incorporate more than one OPC or be nominee in more than one OPC</li>
          <li>OPC loses status if paid up capital exceeds ₹50 lakhs or turnover exceeds ₹2 crores (3 years)</li>
          <li>No minor can be member or nominee</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>How to Choose Name in One Person Company Registration?</h3>
        <p style={{fontSize: '1.25rem'}}>You can choose a name during registration by filing the incorporation form or using WEB-RUN services on the MCA website.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Timeline for OPC Registration</h3>
        <p style={{fontSize: '1.25rem'}}>OPC registration takes minimum 10–15 days for incorporation in India.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Tax Rate for One Person Company</h3>
        <p style={{fontSize: '1.25rem'}}>OPC is taxed as a private company at 30% of total income, which is higher than individual tax slabs.</p>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Annual Compliance for One Person Company</h3>
        <ul style={{fontSize: '1.25rem'}}>
          <li>Form AOC-4 for financial statement</li>
          <li>MGT-7 for annual return</li>
          <li>Board meetings at least twice a year</li>
        </ul>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>FAQ on One Person Company</h3>
        <div style={{fontSize: '1.25rem'}}>
          <div><b>1. Who can become partner in One Person Company?</b><br/>Any individual unless of unsound mind, insolvent, or with insolvency proceedings pending.</div>
          <div><b>2. Can NRI start an OPC?</b><br/>Only a natural person who is an Indian citizen and resident in India can incorporate or be nominee in an OPC. Must be over 18 years old.</div>
          <div><b>3. What is OPC Registration?</b><br/>It is the legal process to incorporate a One Person Company, making it a legal entity.</div>
          <div><b>4. Minimum number of partners in OPC?</b><br/>Minimum 1 person.</div>
          <div><b>5. Why OPC preferred by individuals?</b><br/>Low compliance, easy incorporation, low fees, body corporate, limited liability.</div>
          <div><b>6. Is it cheaper than Private Limited Company?</b><br/>Yes, lower cost and compliance.</div>
          <div><b>7. What is MOA and AOA?</b><br/>MOA: Memorandum of Association, AOA: Articles of Association—key company documents.</div>
          <div><b>8. Who can incorporate an OPC?</b><br/>Only a natural person, Indian citizen, resident in India, and nominee for the sole member.</div>
          <div><b>9. Can a person form more than 1 OPC?</b><br/>No, only one OPC per person (including as nominee).</div>
          <div><b>10. Can a minor be a member of OPC?</b><br/>No, minors cannot be members or nominees.</div>
          <div><b>11. Can OPC do NBFC activities?</b><br/>No, OPC cannot do Non-Banking Financial Investment activities.</div>
          <div><b>12. Is OPC suitable for medium & large business?</b><br/>No, only for small business (max ₹50 lakh capital or ₹2 crore turnover).</div>
          <div><b>13. Maximum time limit for conversion of OPC?</b><br/>Cannot convert voluntarily for 2 years unless capital/turnover exceeds limits.</div>
          <div><b>14. Is it mandatory to nominate a person during incorporation?</b><br/>Yes, nominee's name and consent must be in the memorandum.</div>
          <div><b>15. Is it mandatory to mention nominee in MOA?</b><br/>Yes, nominee's name must be in the MOA.</div>
          <div><b>16. Is it mandatory to mention 'OPC' in all documents?</b><br/>Yes, 'OPC' must be mentioned in brackets below the company name everywhere.</div>
          <div><b>17. Is it mandatory to intimate withdrawal of consent by nominee?</b><br/>Yes, nominee must notify the company and member in writing.</div>
          <div><b>18. Time period for nominating another person as nominee?</b><br/>15 days from withdrawal notice.</div>
          <div><b>19. Maximum time for intimation to Registrar about withdrawal/appointment of nominee?</b><br/>30 days from withdrawal notice.</div>
          <div><b>20. Procedure for issue of Share Certificate?</b><br/>Issued under company seal, signed by director/authorized person and company secretary.</div>
          <div><b>21. In event of member's death, who becomes member?</b><br/>Nominee becomes member; must nominate another within 15 days and notify ROC within 30 days.</div>
          <div><b>22. Maximum penalty for defaulting provisions?</b><br/>Fine up to ₹10,000 plus ₹1,000 per day for continuing default.</div>
          <div><b>23. When must OPC convert to public/private company?</b><br/>If paid up capital exceeds ₹50 lakh or turnover exceeds ₹2 crore.</div>
          <div><b>24. Time limit for conversion?</b><br/>Must convert within 6 months of exceeding limits.</div>
          <div><b>25. Is it mandatory to alter MOA/AOA for conversion?</b><br/>Yes, must alter by resolution.</div>
          <div><b>26. Prior intimation to Registrar for ceasing OPC status?</b><br/>Yes, within 60 days of applicability.</div>
          <div><b>27. Is PCS signature required in Annual Return?</b><br/>Signed by Company Secretary or, if none, by Director.</div>
          <div><b>28. Is compliance with General Meetings required?</b><br/>No, not applicable to OPC.</div>
          <div><b>29. Is it mandatory to maintain Minutes book?</b><br/>Yes, resolutions must be entered and signed in the minutes book.</div>
          <div><b>30. Is it mandatory to file financial statements?</b><br/>Yes, within 180 days of financial year closure.</div>
          <div><b>31. Is it mandatory to record every contract in Minutes?</b><br/>Yes, unless contract is in writing or in ordinary course of business.</div>
          <div><b>32. Is it mandatory to inform Registrar about every contract?</b><br/>Yes, within 15 days of Board approval.</div>
          <div><b>33. Is Cash Flow Statement mandatory?</b><br/>No, not mandatory for OPC.</div>
        </div>
        <h3 style={{fontSize: '2rem', color: '#6D28D9', fontWeight: 'bold', paddingBottom: '0.5rem'}}>Conclusion on One Person Company</h3>
        <p style={{fontSize: '1.25rem'}}>OPC encourages business ventures and better use of market resources. It gives individual entrepreneurs the benefits of a company while limiting liability. While OPC helps individual entrepreneurs, some legal improvements are needed for full benefit. In simple terms, it gives sole proprietors a way to register and access better opportunities.</p>
      </section>
    </div>
  );
};

export default ITRFilingService;

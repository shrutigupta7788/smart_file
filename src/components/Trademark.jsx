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
    brandName: "",
    businessNature: "",
    trademarkClass: "",
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
        Trademark Registration Online
      </h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-base md:text-lg font-medium text-green-700 my-4 text-center drop-shadow-sm">
          India's Only Govt Certified Portal to get done Trademark Registration
          Online Package Start From Just 6800/- INR (All Inclusive)
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
          What is Trademark Registration ?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
          Trademark is very Important for any business or brand in India. Each
          any type of the business who's want to secure their brand name and
          logo of the company, they have to must go for trademark registration
          in India. Trademark Registry gives the protection on each brand name
          with the logo in their respective trademark class.
          <br />
          <br />
          There are 45 Trademark classes where you can register your brand name
          in the type of the field which is related to your business or where
          you want to protect the brand or trade name. Remember if you want to
          protect your design or idea or product or service then you can go with
          Patent Registration or if you want to protect your design then you can
          go with the Copyright Registration.​
        </p>
      </div>
      <div className="mt-8">
        {/* <ITRFilingServiceWhatIs /> */}

        <div className="min-h-[15vh] bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            Why is Trademark Registration Required for Business ?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2">
            There are a lot of the benefits and reason to register your brand
            name with the logo as a trademark in India which are the following
            :-
            <br />
            <br />
          </p>

          <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
            <li>
              Secure your brand or company name so anyone (competitors) can't
              use a similar brand name.
            </li>
            <li>
              Give protection on the brand name so other companies can't use
              your brand name without your permission.
            </li>
            <li>
              It helps you to protect your existing customer by showing a fake
              similar brand name.
            </li>
            <li>
              If you are internet based startup then it gives you protection on
              the Domain Name like www.xyz.com etc.
            </li>

            <li>
              If you are selling the products on the e-commerce website such as
              Flipkart or Amazon or paytm etc then it gives you different
              identity between other sellers.
            </li>

            <li>
              Its help you to register a private limited company with the same
              brand name.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            Trademark Registration Online is Possible
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
            Yes, Now Trademark Registry have their own dedicated govt portal
            which simplified the Trademark Registration Online.They have a
            standard procedure for the trademark registration but it's difficult
            if you are not aware with the Trademark Class or Trade name rules or
            Digital Signature etc. In that case we at MyOnlineCA Helps you to
            get done your Trademark Registration at the lowest cost with the
            Trademark Govt Certified Attorney.
          </p>
        </div>
        {/* <ITRFilingServiceEFiling /> */}.
        <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">
            Benefits of the Online Trademark Registration over Offline Trademark
            Registration
          </h2>

          <ul className="list-decimal pl-10 pr-2 text-base md:text-lg text-gray-700 mb-6 space-y-1">
            <li>Lowest Fee or Cost to get done the Trademark registration</li>
            <li>Not required to visit anywhere govt department or office.</li>
            <li>Track application status online easily.</li>
            <li>Easily Resubmission or changes of the trademark online</li>
            <li>Easily reply on the Trademark Objection</li>
            <li>Download the Trademark Certificate Online</li>
            <li>Easily preparation of the Trademark Search Report.</li>
          </ul>
        </div>
      </div>
      {/* Larger and Bolder Income Tax Return Filing Fee Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl shadow-purple-300 p-16 mt-4 mb-0 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
        Trademark Registration Cost or Fee
        </h2>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
        Trademark Registration have 2 types of fees or Cost :-

        </div>
        <ul className="list-disc pl-10 mb-7 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>
          a) Government Fee b) Registered Trademark Attorney Fee


          </li>
          <li>
          a) Government Fee is 4500/- INR for the same for the One Class of the trademark. its include your trade name with the logo. so always choose the right trademark class before the filings.


          </li>
          <li>
          b) Registered Trademark Attorney Fee – it's very professional to professional. You always have to file the trademark with the registered trademark attorney. if we are talking about the market price then professional are charge nearby 2000/- to 3000 INR for the same.

          </li>
          
        </ul>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
        We at MyOnlineCA Offers to you awesome package for Trademark Registration Just at 6799/- INR


        </div>
        <div className="mb-3 font-semibold text-gray-800 text-xl">
        Package Includes :


        </div>
        <ul className="list-disc pl-10 space-y-3 text-gray-800 text-lg md:text-xl">
          <li>
          Consultation on Choose the Right Trademark Class and save your cost.

          </li>
          <li>
          Consultation on Brand Registration Law & regulations.

          </li>
          <li>
          Preparation of the Search Report on Trademark

          </li>
          <li>
          Preparation and filings of a Trademark application with the logo registration

          </li>
          <li>
          Delivery of Valid Trademark Acknowledgement & Regular updates on proceedings.​

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
              Trademark/Brand Registration Form

              </h2>
              <p className="text-base text-center text-gray-600 mb-2">
              Fill up your Application and Get Connect with us
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
                  Name of Brand <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={form.brandName}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Type your brand name"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">
                  Type your brand name
                </span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Nature of Business <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessNature"
                  value={form.businessNature}
                  onChange={handleChange}
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-purple-400"
                  placeholder="Let us know about your business"
                  required
                />
                <span className="text-xs text-gray-400 mt-1">
                  Let us know about your business
                </span>
              </div>
              <div className="flex flex-col text-left mb-6">
                <label className="font-semibold text-base mb-1">
                  Do you know about Trademark Class? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8 mt-1 ml-2">
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="trademarkClass"
                      value="Yes"
                      checked={form.trademarkClass === "Yes"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center text-base">
                    <input
                      type="radio"
                      name="trademarkClass"
                      value="No"
                      checked={form.trademarkClass === "No"}
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
      {/* Trademark Registration Information Section */}
      <section className="w-[100vw] bg-white shadow-2xl pt-32 pr-32 pl-32 pb-0 mt-0 mx-[-50vw] left-1/2 relative border border-purple-200" style={{transform: 'translateX(-50%)'}}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20">Documents required for Trademark Registration</h2>
        <p className="mb-10 text-lg">Following Documents are required for the Trademark Registration in India –</p>
        <ul className="list-disc pl-24 mb-20 text-gray-800 text-lg md:text-xl space-y-8">
          <li>Pan Card Copy of the Personal | Company or Firm Name.</li>
          <li>Address Proof like Aadhar Card Copy or Voter id or Passport etc.</li>
          <li>Trademark Authority Letter (Format provided by trademark attorney during registration)</li>
          <li>Any registration certification if have on the company or firm name.</li>
        </ul>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20 mt-32">Information Required during Trademark Registration</h2>
        <p className="mb-10 text-lg">During the Trademark Registration below are some important information is required for the Trademark Registration</p>
        <ol className="list-decimal pl-24 mb-20 text-gray-800 text-lg md:text-xl space-y-8">
          <li>Applicant Name – you can register as an individual or any Pvt ltd or llp or partnership or proprietorship firm name.</li>
          <li>Business Type – you have to mention the type of business like a trader or manufacturer or service provider.</li>
          <li>Business nature – you have to mention the short info about the products or services. Trademark registration always depends on the class so you have to choose a proper class as per your business products or services.</li>
          <li>Brand or Company Name – you have to provide your Brand Name which is using to provide services or products to the customers.</li>
          <li>Logo (Optional) – if you have any logo of the company then you can provide png or jpeg image file of the logo during the trademark registration</li>
          <li>Business Official Communication Address – you have to provide the communication address which can be used to communicate with the govt officials letter or any other things.</li>
        </ol>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20 mt-32">Benefits of Trademark Registration</h2>
        <ul className="list-disc pl-24 mb-0 text-gray-800 text-lg md:text-xl space-y-8">
          <li><b>Increase the Trustworthiness of Business:</b> If you are running a new business and your brand name & logo are trademarks protect with ™ word then its provide to you more brand value & trust authority between the customers.</li>
          <li><b>File a Case against any Competitors:</b> If you have some awesome unique business proposition and other competitors are try to copy your brand identity or selling duplicate things on your name, then you can simply stop them by trademark registry.</li>
          <li><b>Increase your Brand Value or Asset:</b> Trademark is treat as Company or Firm Assets so if you make any expenses to secure your brand then it's not called expenses, these covered under the investment indirectly because it's your company valuable assets, because when you sell your business to another's then buyer party will provide to you money for your Brand value or Trademark.</li>
          <li><b>Protect your unique identity of the brand:</b> Trademark registration gives you unique identity for your brand so if you have a lot of the products under your company then due to trademark registration it gives you unique identity for your all the products. For Ex HUL , P&G have several products but HUL and P&G both are trademarks of their own company so it gives them unique identity between the customers.</li>
          <li><b>Protection of the Digital Assets:</b> Trademark registration provides the protection on the domain name also with the Logo. so let's suppose if you have one extension of a domain like .in ( for Indian domain's) then on the basis of the trademark you can also restrict the use of another extension like (.com or .org or .pk etc). So ultimately it also protects your digital assets of the company.</li>
          <li><b>Working as PR for the Company:</b> Trademark Registration provides a ™ word in the starting to use before the brand name or company name so it's also working as a PR Tool for the company. Whether you are publishing any newspaper advertisement or digital marketing campaign or any other, your Logo always shows with the ™ word so it creates the bigger image between the customer & work as PR for your company.</li>
          <li><b>Helps in Online ECommerce Portal:</b> Trademark Registration gives you initial temporary protection so if you are new ecommerce business which wants to sell the Products on Flipkart or Amazon etc, then these companies always asking the trademark registration certificate from the sellers.</li>
          <li><b>Global Protection of the Brand:</b> In the future if your brand becomes a global sensation then trademark gives you more power to increase your business all over the world. So you can file the trademark in other countries also and increase your acceptance of chance because you have already registered a trademark in India. Similar vise versa foreigner can register the trademark in India.</li>
        </ul>
        {/* Trademark Registration Cost or Fee Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20">Trademark Registration Cost or Fee</h2>
        <div className="mb-20 text-lg md:text-xl text-gray-800">
          <p className="mb-10">Trademark Registration has 2 types of fees or costs:</p>
          <ul className="list-disc pl-24 mb-14 space-y-8">
            <li><b>Government Fee:</b> ₹4,500 INR per class (includes trade name with logo). Always choose the right trademark class before filing.</li>
            <li><b>Registered Trademark Attorney Fee:</b> Varies by professional, typically ₹2,000–₹3,000 INR. Filing should be done with a registered trademark attorney.</li>
          </ul>
          <p className="mb-10">We at MyOnlineCA offer you an awesome package for Trademark Registration at just <span className='font-bold text-green-700'>₹6,799 INR</span> (all inclusive).</p>
          <div className="mb-8 font-semibold">Package Includes:</div>
          <ul className="list-disc pl-24 mb-14 space-y-8 text-base md:text-lg">
            <li>Consultation on choosing the right trademark class to save your cost.</li>
            <li>Consultation on brand registration law & regulations.</li>
            <li>Preparation of the search report on trademark.</li>
            <li>Preparation and filing of a trademark application with logo registration.</li>
            <li>Delivery of valid trademark acknowledgement & regular updates on proceedings.</li>
          </ul>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20 mt-32">Trademark Registration Process</h2>
        <p className="mb-10 text-lg">Trademark Registration Process is Now Online in India. so you have not required to visit any trade mark registry office. You have to just fill the Online application with the help of Registered Trademark attorney with the government of India. Following are Process to Register an Online Trademark Registration :-</p>
        <h3 className="text-2xl font-bold text-purple-600 mt-20 mb-10">Phase 1 – Initial Registration Process for Trademark Registration in India</h3>
        <ul className="list-disc pl-24 mb-16 text-gray-800 text-lg md:text-xl space-y-8">
          <li>Prepare basic documents and brand logo regarding the Trademark Registration.</li>
          <li>File the TM Application Form with Government Fee & attached your representative trademark lawyer digital signature.</li>
          <li>Pay the Government fee via debit card or net banking.</li>
          <li>Get the final acknowledgement receipt and use "TM" before your brand name.</li>
        </ul>
        <h3 className="text-2xl font-bold text-purple-600 mt-20 mb-10">Phase 2 – Examination Report on Trademark Registration</h3>
        <ul className="list-disc pl-24 mb-16 text-gray-800 text-lg md:text-xl space-y-8">
          <li>After the 3-12 months of the filing of the application, Trademark registry department examination the trade name & logo in accordance with the provision of trademark act.</li>
          <li>If an object is raised then an objection report has been issued by the department and provide a time for the reply on the objection with the evidence of the documents.</li>
        </ul>
        <h3 className="text-2xl font-bold text-purple-600 mt-20 mb-10">Phase 3- Trademark Publication</h3>
        <ul className="list-disc pl-24 mb-16 text-gray-800 text-lg md:text-xl space-y-8">
          <li>After the reply to the above objection report, trademark registry is satisfied with the reply then go ahead for the trademark publication and advertising the brand name in trademark journal of India.</li>
        </ul>
        <h3 className="text-2xl font-bold text-purple-600 mt-20 mb-10">Phase 4- Opposition on Trademark Registration</h3>
        <ul className="list-disc pl-24 mb-16 text-gray-800 text-lg md:text-xl space-y-8">
          <li>If some other person or company have an objection on that trademark then he can file an objection again from the 4 months after the trademark publication with the documents.</li>
        </ul>
        <h3 className="text-2xl font-bold text-purple-600 mt-20 mb-10">Final Trademark Registration Certificate</h3>
        <ul className="list-disc pl-24 mb-16 text-gray-800 text-lg md:text-xl space-y-8">
          <li>If no one file the opposition again the respective trademark then authority issued a final Trademark Registration Certification which is valid for the 10 years from the date of the filings.</li>
        </ul>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20 mt-32">Other Important Information</h2>
        <div className="mb-20 text-lg md:text-xl">
          <b>Brand Registration or Logo Registration or Trademark Registration are the Same?</b><br/>
          Yes, these terms usually only for the Trademark Registration. Brand Registration or Logo Registration is equal to the Trademark Registration. So once you got the trademark certificate then your brand & logo both are registered for the same.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>Type of Trademark Symbols under Trademark Registration</b><br/>
          <b>R Symbol</b> – It refers to permanent protection for the trademark or brand name. You can refer this symbol on your Logo only after the getting final trademark registration certificate.<br/>
          <b>™ Symbol</b> – It refers to the temporary protection in respect of trademark. You can start this symbol just only after the submission of the trademark application. It also refers to the unregistered trademark. It gives only warning to other's regarding the copy of the logo or brand name.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>Can I Register mySelf Trademark Registration Online?</b><br/>
          No, because it's required the expertise in the trademark law or act. You have to know about the trademark class & their depth knowledge about the categories. Apart from this you need the digital signature (DSC). even trademark registry appointed authorised trademark attorney and agent so if you take the help from them, then you will get the benefits like a subsidy in govt fee & consultation on trademarks.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>How MyOnlineCA Helps us for Trademark Registration Online?</b><br/>
          MyOnlineCA India's leading online legal service provider company. Its serve more than 100+ Startups or companies per month across India. We know that when an entrepreneur start a business in India, it's very difficult to get done all the legal task so quickly at the lowest cost so we at MyOnlineCA Brings technology-driven platform where you can get Online Trademark Registration at fingertips. We Choose some of the best Trademark Attorney across India who charges the lowest professional fee.<br/>
          <b>Its Works in simple 3 Steps –</b>
          <ol className="list-decimal pl-24 mt-8 mb-8">
            <li>Just place a request here with your basic details</li>
            <li>Pay the Professional Fee Only 1999/- INR Online via cards/upi/netbanking</li>
            <li>Get Instant Confirmation via Email/Call from Trademark Attorney & discuss the things.</li>
          </ol>
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>Major Difference between Trademark or Logo or Brand Registration?</b><br/>
          If we talk about the Brand Registration or Logo Registration then its equal to the trademark registration, people are always confused with the terms brand registration or logo registration but it is not different from Trademark Registration.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>What is the Trademark Classification or Class?</b><br/>
          There are 45 Class in the Trademark Act. So you have to choose the right trademark class as per your product or service. For ex – myonlineca is a leading legal service provider company which deals in trademark registration & other legal services so we have to Choose the legal services sector in the trademark class which are 45 related to the legal & security services.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>How to do Trademark Search in India for Online Registration?</b><br/>
          A Good Trademark attorney always provides to your search report before the filing of the trademark application. Because if you do not choose the proper brand name or class then there is a chance that your application will be rejected for the same.<br/>
          <b>A trademark search can be done in simple 2 steps –</b>
          <ol className="list-decimal pl-24 mt-8 mb-8">
            <li>Go to the official Trademark registry site</li>
            <li>Insert your brand name & choose the proper class so you will get the results with a similar brand or logo.</li>
          </ol>
          Always remember Trademark attorney has authorised agent login on the govt portal so they can easily search & prepare the report with their expert knowledge so always get done trademark search report from your trademark attorney.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>The validity of the Trademark Registration for a Brand</b><br/>
          Trademark is registered in India at least for 10 years. After the 10 years you have to renew your trademark certificate for the same which is called the trademark renewal. Trademark renewal can be done easily by paying only the renewal fee to the govt.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>Timeline for the Trademark Registration</b><br/>
          Trademark Registration Application Filings takes minimum 3-4 days for the completion. After that you will get the acknowledgement number. If we talk about the getting final trademark registration certificate then it takes min 6-8 month for the same if you are not getting any rejection or trademark objection.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>What is Trademark Objection during the Trademark Registration Process?</b><br/>
          Trademark objection is referred to when you are filing your trademark application, after that you got the objection from your competitors or other similar company or brand which are using that name. Sometimes govt officer by default sends the objection report regarding the use of brand name or any other reason which is related to your brand name or logo.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>What is Trademark Objection Reply during Trademark Registration Process?</b><br/>
          Once you get the Trademark objection on your application, after that there is a timeline around 30 days to revert on the trademark objection. These timeline very case to case. So in this time period you have to revert on the trademark objection by uploading the proper documents and written revert on stamp paper for the same.
        </div>
        <div className="mb-20 text-lg md:text-xl">
          <b>How to Renew Trademark Registration?</b><br/>
          Trademark Registration is valid for the 10 years so after that you have to renew the trademark registration. Anyone can apply for the renewal of the trademark before the 6 months of the expiry. So you have to pay only the government to prescribe a fee for the trademark renewal.
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-20 mt-32">The FAQ on the Trademark Registration Online</h2>
        <ol className="list-decimal pl-24 mb-20 text-gray-800 text-lg md:text-xl space-y-8">
          <li>How to Select Good Trademark name for the business? While you are starting your first company then you have to must research about your brand name. You have to check out that brand name is available or not or use by any other company or not. Even you have to check out about the domain name availability for the same. You can read here about how to do a brand search in India.</li>
          <li>What are the features of the Trademark? In short mainly 3 features of the trademark registration – Unique Brand Identity, Secure or Protect your Brand Name, Increase your truth authority</li>
          <li>Who are the qualified for the Trademark Registration? Trademark can be registered by any person, even foreigner can register the trademark in India. So there is no qualification for the trademark registration.</li>
          <li>Who can take the benefits from Registered Trademark? Trademark owner or individual or sole proprietor takes the benefits from the trademark registration. They can easily sell trademark value to buyer party for the same.</li>
          <li>Correction or Changes are possible in Trademark application after Filings? Yes, it's possible. If you are filing Trademark Online with myonlineca then you can do it change or correction on later stage by submitting a correction trademark form for the same.</li>
          <li>Can trademark registry remove the trademark from the registry? Yes, they are an appointment to maintain the trademark registrar. So if your trademark is not qualified with the govt terms or not getting any reply on the objection report then yes they can remove the trademark or cancel the same.</li>
          <li>What is the most important thing in a Trademark application? Brand name word or logo and Class is the most important factor in the trademark application. So you have to take care of this before filing the trademark application.</li>
          <li>Is the logo included in the trademark registration? Yes, logo or tag line is included into the trademark registration but the design is not registered with the trademark. For the Design you have to require the Copyright Registration.</li>
          <li>Protection of domain name can be possible with the Online Trademark Registration? Yes, it's possible to protect the domain name with the Trademark Registration.</li>
          <li>Can I protect my idea with the Trademark Registration? The idea can't be protected with the trademark, you can go with the Patent Registration in that case. Trademark is related only with the brand's names.</li>
          <li>Can I file the trademark in multiple class or not? Yes, you can file the trademark into the multiple class but remember 4500/- INR fee is Only per Class so in that case, your cost would be double for the same.</li>
          <li>Which type of the name or slogan or brand not consider into the trademark? Generally you can't trademark some things like people name or surname etc. apart from this you can't trademark any colour or smell or location or sound etc.</li>
          <li>Can I transfer my trademark to another person or company? Yes, it's possible even when there are merge & acquisition, most companies are paying for the trademark only. So simply you can sell out your trademark to another person or company for the same.</li>
          <li>Can I use your Home or Residential address to Register my Trademark? Yes you can use your residential address for the Trademark Registration. There is no issue in that.</li>
          <li>How to Check Trademark Application Status Online? Simply go to Indian Govt Registry Website & insert your class & trade name, you will get the status online on your screen for the same.</li>
        </ol>
      </section>
      <div className="w-full flex flex-col items-center">
        {/* <ITRTypeAndGuide /> */}
      </div>
    </div>
  );
};

export default ITRFilingService;

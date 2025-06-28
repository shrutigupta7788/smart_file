import React from "react";

const ITRFilingServiceEFiling = () => (
  <div className="min-h-[15vh] bg-gradient-to-r from-purple-100 to-blue-50 flex flex-col justify-start items-center pt-8 pb-8 mt-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-l-8 border-blue-400">
    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight text-left w-full pl-4">What is Income Tax eFiling</h2>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
      Income Tax can be filed by the two way i.e is the Online Method and another offline Method. Now as per the Government Instructions all the income tax return will be filed only through ITR eFiling Method. Offline Method is not available.
    </p>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left w-full pl-4 pr-2 mb-2">
      So in the following cases, ITR Online eFiling is Mandatory From 1st April 2022 –
    </p>
    <ul className="list-decimal pl-10 pr-2 text-base md:text-lg text-gray-700 mb-6 space-y-1">
      <li>if your taxable income is more than 2.5 lakh Rupees in a year</li>
      <li>if your want to claim any TDS Refund</li>
      <li>if you want to take the benefits of carry forward of the losses</li>
      <li>if foregin travel expenses is more than 2 lakh rupees in a year</li>
      <li>if electricity bill expenses more than 1 lakh rupees in a year</li>
      <li>if total business sales or turnover more than 60 lakh rupees in a year</li>
      <li>if you have TDS more than 25000 rupees in a year.</li>
    </ul>
  </div>
);

export default ITRFilingServiceEFiling; 
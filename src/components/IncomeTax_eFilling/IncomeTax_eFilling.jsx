import React from "react";

const IncomeTax_eFilling = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Income Tax eFiling for Income Tax Consultancy</h1>
        <p className="text-gray-700 text-lg mb-4">
          Income Tax eFiling is the process of submitting your income tax returns online, making tax compliance faster, easier, and more accurate. As a trusted Income Tax Consultant, we help individuals, professionals, and businesses file their returns seamlessly through the government's secure eFiling portal.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 mb-10">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Why Choose Us for Income Tax eFiling?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold text-purple-700">Expert Guidance:</span> Our experienced tax consultants ensure your returns are filed correctly, maximizing eligible deductions and minimizing errors.</li>
          <li><span className="font-semibold text-purple-700">Hassle-Free Process:</span> We handle all the paperwork and technicalities, so you can focus on your work or business.</li>
          <li><span className="font-semibold text-purple-700">Timely Filing:</span> Avoid penalties and notices by filing your returns on time with our proactive reminders and support.</li>
          <li><span className="font-semibold text-purple-700">Data Security:</span> Your financial information is handled with the utmost confidentiality and protected using secure digital processes.</li>
          <li><span className="font-semibold text-purple-700">Support for All Taxpayers:</span> Whether you are a salaried individual, freelancer, business owner, or NRI, we offer tailored solutions for every tax profile.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 shadow">
          <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
          <p className="text-white mb-4">Let us simplify your tax filing experience. Contact us for a free consultation and let our experts take care of your income tax eFiling needs!</p>
          <a href="mailto:info@myonlineca.in" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-100 transition">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default IncomeTax_eFilling;

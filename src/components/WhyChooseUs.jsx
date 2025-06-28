import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <section className="bg-white py-12 px-4 rounded-lg shadow max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-700">Why Choose Us?</h2>
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
      </section>
    </div>
  );
};

export default WhyChooseUs; 
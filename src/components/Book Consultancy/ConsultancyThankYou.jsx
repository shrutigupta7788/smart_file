import React from "react";

const ConsultancyThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5fc] py-10 px-2">
      <div className="w-full max-w-md bg-white rounded border shadow mx-auto flex flex-col items-center p-8">
        <div className="text-green-600 text-5xl mb-4">&#10003;</div>
        <h2 className="text-2xl font-bold mb-2 text-center">Thank You!</h2>
        <p className="text-gray-700 text-center mb-2">Your consultation request has been submitted successfully.</p>
        <p className="text-gray-500 text-center text-sm">Our expert will contact you soon on your provided details.</p>
      </div>
    </div>
  );
};

export default ConsultancyThankYou; 
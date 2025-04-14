import React from 'react';

const steps = [
  { id: 1, label: 'Incident Detection' },
  { id: 2, label: 'Knowledge Extraction' },
  { id: 3, label: 'Data Retrieval' },
  { id: 4, label: 'Root Cause Analysis' },
  { id: 5, label: 'Propose Mitigation Action' },
  { id: 6, label: 'Implement Mitigation' },
];

const NetworkFlow: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 bg-[#1A1F2C]">
      <div className="bg-[#222222] border border-gray-700 rounded-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="p-6 md:p-8 animate-fade-in bg-[#222222] border border-gray-700 rounded-xl">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Ericsson Network Intelligence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ensures service continuity and resolution of network incidents autonomously, 
                  delivering high availability and keeping network operation costs at a minimum​.
                </p>
              </div>
            </div>

            {/* Network Flow Steps (Middle) */}
            <div className="lg:col-span-4">
              <div className="flex flex-col space-y-8 items-center mt-4 lg:mt-0">
                {steps.map((step, index) => (
                  <div key={step.id} className="w-full">
                    <div className="relative">
                      {/* Step Circle */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1F2C] font-bold">
                          {step.id}
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-white font-medium">{step.label}</h4>
                        </div>
                      </div>

                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-5 top-10 transform -translate-x-1/2">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-[#9b87f5] to-[#D6BCFA]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="p-6 md:p-8 animate-fade-in bg-[#222222] border border-gray-700 rounded-xl">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Erica - Autonomous Network Operations Agent
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated prompt generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkFlow;

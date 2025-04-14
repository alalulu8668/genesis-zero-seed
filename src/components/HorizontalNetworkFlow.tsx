import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, label: 'Incident Detection' },
  { id: 2, label: 'Knowledge Extraction' },
  { id: 3, label: 'Data Retrieval' },
  { id: 4, label: 'Root Cause Analysis' },
  { id: 5, label: 'Propose Mitigation Action' },
  { id: 6, label: 'Implement Mitigation' },
];

const HorizontalNetworkFlow: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Side */}
            <div className="flex flex-col justify-center">
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
            <div className="md:col-span-1 lg:px-6">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
                Network Flow
              </h2>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full mb-8"></div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center">
              <div className="p-6 md:p-8 animate-fade-in bg-[#222222] border border-gray-700 rounded-xl">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Erica - Autonomous Network <br />Operations Agent
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated prompt generation
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Steps */}
          <div className="overflow-x-auto pb-4 mt-8">
            <div className="flex flex-row items-center min-w-max md:min-w-0 justify-between space-x-2 md:space-x-3">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className="w-24 md:w-28 lg:w-40 text-center mb-4">
                    <p className="text-sm md:text-base font-medium text-white">
                      {step.label}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1A1F2C] font-bold text-xl">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute ml-24 md:ml-28 lg:ml-40">
                      <ChevronRight className="text-white w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="mt-4 h-4 bg-[#9b87f5] rounded-full"></div>
              <div className="absolute top-0 left-0 right-0 mt-4 h-4 bg-[#9b87f5] rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNetworkFlow;

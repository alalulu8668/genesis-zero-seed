
import React, { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import HealingFlow from '../components/HealingFlow';

const Dashboard = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(err => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#232323] text-white">
      {/* Top header bar */}
      <header className="w-full py-4 px-6 bg-[#111111] border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6">
            <img 
              src="/lovable-uploads/ec5ffe1d-7623-457c-8a56-c9d3ed844b6d.png" 
              alt="Ericsson Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-medium">Erica - Autonomous network operations agent</span>
        </div>
        <div className="flex gap-2">
          <button 
            className="p-1 hover:bg-gray-800 rounded transition-colors" 
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-8 bg-[#232323]">
        <div className="mb-6">
          <h1 className="text-3xl font-light">Autonomous network incident management flow</h1>
        </div>

        {/* Flow diagram - centered in the page */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-full max-w-5xl">
            <HealingFlow />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

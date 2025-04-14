import React, { useState } from 'react';
import { Maximize, Minimize, ArrowRight } from 'lucide-react';
import HealingFlow from '../components/HealingFlow';
import { Button } from '../components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("ENI");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

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

      <div className="bg-[#1A1A1A] border-b border-gray-800 flex items-center">
        <div className="flex items-center py-3 px-6 gap-2 border-r border-gray-800">
          <div className="w-5 h-5">
            <svg viewBox="0 0 24 24" className="fill-[#0063E8]">
              <rect width="5" height="3" x="2" y="5" />
              <rect width="15" height="3" x="8" y="5" />
              <rect width="5" height="3" x="2" y="11" />
              <rect width="15" height="3" x="8" y="11" />
              <rect width="5" height="3" x="2" y="17" />
              <rect width="15" height="3" x="8" y="17" />
            </svg>
          </div>
          <span className="text-white">Incident management flow</span>
        </div>
        <div className="h-8 w-[2px] bg-[#0063E8] mx-4"></div>
        
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="bg-transparent">
            <NavigationMenuItem>
              <button 
                className={`py-3 px-6 text-white ${activeTab === "ENI" ? "bg-[#0063E8]" : "hover:bg-[#2A2A2A]"} rounded-none transition-colors duration-200`}
                onClick={() => setActiveTab("ENI")}
              >
                Ericsson Network Intelligence (ENI)
              </button>
              <NavigationMenuContent className="bg-[#2A2A2A] text-white border-gray-800 border-t-0">
                <div className="p-2 w-60">
                  <a 
                    href="#" 
                    className="block p-2 hover:bg-[#3A3A3A] text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("ENI");
                    }}
                  >
                    Incident management flow
                  </a>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <button 
                className={`py-3 px-6 text-white ${activeTab === "EIA" ? "bg-[#0063E8]" : "hover:bg-[#2A2A2A]"} rounded-none transition-colors duration-200`}
                onClick={() => setActiveTab("EIA")}
              >
                Ericsson Infrastructure Analyzer (EIA)
              </button>
              <NavigationMenuContent className="bg-[#2A2A2A] text-white border-gray-800 border-t-0">
                <div className="p-2 w-60">
                  <span className="block p-2 text-gray-400 cursor-not-allowed">
                    No content available
                  </span>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <main className="p-8 bg-[#232323]">
        <div className="mb-6 relative">
          <h1 className="text-3xl font-light">Autonomous network incident management flow</h1>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <h2 className="text-2xl font-light mb-4">Maintain high availability</h2>
            <div className="p-4 bg-[#232323] backdrop-blur">
              <p className="text-base md:text-lg">
                Ensures service continuity and resolution of network incidents autonomously, delivering high availability and keeping network operation costs at a minimum​.
              </p>
            </div>
            
            <div className="mt-4 relative">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                    ENI use case - Cell downtime anomaly
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#232323] border-[#444] w-[75vw] p-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <SheetHeader className="px-4 py-3 border-b border-[#444]">
                    <SheetTitle className="text-white">Erica - Cell Downtime Analysis</SheetTitle>
                  </SheetHeader>
                  <div className="w-full h-full">
                    <iframe 
                      src="http://localhost:9527/cs-test/apps/chat/?server=http://localhost:9527&service_id=cs-test/chatbot:elia-chatbot&assistant=Erica&query=Troubleshoot%20the%20top%20cell%20downtime%20issues%20in%20the%20last%2015%20mins"  
                      className="w-full h-[calc(100vh-70px)] border-0"
                      title="Electra Assistant"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  </div>
                </SheetContent>
              </Sheet>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-16 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            {activeTab === "ENI" ? (
              <HealingFlow />
            ) : (
              <div className="h-full flex items-center justify-center border border-gray-700 rounded-md p-8">
                <p className="text-xl text-gray-400">No content available for Ericsson Infrastructure Analyzer</p>
              </div>
            )}
          </div>

          <div className="col-span-3">
            <h2 className="text-2xl font-light mb-4">Mitigating cell downtime</h2>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                Knowledge Extraction and Planning
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                Data Retrieval from PM and FM data sources
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                Root Cause Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                Propose solutions
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent text-white border-white/20 hover:bg-white/10">
                Validate and implement solutions
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

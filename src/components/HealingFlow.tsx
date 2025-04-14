
import React, { useRef } from 'react';
import { Search, CheckCircle, Database, Brain, WrenchIcon, Network, ActivitySquare } from 'lucide-react';
import { useFlowAnimation } from '@/hooks/useFlowAnimation';

const HealingFlow: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Configure the animation with the number of dots per cycle
  const { cycle, loopCount } = useFlowAnimation({
    svgRef,
    pathId: 'outerFlowPath',
    dotConfig: {
      firstCycle: 15,  // Start with 15 dots
      secondCycle: 8,  // Reduce to 8 dots after implement
      thirdCycle: 3,   // Reduce to 3 dots after implement again
    }
  });

  return (
    <div className="relative h-full min-h-[680px] flex items-center justify-center mt-[-50px] mr-[-200px]">
      <svg 
        ref={svgRef}
        viewBox="0 0 1560 1248" 
        className="absolute w-[80%] h-[80%] top-0 px-0 mx-0 left-0 right-0"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Scaled path - made slightly smaller */}
        <path 
          d="M78,624 C78,343.5 507,234 780,234 
             C1053,234 1482,343.5 1482,624
             C1482,904.5 1053,1014 780,1014
             C507,1014 78,904.5 78,624 Z"
          className="purple-path"
          id="outerFlowPath"
          stroke="#BA8FFF"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Target image in center of flow */}
        <image 
          href="/lovable-uploads/e430b4d2-9c0b-4cc2-9adb-c2943dcea717.png" 
          x="667.5"  // Adjusted x to center the larger image
          y="486.5"  // Moved up more to create more space
          width="150" 
          height="150" 
          preserveAspectRatio="xMidYMid meet" 
        />
        
        {/* Text under the image */}
        <text 
          x="780"  // Center of the oval 
          y="720"  // Positioned below the image
          textAnchor="middle"  // Center the text horizontally
          fill="white"  // White text to match the design
          fontSize="48"  // Keep the previous font size
          fontWeight="300"  // Light font weight
        >
          Autonomous downtime resolution at cell level
        </text>
        
        {/* 1. Incident Detection */}
        <g className="stage-node" transform="translate(78, 624)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <Search className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Detection</text>
        </g>
        
        {/* 2. Knowledge Extraction */}
        <g className="stage-node" transform="translate(280, 310)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Knowledge</text>
        </g>
        
        {/* 3. Data Retrieval */}
        <g className="stage-node" transform="translate(780, 234)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <Database className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Data</text>
        </g>
        
        {/* 4. Root Cause Analysis */}
        <g className="stage-node" transform="translate(1280, 310)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <Network className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Root cause</text>
        </g>
        
        {/* 5. Propose Mitigation Action */}
        <g className="stage-node" transform="translate(1482, 624)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Propose</text>
        </g>
        
        {/* 6. Implement Mitigation */}
        <g className="stage-node" transform="translate(1280, 938)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <WrenchIcon className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Implement</text>
        </g>
        
        {/* 7. Monitor */}
        <g className="stage-node" transform="translate(280, 938)">
          <circle r="60" fill="#222222" stroke="#FFFFFF" strokeWidth="2" />
          <foreignObject x="-35" y="-35" width="70" height="70">
            <div className="w-full h-full flex items-center justify-center">
              <ActivitySquare className="w-10 h-10 text-white" />
            </div>
          </foreignObject>
          <text x="0" y="125" textAnchor="middle" fill="white" className="text-xl font-medium">Monitor</text>
        </g>
      </svg>
    </div>
  );
};

export default HealingFlow;

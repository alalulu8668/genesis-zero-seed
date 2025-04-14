
import { useEffect, useState, RefObject } from 'react';
import { calculateDotPositions, createDotElement } from '@/utils/flowAnimationUtils';

interface UseFlowAnimationProps {
  svgRef: RefObject<SVGSVGElement>;
  pathId: string;
  dotConfig: {
    firstCycle: number;
    secondCycle: number;
    thirdCycle: number;
  };
  animationDuration?: number;
  dotStaggerDelay?: number;
}

export const useFlowAnimation = ({
  svgRef,
  pathId,
  dotConfig,
  animationDuration = 20000,
  dotStaggerDelay = 500
}: UseFlowAnimationProps) => {
  // Ensure hooks are always called in the same order
  const [cycle, setCycle] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  
  useEffect(() => {
    console.log('Flow animation initialized');
    const MAX_LOOPS = 1000; // Set the maximum number of loops to 1000
    
    // Get the path element
    const pathElement = document.getElementById(pathId);
    if (!pathElement) {
      console.error('Path element not found');
      return;
    }
    
    // Properly cast to SVGPathElement using a two-step casting approach
    const path = pathElement as unknown as SVGPathElement;
    
    // Get path length for calculations
    const pathLength = path.getTotalLength();
    
    let animationTimeout: number | undefined;
    
    // Initialize the first set of dots
    startAnimation(dotConfig.firstCycle, 0, 0);
    
    function startAnimation(numDots: number, cycleNum: number, currentLoopCount: number) {
      console.log(`Starting cycle ${cycleNum} with ${numDots} dots (loop ${currentLoopCount + 1}/${MAX_LOOPS})`);
      setCycle(cycleNum);
      setLoopCount(currentLoopCount);
      
      // Check if we've reached the maximum number of loops
      if (currentLoopCount >= MAX_LOOPS) {
        console.log('Animation completed after reaching maximum loop count');
        return;
      }
      
      // Remove any existing dots
      const existingDots = document.querySelectorAll('.flow-dot');
      existingDots.forEach(dot => dot.remove());
      
      // Create new dots
      const dotPositions = calculateDotPositions(numDots, pathLength);
      
      // Create SVG namespace element
      const svgNS = "http://www.w3.org/2000/svg";
      
      // Track completed dots to know when the entire animation cycle is finished
      let completedDots = 0;
      
      // Create and add dots to the SVG
      dotPositions.forEach((position, index) => {
        const circle = createDotElement(svgRef, svgNS);
        
        // Get point at position
        const point = path.getPointAtLength(position);
        circle.setAttribute("cx", point.x.toString());
        circle.setAttribute("cy", point.y.toString());
        
        // Animate the dot
        let startTime: number | null = null;
        
        // Implementation position is around 75% of the path
        const implementPosition = 0.75 * pathLength;
        
        function animateDot(timestamp: number) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = elapsed / animationDuration;
          
          if (progress >= 1) {
            // Dot completed one cycle
            circle.remove();
            completedDots++;
            
            // If this was the last dot of the cycle, start the next cycle
            if (completedDots >= numDots) {
              handleCycleComplete(cycleNum, currentLoopCount);
            }
            return;
          }
          
          // Calculate current position along the path
          let currentPos = progress * pathLength;
          
          // Check if dot has passed the implement stage in the current cycle
          if (cycleNum === 0 && currentPos > implementPosition && currentPos < implementPosition + 0.1 * pathLength) {
            // In first cycle, dots reduce to secondCycle after implement stage
            if (index >= dotConfig.secondCycle) {
              circle.remove();
              completedDots++;
              if (completedDots >= numDots) {
                handleCycleComplete(cycleNum, currentLoopCount);
              }
              return;
            }
          } else if (cycleNum === 1 && currentPos > implementPosition && currentPos < implementPosition + 0.1 * pathLength) {
            // In second cycle, dots reduce to thirdCycle after implement stage
            if (index >= dotConfig.thirdCycle) {
              circle.remove();
              completedDots++;
              if (completedDots >= numDots) {
                handleCycleComplete(cycleNum, currentLoopCount);
              }
              return;
            }
          } else if (cycleNum === 2 && currentPos > implementPosition && currentPos < implementPosition + 0.1 * pathLength) {
            // In third cycle, all dots disappear after implement stage
            circle.remove();
            completedDots++;
            if (completedDots >= numDots) {
              handleCycleComplete(cycleNum, currentLoopCount);
            }
            return;
          }
          
          // Update dot position
          const point = path.getPointAtLength(currentPos);
          circle.setAttribute("cx", point.x.toString());
          circle.setAttribute("cy", point.y.toString());
          
          // Continue animation
          requestAnimationFrame(animateDot);
        }
        
        // Start animation with a staggered delay
        setTimeout(() => {
          requestAnimationFrame(animateDot);
        }, index * dotStaggerDelay); // Stagger the start of each dot
      });
      
      setAnimationStarted(true);
    }
    
    function handleCycleComplete(cycleNum: number, currentLoopCount: number) {
      // Clear any existing timeouts to prevent multiple restarts
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      
      let nextNumDots;
      let nextCycle;
      let nextLoopCount = currentLoopCount;
      
      if (cycleNum === 0) {
        // First cycle -> second cycle
        nextNumDots = dotConfig.secondCycle;
        nextCycle = 1;
        console.log(`Transitioning to cycle ${nextCycle} with ${nextNumDots} dots`);
        animationTimeout = window.setTimeout(() => {
          startAnimation(nextNumDots, nextCycle, nextLoopCount);
        }, 500) as unknown as number;
      } else if (cycleNum === 1) {
        // Second cycle -> third cycle
        nextNumDots = dotConfig.thirdCycle;
        nextCycle = 2;
        console.log(`Transitioning to cycle ${nextCycle} with ${nextNumDots} dots`);
        animationTimeout = window.setTimeout(() => {
          startAnimation(nextNumDots, nextCycle, nextLoopCount);
        }, 500) as unknown as number;
      } else {
        // After third cycle, increment loop counter and restart with firstCycle after 2 seconds
        nextLoopCount = currentLoopCount + 1;
        console.log(`Cycle ${cycleNum} complete. Scheduling restart for loop ${nextLoopCount + 1}/${MAX_LOOPS} in 2 seconds`);
        animationTimeout = window.setTimeout(() => {
          console.log(`RESTARTING animation from first cycle (loop ${nextLoopCount + 1}/${MAX_LOOPS})`);
          startAnimation(dotConfig.firstCycle, 0, nextLoopCount);
        }, 2000) as unknown as number;
      }
    }
    
    // Cleanup function
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      const dots = document.querySelectorAll('.flow-dot');
      dots.forEach(dot => dot.remove());
    };
  }, [pathId, svgRef, dotConfig, animationDuration, dotStaggerDelay]);

  return { cycle, animationStarted, loopCount };
};

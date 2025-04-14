
import { RefObject } from 'react';

/**
 * Calculate evenly spaced dot positions along a path
 */
export const calculateDotPositions = (numDots: number, pathLength: number) => {
  const positions = [];
  const gap = pathLength / numDots;
  
  for (let i = 0; i < numDots; i++) {
    positions.push(i * gap);
  }
  
  return positions;
};

/**
 * Create a dot element and append it to the SVG
 */
export const createDotElement = (
  svgRef: RefObject<SVGSVGElement>,
  svgNS: string,
  dotRadius: number = 12
) => {
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("class", "flow-dot");
  circle.setAttribute("r", dotRadius.toString());
  circle.setAttribute("fill", "#222222");
  circle.setAttribute("stroke", "#BA8FFF");
  circle.setAttribute("stroke-width", "2");
  
  // Append to SVG
  svgRef.current?.appendChild(circle);
  
  return circle;
};

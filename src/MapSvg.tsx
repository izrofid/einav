import React, { useMemo } from 'react';

interface SvgIconProps {
  getPathClassName?: (pathId: string) => string;
  getPathStyle?: (pathId: string) => React.HTMLAttributes<SVGPathElement> & { style?: React.CSSProperties };
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  getPathStyle = () => ({ style: {} }),
  getPathClassName = () => ""
}) => {
  // Original SVG content
  const svgContent = useMemo(() => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Hoen_Map"
      viewBox="0 0 1280 791.91"
    >
      <path
        id="MAP_LITTLEROOT_TOWN"
        fill="transparent"
        d="M199.17 521.44h40.05v36.81h-40.05z"
      ></path>
      <path
        id="MAP_OLDALE_TOWN"
        fill="transparent"
        d="M199.3 438.3h39.77v39.83H199.3z"
      ></path>
      <path
        id="MAP_VERDANTRUF_TOWN"
        fill="transparent"
        d="M199.08 318.9h39.97v39.7h-39.97z"
      ></path>
      <path
        id="MAP_PACIFIDLOG_TOWN"
        fill="transparent"
        d="M716.95 478.13H757V518h-40.05z"
      ></path>
      <path
        id="MAP_DEWFORD_TOWN"
        fill="transparent"
        d="M119.53 637.41h39.88v39.93h-39.88z"
      ></path>
      <path
        id="MAP_FALALRBOR_TOWN"
        fill="transparent"
        d="M160.11 79.59h38.96v40.16h-38.96z"
      ></path>
      <path
        id="MAP_PETALBURG_CITY"
        fill="transparent"
        d="M79.68 437.94h40.24v40.24H79.68z"
      ></path>
      <path
        id="MAP_RUSTBORO_CITY"
        fill="transparent"
        d="M39.41 278.74H79.4v79.4H39.41z"
      ></path>
      <path
        id="MAP_SLATEPORT_CITY"
        fill="transparent"
        d="M358.61 478.18h39.84v79.85h-39.84z"
      ></path>
      <path
        id="MAP_EVER_GRANDE_CITY"
        fill="transparent"
        d="M1115.2 398.29h39.84v79.87h-39.84z"
      ></path>
      <path
        id="MAP_LILLYCOVE_CITY"
        fill="transparent"
        d="M775.75 178.21h40.16v81.42h-40.16z"
        transform="rotate(-90 795.83 218.92)"
      ></path>
      <path
        id="MAP_MOSSDEEP_CITY"
        fill="transparent"
        d="M1015.99 258.93h40.05v79.74h-40.05z"
        transform="rotate(-90 1036.01 298.8)"
      ></path>
      <path
        id="MAP_MAUVILLE_CITY"
        fill="transparent"
        d="M379.06 298.33h39.76v80.74h-39.76z"
        transform="rotate(-90 398.94 338.7)"
      ></path>
      <path
        id="MAP_FORTREE_CITY"
        fill="transparent"
        d="M517.98 79.69h39.95v39.95h-39.95z"
      ></path>
      <path
        id="MAP_ROUTE110"
        fill="transparent"
        d="M358.57 358.58h39.88v119.55h-39.88z"
      ></path>
      <path
        id="MAP_ROUTE109"
        fill="transparent"
        d="M358.64 558.25h39.81v79.16h-39.81z"
      ></path>
      <path
        id="MAP_ROUTE105"
        fill="transparent"
        d="M39.83 461.22h39.86v136.26H39.83z"
      ></path>
      <path
        id="MAP_ROUTE111"
        fill="transparent"
        d="M358.59 119.75h39.9V318.9h-39.9z"
      ></path>
      <path
        id="MAP_ROUTE104"
        fill="transparent"
        d="M39.41 358.15h40.28v103.44H39.41z"
      ></path>
      <path
        id="MAP_ROUTE115"
        fill="transparent"
        d="M39.41 159.08H79.4v119.66H39.41z"
      ></path>
      <path
        id="MAP_ROUTE122"
        fill="transparent"
        d="M677.24 239h39.94v79.65h-39.94z"
      ></path>
      <path
        id="MAP_ROUTE119"
        fill="transparent"
        d="M478.13 79.7h39.84v239.06h-39.84z"
      ></path>
      <path
        id="MAP_ROUTE126"
        fill="transparent"
        d="M836.86 318.55h119.28v119.98H836.86z"
        transform="rotate(-90 896.495 378.545)"
      ></path>
      <path
        id="MAP_ROUTE127"
        fill="transparent"
        d="M956.52 318.86h119.36v119.36H956.52z"
      ></path>
      <path
        id="MAP_ROUTE120"
        fill="transparent"
        d="M557.82 79.69h39.89v119.15h-39.89z"
      ></path>
      <path
        id="MAP_ROUTE103"
        fill="transparent"
        d="M259.02 338.73h39.83V498h-39.83z"
        transform="rotate(-90 278.935 418.365)"
      ></path>
      <path
        id="MAP_ROUTE116"
        fill="transparent"
        d="M139.15 219h40.16v159.66h-40.16z"
        transform="rotate(-90 159.225 298.825)"
      ></path>
      <path
        id="MAP_ROUTE117"
        fill="transparent"
        d="M278.88 278.93h39.87v119.52h-39.87z"
        transform="rotate(-90 298.815 338.685)"
      ></path>
      <path
        id="MAP_ROUTE102"
        fill="transparent"
        d="M139.33 418.17h40.16v79.79h-40.16z"
        transform="rotate(-90 159.41 458.06)"
      ></path>
      <path
        id="MAP_ROUTE112"
        fill="transparent"
        d="M298.74 179.25h39.97v79.73h-39.97z"
        transform="rotate(-90 318.725 219.115)"
      ></path>
      <path
        id="MAP_ROUTE106"
        fill="transparent"
        d="M79.65 557.65h39.93v119.58H79.65z"
        transform="rotate(-90 99.62 617.44)"
      ></path>
      <path
        id="MAP_ROUTE107"
        fill="transparent"
        d="M206.27 590.55h39.93v133.66h-39.93z"
        transform="rotate(-90 226.24 657.38)"
      ></path>
      <path
        id="MAP_ROUTE108"
        fill="transparent"
        d="M325.79 604.69h39.93v105.38h-39.93z"
        transform="rotate(-90 345.755 657.375)"
      ></path>
      <path
        id="MAP_SOOTOPOLIS_CITY"
        fill="transparent"
        d="M876.56 358.59h39.88v39.7h-39.88z"
      ></path>
      <path
        id="MAP_ROUTE125"
        fill="transparent"
        d="M996.26 199.17h79.48v79.72h-79.48z"
        transform="rotate(-90 1036 239.03)"
      ></path>
      <path
        id="MAP_ROUTE124"
        fill="transparent"
        d="M856.58 179.26h119.53v159.6H856.58z"
        transform="rotate(-90 916.34 259.06)"
      ></path>
      <path
        id="MAP_ROUTE128"
        fill="transparent"
        d="M1015.93 378.85h39.86v158.68h-39.86z"
        transform="rotate(-90 1035.86 458.19)"
      ></path>
      <path
        id="MAP_ROUTE130"
        fill="transparent"
        d="M879.5 448.52h39.87v99.08H879.5z"
        transform="rotate(-90 899.435 498.065)"
      ></path>
      <path
        id="MAP_ROUTE129"
        fill="transparent"
        d="M992.01 435.12h39.82v125.89h-39.82z"
        transform="rotate(-90 1011.92 498.06)"
      ></path>
      <path
        id="MAP_ROUTE134"
        fill="transparent"
        d="M441.08 435.49h39.87v125.14h-39.87z"
        transform="rotate(-90 461.015 498.065)"
      ></path>
      <path
        id="MAP_ROUTE133"
        fill="transparent"
        d="M556.53 445.18h39.87v105.77h-39.87z"
        transform="rotate(-90 576.465 498.065)"
      ></path>
      <path
        id="MAP_ROUTE132"
        fill="transparent"
        d="M653.22 454.26h39.87v87.6h-39.87z"
        transform="rotate(-90 673.155 498.065)"
      ></path>
      <path
        id="MAP_ROUTE131"
        fill="transparent"
        d="M783.51 451.62h39.87v92.89h-39.87z"
        transform="rotate(-90 803.45 498.06)"
      ></path>
      <path
        id="MAP_ROUTE123"
        fill="transparent"
        d="M600.47 241.87h39.82v193.6h-39.82z"
        transform="rotate(-90 620.38 338.67)"
      ></path>
      <path
        id="MAP_ROUTE118"
        fill="transparent"
        d="M461.54 296.53h39.82v84.27h-39.82z"
        transform="rotate(-90 481.45 338.67)"
      ></path>
      <path
        id="MAP_ROUTE121"
        fill="transparent"
        d="M636.39 120.27h40.16v197.31h-40.16z"
        transform="rotate(-90 656.465 218.925)"
      ></path>
      <path
        id="MAP_ROUTE113"
        fill="transparent"
        d="M278.67-.01h40.16v199.37h-40.16z"
        transform="rotate(-90 298.755 99.675)"
      ></path>
      <path
        id="MAP_ROUTE101"
        fill="transparent"
        d="M199.23 478.14h39.83v44.3h-39.83z"
      ></path>
      <path
        id="MAP_ROUTE114"
        fill="transparent"
        d="M160.11 79.59v39.78h-40.35v80.89H79.4V79.59z"
      ></path>
      <path
        id="MAP_LAVARIDGE_TOWN"
        fill="transparent"
        d="M239.05 199.29h39.81v39.81h-39.81z"
      ></path>
    </svg>
  ), []);

  // Process the SVG to add styles and classNames
  const processedSvg = useMemo(() => {
    // Clone the SVG element
    const svg = React.cloneElement(svgContent, {}, 
      // Map through all children (paths) and add styles and classes
      React.Children.map(svgContent.props.children, child => {
        if (child.type === 'path' && child.props.id) {
          // Get styles and other attributes from getPathStyle
          const pathProps = getPathStyle(child.props.id);
          
          // Get className from getPathClassName
          const className = getPathClassName(child.props.id);
          
          // Separate style properties from custom attributes
          const { style, ...otherProps } = pathProps;
          
          // Apply both styling and any other attributes (like data-selected)
          return React.cloneElement(child, {
            ...otherProps,
            className,
            style: style || pathProps, // Fallback to using all props as style if no separate style key
          });
        }
        return child;
      })
    );
    
    return svg;
  }, [svgContent, getPathStyle, getPathClassName]);

  return processedSvg;
};

export default SvgIcon;

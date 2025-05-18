import SvgIcon from "../MapSvg";
import hoennMap from "@/assets/hoenn_map_clean.png";
import { useMapStore } from "../stores/mapStore";
import { IoCloseSharp } from "react-icons/io5";

interface ClickableMapHoennProps {
  // Optional callback when a region is clicked
  onRegionClick?: (regionId: string | null) => void;
  // Optional custom width, default is 50%
  width?: string;
}

const ClickableMapHoenn: React.FC<ClickableMapHoennProps> = ({
  onRegionClick,
  width = "100%",
}) => {
  // Use the Zustand store instead of local state
  const { selectedRegionId, setSelectedRegion, clearSelection } = useMapStore();

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (target.tagName.toLowerCase() === "path" && target.id) {
      // Update the selection in the store
      setSelectedRegion(target.id);

      // Call the optional callback if provided
      if (onRegionClick) {
        onRegionClick(target.id);
      }
    }
  };

  // Use the selectedRegionId from the store for styling
  const getPathStyle = (pathId: string) => {
    const isSelected = selectedRegionId === pathId;

    // Minimal inline styles (we'll use Tailwind classes instead)
    return {
      "data-selected": isSelected ? "true" : "false",
      style: {
        cursor: "pointer",
      },
    } as React.HTMLAttributes<SVGPathElement> & { style?: React.CSSProperties };
  };

  // Generate Tailwind classes for paths
  const getPathClassName = (pathId: string) => {
    const isSelected = selectedRegionId === pathId;

    // Base classes that apply to all paths
    let classes = "transition-all duration-200 ease-in-out";

    // Add classes based on selection state
    if (isSelected) {
      // Selected path - purple fill, black stroke
      classes +=
        " fill-orange-600/70 stroke-black stroke-[4px] hover:stroke-[5px] hover:brightness-110";
    } else {
      // Unselected path - transparent by default, white stroke on hover
      classes += " fill-transparent hover:stroke-white/60 hover:stroke-[1.5px]";
    }

    return classes;
  };

  // All styling is handled by Tailwind classes

  return (
    <>
      {/* Responsive container - handles the overall width */}
      <div style={{ width }} className="max-w-[1280px]">
        {/* Map container with fixed aspect ratio */}
        <div
          className="relative w-full border-3 border-emerald-600 rounded-md overflow-hidden"
          style={{ aspectRatio: "1280/792" }}>
          <div 
            className="absolute top-2 z-100 cursor-pointer right-2 text-gray-500 hover:text-rose-500 active:text-fuchsia-500 transition-colors"
            onClick={() => {
              clearSelection();
              if (onRegionClick) {
                onRegionClick(null);
              }
            }}>
            <IoCloseSharp size={20} />
          </div>
          {/* Background map image */}
          <img
            src={hoennMap}
            alt="Hoenn Region"
            className="w-full h-full object-cover"
          />

          {/* SVG overlay - perfectly aligned with same dimensions */}
          <svg
            onClick={handleSvgClick}
            className="absolute left-0 top-0 w-full h-full z-50"
            viewBox="0 0 1280 791.91"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <SvgIcon
              getPathStyle={getPathStyle}
              getPathClassName={getPathClassName}
            />
          </svg>
        </div>
      </div>

      {/* Selected display - only shown if no external handler is provided */}
      {selectedRegionId && !onRegionClick && (
        <p className="text-gray-200 mt-4">
          You clicked: <code>{selectedRegionId}</code>
        </p>
      )}
    </>
  );
};

export default ClickableMapHoenn;

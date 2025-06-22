import React from 'react';
import ClickableMapHoenn from "./ClickableMapHoenn";
import { useMapStore } from "../stores/mapStore";
import type { RegionData } from "../stores/mapStore";

interface MapSelectorProps {
  width?: string;
  // New prop for optional custom region data handler
  onRegionDataChange?: (regionId: string | null, regionData: RegionData | null) => void;
}

const MapSelector: React.FC<MapSelectorProps> = ({ 
  width = "100%", 
  onRegionDataChange 
}) => {

  const { setRegionData } = useMapStore();

  const handleRegionClick = (regionId: string | null) => {
    if (regionId === null) {
      setRegionData(null);
      onRegionDataChange?.(null, null);
      return;
    }
    
    // Generate region data based on selection NEED TO CHANGE LATER
    const mockData: RegionData = {
      name: regionId.replace('MAP_', '').replace(/_/g, ' '),
      description: `Region information for ${regionId}`,
      visited: Math.random() > 0.5, // Just an example field
    };
    
    // Update both the store and parent component
    setRegionData(mockData);
    onRegionDataChange?.(regionId, mockData);
  };

  return (
    <div className="flex flex-col">
      <ClickableMapHoenn 
        onRegionClick={handleRegionClick}
        width={width}
      />
    </div>
  );
};

export default MapSelector;
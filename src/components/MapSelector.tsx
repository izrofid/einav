import React, { useEffect } from 'react';
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

  const { selectedRegionId, regionData, setRegionData } = useMapStore();
  
  // Effect to monitor region data changes
  useEffect(() => {
    if (selectedRegionId === null) {
      // When selection is cleared
      onRegionDataChange?.(null, null);
    } else if (selectedRegionId && regionData) {
      // When region is selected
      onRegionDataChange?.(selectedRegionId, regionData);
    }
  }, [selectedRegionId, regionData, onRegionDataChange]);

  const handleRegionClick = (regionId: string | null) => {
    
    if (regionId === null) {
      setRegionData(null);
      return;
    }
    
    // Generate region data based on selection NEED TO CHANGE LATER
    const mockData: RegionData = {
      name: regionId.replace('MAP_', '').replace(/_/g, ' '),
      description: `Region information for ${regionId}`,
      visited: Math.random() > 0.5, // Just an example field
    };
    
    // Update the store with the new region data
    setRegionData(mockData);
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
import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useMapStore } from "../stores/mapStore";
import type { RegionData } from "../stores/mapStore";
import mapLocations from "@/utils/generateMapLocations";

interface MapComboboxProps {
  width?: string;
  onRegionDataChange?: (
    regionId: string | null,
    regionData: RegionData | null
  ) => void;
}

const MapCombobox: React.FC<MapComboboxProps> = ({ onRegionDataChange }) => {
  const { selectedRegionId, setRegionData, setSelectedRegion } = useMapStore();
  const [query, setQuery] = useState("");

  const filteredLocations =
    query === ""
      ? mapLocations
      : mapLocations.filter(([, name]) => {
          return name.toLowerCase().includes(query.toLowerCase());
        });

  const selectedLocation = selectedRegionId
    ? mapLocations.find(([id]) => id === selectedRegionId) ?? null
    : null;

  const handleSelect = (location: [string, string]) => {
    const [regionId] = location;
    const mockData: RegionData = {
      name: location[1],
      description: `Region information for ${location[1]}`,
      visited: Math.random() > 0.5,
    };
    setSelectedRegion(regionId);
    setRegionData(mockData);
    onRegionDataChange?.(regionId, mockData);
  };

  return (
    <Combobox
      value={selectedLocation}
      onChange={handleSelect}
      onClose={() => setQuery("")}
      immediate={true}
    >
      <ComboboxInput
        className="w-full bg-neutral-800/30 border-1 border-neutral-600 px-4 py-3 my-2 
  text-white rounded-md focus:outline-none focus:border-b-2 focus:border-blue-500"
        displayValue={(location: [string, string] | null) =>
          location ? location[1] : ""
        }
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Location selector"
        placeholder="Select a location..."
      />
      <ComboboxOptions className="w-full bg-neutral-800 border rounded mt-1 max-h-60 overflow-auto empty:hidden">
        {filteredLocations.map((location) => (
          <ComboboxOption
            key={location[0]}
            value={location}
            className="px-3 py-2 cursor-pointer data-active:bg-blue-400 data-active:text-gray-100 text-gray-300"
          >
            {location[1]}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default MapCombobox;

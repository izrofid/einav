import { create } from 'zustand';

// Define the region data interface with explicit types
export interface RegionData {
  name: string;
  description: string;
  visited: boolean;
}

// Define the store state type
interface MapStore {
  // Currently selected region ID
  selectedRegionId: string | null;
  // Region data with explicit typing
  regionData: RegionData | null;
  
  // Actions
  setSelectedRegion: (id: string | null) => void;
  clearSelection: () => void;
  // Method to store region data with explicit typing
  setRegionData: (data: RegionData | null) => void;
}

// Create the store
export const useMapStore = create<MapStore>((set) => ({
  // Initial state
  selectedRegionId: null,
  regionData: null,
  
  // Actions
  setSelectedRegion: (id: string | null) => set({ selectedRegionId: id }),
  clearSelection: () => set({ selectedRegionId: null, regionData: null }),
  setRegionData: (data: RegionData | null) => set({ regionData: data }),
}));

// Export selector functions for performance optimization
export const useSelectedRegion = () => useMapStore((state) => state.selectedRegionId);
export const useRegionData = () => useMapStore((state) => state.regionData);

import React from 'react';
import Sidebar from './Sidebar';
import MapSelector from './MapSelector';
import LocationPokemonList from './LocationPokemonList';
import pokeballIcon from '../assets/pokeball.svg';
import type { RegionData } from '../stores/mapStore';
import edgeStyles from './Edge.module.css';

interface DesktopLayoutProps {
  currentRegionInfo: { id: string; data: RegionData } | null;
  isEdgeBrowser: boolean;
  onRegionDataChange: (regionId: string | null, regionData: RegionData | null) => void;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ currentRegionInfo, isEdgeBrowser, onRegionDataChange }) => {
  return (
    <div className="flex select-none bg-neutral-950 min-h-screen">
      <Sidebar>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Dex</span>Nav
          </h1>
          <img src={pokeballIcon} alt="Pokéball" className="h-6 w-6" />
        </div>
        <div className="px-2">
          <MapSelector width="" onRegionDataChange={onRegionDataChange} />
        </div>
      </Sidebar>
      <main className="flex flex-col w-full items-center p-5" style={{ marginLeft: "var(--sidebar-width)" }}>
        {currentRegionInfo && (
          <div
            className={`p-4 bg-neutral-800 rounded-lg text-white h-[95dvh] overflow-y-auto mt-0 pt-0 w-full scrollbar-themed ${isEdgeBrowser ? edgeStyles.edgeScrollbar : ''}`}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#525252 #262626',
              msOverflowStyle: 'auto'
            }}
          >
            <LocationPokemonList />
          </div>
        )}
      </main>
    </div>
  );
};

export default DesktopLayout;

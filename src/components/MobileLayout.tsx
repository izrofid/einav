import React from 'react';
import MapSelector from './MapSelector';
import LocationPokemonList from './LocationPokemonList';
import pokeballIcon from '@/assets/pokeball.svg'
import type { RegionData } from '../stores/mapStore';
import MapCombobox from './MapCombobox';

interface MobileLayoutProps {
  onRegionDataChange: (regionId: string | null, regionData: RegionData | null) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ onRegionDataChange }) => {
  return (
    <div className="sm:hidden flex flex-col h-screen bg-neutral-800">
      {/* Header with MapSelector */}
      <div className="flex flex-col p-4 bg-neutral-800">
        <div className="flex text-lg font-bold text-white items-center justify-between mb-3 px-1">
          <div className=''><span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Dex</span>Nav</div>
          <img src={pokeballIcon} alt="Pokéball" className="h-6 w-6" />
        </div>
        <MapSelector width="" onRegionDataChange={onRegionDataChange} />
        <MapCombobox/>
      </div>
      {/* Content with Pokémon list */}
      <div className="flex-1 overflow-y-auto px-4 scrollbar-themed">
        <LocationPokemonList />
      </div>
    </div>
  );
};

export default MobileLayout;

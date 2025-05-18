import React, { useMemo } from 'react';
import { useMapStore } from "../stores/mapStore";
import wildEncounters from "@/data/wildEncounters.json";
import speciesLabelMap from "@/data/speciesLabelMap.json";
import { getMethodName, getMethodColor } from "@/utils/locationsData";
import { getSpeciesName } from "@/utils/speciesData";

interface PokemonEncounter {
  map: string;
  base_label: string;
  method: string;
  rate: number;
  slot: number;
  min_level: number;
  max_level: number;
  mapName: string;
}

const LocationPokemonList: React.FC = () => {
  const { selectedRegionId } = useMapStore();

  // Get all Pokémon encounters for the selected location and extract map name
  const { pokemonInLocation, mapName } = useMemo(() => {
    if (!selectedRegionId) return { pokemonInLocation: [], mapName: "" };

    // Create a map to store unique Pokémon appearances at this location
    const pokemonEncountersBySpecies: Record<string, PokemonEncounter[]> = {};
    let locationName = "";
    
    // Loop through all species and their encounters in the wildEncounters data
    Object.entries(wildEncounters).forEach(([speciesLabel, encounters]) => {
      // Filter encounters to only those that match the selected location
      const locationEncounters = encounters.filter(
        (encounter: PokemonEncounter) => encounter.map === selectedRegionId
      );
      
      // If there are encounters at this location, add them to our map
      if (locationEncounters.length > 0) {
        // Extract the map name from the first encounter if we haven't yet
        if (!locationName && locationEncounters[0].mapName) {
          locationName = locationEncounters[0].mapName;
        }
        pokemonEncountersBySpecies[speciesLabel] = locationEncounters;
      }
    });
    
    return { pokemonInLocation: pokemonEncountersBySpecies, mapName: locationName };
  }, [selectedRegionId]);

  // No longer need the getSpeciesId function as we're using the mapping directly in the render

  if (!selectedRegionId) {
    return <div className="text-gray-400 text-center">Select a location to view Pokémon</div>;
  }

  // Check if there are any Pokémon in this location
  const hasPokemon = Object.keys(pokemonInLocation).length > 0;

  if (!hasPokemon) {
    return <div className="text-gray-400 text-center">No Pokémon data available for this location</div>;
  }

  // Group encounters by method type (Walk, Surf, Fishing, Rock Smash)
  const getGroupedEncounters = () => {
    // Create groups for the different method types
    const groups = {
      walk: new Map<string, {speciesId: number, encounters: PokemonEncounter[]}>(),
      surf: new Map<string, {speciesId: number, encounters: PokemonEncounter[]}>(),
      fishing: new Map<string, {speciesId: number, encounters: PokemonEncounter[]}>(),
      rockSmash: new Map<string, {speciesId: number, encounters: PokemonEncounter[]}>(),
    };
    
    // Sort all encounters into their method groups
    Object.entries(pokemonInLocation).forEach(([speciesLabel, encounters]) => {
      const speciesId = speciesLabelMap[speciesLabel as keyof typeof speciesLabelMap] || 0;
      
      encounters.forEach(encounter => {
        let groupKey = 'walk';
        
        if (encounter.method === 'surf') {
          groupKey = 'surf';
        } else if (encounter.method === 'fishing_mons') {
          groupKey = 'fishing';
        } else if (encounter.method === 'walk') {
          groupKey = 'walk';
        } else if (encounter.method === 'Rock Smash') {
          groupKey = 'rockSmash';
        } else {
          // For other methods, default to walk
          groupKey = 'walk';
        }
        
        // Initialize the map entry if it doesn't exist
        if (!groups[groupKey as keyof typeof groups].has(speciesLabel)) {
          groups[groupKey as keyof typeof groups].set(speciesLabel, {
            speciesId,
            encounters: []
          });
        }
        
        // Add this encounter to the relevant group
        groups[groupKey as keyof typeof groups].get(speciesLabel)?.encounters.push(encounter);
      });
    });
    
    return groups;
  };

  const groupedEncounters = getGroupedEncounters();
  
  // Render a group of Pokémon for a specific method type
  const renderMethodGroup = (methodType: 'walk' | 'surf' | 'fishing' | 'rockSmash', title: string, bgColor: string) => {
    const methodEntries = Array.from(groupedEncounters[methodType].entries());
    
    if (methodEntries.length === 0) {
      return null;
    }
    
    return (
      <div className="mb-6">
        <div 
          className="text-white font-semibold py-2 px-3 rounded-t-md flex items-center space-x-2"
          style={{ backgroundColor: bgColor }}
        >
          <span className="text-lg">{title}</span>
        </div>
        
        <div className="bg-neutral-800 rounded-b-md overflow-hidden">
          <div className="divide-y divide-neutral-700">
            {methodEntries.map(([speciesLabel, { speciesId, encounters }]) => {
              const actualPokemonName = getSpeciesName(speciesId);
              const spriteUrl = `/sprites/front/${speciesId}.png`;
              
              return (
                <div key={speciesLabel} className="p-3">
                  <div className="flex items-center">
                    <img 
                      src={spriteUrl} 
                      alt={actualPokemonName} 
                      className="w-12 h-12 mr-3 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="text-white font-medium">{actualPokemonName}</div>
                    <div className="ml-auto text-right text-sm">
                      {encounters.map((encounter, idx) => {
                        const methodName = getMethodName(encounter.method, encounter.slot);
                        const methodColor = getMethodColor(encounter.method, encounter.slot);
                        
                        return (
                          <div key={idx} className="flex items-center justify-end mt-1 text-gray-300">
                            <span 
                              className="inline-block w-2 h-2 rounded-full mr-2"
                              style={{ backgroundColor: methodColor }}
                            ></span>
                            <span>{methodName}</span>
                            <span className="text-gray-400 ml-2">
                              Lv. {encounter.min_level}
                              {encounter.max_level !== encounter.min_level 
                                ? ` - ${encounter.max_level}` 
                                : ''}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-4">
      <div className="sticky top-0 z-10 bg-zinc-800 pb-2 mb-2 -mt-4 pt-4 -mx-4 px-4 shadow-md">
        <h2 className="text-xl font-semibold text-white">{mapName || "Unknown Location"}</h2>
        <p className="text-gray-400 text-sm mb-1">{mapName ? `Pokémon encounters in ${mapName}` : "Select a location to view Pokémon encounters"}</p>
      </div>
      
      {renderMethodGroup('walk', 'Land Encounters', '#2E8B57')}
      {renderMethodGroup('surf', 'Water Encounters', '#3148f5')}
      {renderMethodGroup('fishing', 'Fishing Encounters', '#4A90E2')}
      {renderMethodGroup('rockSmash', 'Rock Smash Encounters', '#D0021B')}
      
      {!groupedEncounters.walk.size && !groupedEncounters.surf.size && 
        !groupedEncounters.fishing.size && !groupedEncounters.rockSmash.size && (
        <div className="text-gray-400 text-center p-4 bg-neutral-800 rounded-md">
          No Pokémon data available for this location
        </div>
      )}
    </div>
  );
};

export default LocationPokemonList;

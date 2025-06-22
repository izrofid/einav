import wildEncounters from '../data/wildEncounters.json';

type MapLocation = [string, string]; // [mapId, mapName]

function generateMapLocations(): MapLocation[] {
    // Create a Map to store unique map locations
    const mapSet = new Map<string, string>();

    // Iterate through all species and their encounters
    Object.values(wildEncounters).forEach(speciesEncounters => {
        if (Array.isArray(speciesEncounters)) {
            speciesEncounters.forEach(encounter => {
                if (encounter.map && encounter.mapName) {
                    mapSet.set(encounter.map, encounter.mapName);
                }
            });
        }
    });

    // Convert the Map to an array of tuples
    const mapLocations: MapLocation[] = Array.from(mapSet.entries());

    // Sort by map ID for consistency
    mapLocations.sort(([a], [b]) => a.localeCompare(b));

    return mapLocations;
}

export const mapLocations = generateMapLocations();
export default mapLocations;

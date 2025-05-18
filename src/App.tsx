import React, { useState, useEffect } from 'react';
import type { RegionData } from './stores/mapStore';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

const App: React.FC = () => {
  const [currentRegionInfo, setCurrentRegionInfo] = useState<{ id: string; data: RegionData } | null>(null);
  const [isEdgeBrowser, setIsEdgeBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isEdge = userAgent.includes('Edge') || userAgent.includes('Edg');
    setIsEdgeBrowser(isEdge);
  }, []);

  const handleRegionDataChange = (regionId: string | null, regionData: RegionData | null) => {
    if (regionId && regionData) {
      setCurrentRegionInfo({ id: regionId, data: regionData });
    } else {
      setCurrentRegionInfo(null);
    }
  };

  return (
    <>
      <div className="hidden sm:block">
        <DesktopLayout
          currentRegionInfo={currentRegionInfo}
          isEdgeBrowser={isEdgeBrowser}
          onRegionDataChange={handleRegionDataChange}
        />
      </div>

      <div className="block sm:hidden h-screen">
        <MobileLayout onRegionDataChange={handleRegionDataChange} />
      </div>
    </>
  );
};

export default App;
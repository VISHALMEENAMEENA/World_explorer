import React, { useState, useEffect } from 'react';
import './World.css'; // Import your CSS styles

// Data structure
const worldData = {
  'Asia': {
    'India': ['🏙️ Delhi', '🎬 Mumbai', '💻 Bengaluru'],
    'Japan': ['🏯 Tokyo', '🎎 Kyoto', '🏮 Osaka'],
    'China': ['🏙️ Beijing', '🎋 Shanghai', '🐉 Guangzhou']
  },
  'Europe': {
    'France': ['🗼 Paris', '🍷 Lyon', '🌊 Marseille'],
    'Germany': ['🏛️ Berlin', '🍺 Munich', '🖼️ Hamburg'],
    'Italy': ['🏛️ Rome', '🎭 Venice', '🍕 Naples']
  },
  'Africa': {
    'Egypt': ['🏺 Cairo', '🐪 Luxor', '🔺 Alexandria'],
    'South Africa': ['🏙️ Cape Town', '🦁 Johannesburg', '🌊 Durban'],
    'Kenya': ['🦒 Nairobi', '🏔️ Mombasa', '🌿 Nakuru']
  },
  'Americas': {
    'USA': ['🗽 New York', '🌴 Los Angeles', '🎯 Chicago'],
    'Brazil': ['🏖️ Rio de Janeiro', '🏙️ São Paulo', '🌳 Brasília'],
    'Canada': ['🍁 Toronto', '🏔️ Vancouver', '❄️ Montreal']
  }
};

// Mock city data
const mockCityDatabase = {
  'Delhi': { description: 'Capital of India, rich history with monuments like Red Fort.', population: '19.8M' },
  'Tokyo': { description: 'Capital of Japan, high-tech city with traditional culture.', population: '37.4M' },
  'Paris': { description: 'Capital of France, famous for Eiffel Tower and art museums.', population: '11.0M' },
  'Cairo': { description: 'Capital of Egypt, home to the Pyramids of Giza.', population: '21.3M' },
  'New York': { description: 'Largest US city, financial hub with Statue of Liberty.', population: '18.8M' }
};

export default function WorldExplorer() {
  const [step, setStep] = useState('region'); // 'region', 'country', 'city', 'details'
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch city data when selected
  useEffect(() => {
    if (selectedCity) {
      const fetchData = async () => {
        setIsLoading(true);
        // Remove emoji from city name
        const cleanCityName = selectedCity.split(' ').slice(1).join(' ');
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setCityData(mockCityDatabase[cleanCityName] || {
          description: 'Information not available yet.',
          population: 'Unknown'
        });
        setIsLoading(false);
      };
      
      fetchData();
    }
  }, [selectedCity]);

  // Navigation handlers
  const selectRegion = (region) => {
    setSelectedRegion(region);
    setStep('country');
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setStep('city');
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setStep('details');
  };

  const goBack = () => {
    if (step === 'details') {
      setSelectedCity(null);
      setCityData(null);
      setStep('city');
    } else if (step === 'city') {
      setSelectedCountry(null);
      setStep('country');
    } else if (step === 'country') {
      setSelectedRegion(null);
      setStep('region');
    }
  };

  return (
    <div className="world-explorer">
      <h1>World Explorer 🌍</h1>
      
      {/* Region Selection */}
      {step === 'region' && (
        <div>
          <h2>Select a Region</h2>
          <div className="grid">
            {Object.keys(worldData).map(region => (
              <button key={region} onClick={() => selectRegion(region)}>
                {region}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Country Selection */}
      {step === 'country' && selectedRegion && (
        <div>
          <button onClick={goBack}>← Back</button>
          <h2>Countries in {selectedRegion}</h2>
          <div className="grid">
            {Object.keys(worldData[selectedRegion]).map(country => (
              <button key={country} onClick={() => selectCountry(country)}>
                {country}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* City Selection */}
      {step === 'city' && selectedCountry && (
        <div>
          <button onClick={goBack}>← Back</button>
          <h2>Cities in {selectedCountry}</h2>
          <div className="grid">
            {worldData[selectedRegion][selectedCountry].map(city => (
              <button key={city} onClick={() => selectCity(city)}>
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* City Details */}
      {step === 'details' && selectedCity && (
        <div>
          <button onClick={goBack}>← Back</button>
          <h2>{selectedCity}</h2>
          {isLoading ? (
            <p>Loading data...</p>
          ) : (
            cityData && (
              <div className="city-card">
                <p>{cityData.description}</p>
                <p><strong>Population:</strong> {cityData.population}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/city-info?name=${searchTerm}`);
      const data = await res.json();

      if (res.ok) {
        setCityInfo(data);
        setError('');
      } else {
        setCityInfo(null);
        setError(data.error || 'City not found');
      }
    } catch (err) {
      setCityInfo(null);
      setError('Server error');
    }
  };

  return (
    <div>
      <h2>Search City Info</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cityInfo && (
        <div>
          <h3>{cityInfo.city}, {cityInfo.country}</h3>
          <p>Temperature: {cityInfo.temperature}</p>
          <p>Pollution: {cityInfo.pollution}</p>
          <p>Cost of Living: {cityInfo.costOfLiving}</p>
          <p>Currency: {cityInfo.currency}</p>
          <p>Hotel Rent: {cityInfo.avgHotelRent}</p>
          <h4>Places to Visit:</h4>
          <ul>
            {cityInfo.placesToVisit.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
          <img src={cityInfo.imageURL} alt={cityInfo.city} width="300px" />
        </div>
      )}
    </div>
  );
};

export default Search;

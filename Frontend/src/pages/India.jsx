import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./India.css";

const regionCityMap = {
  North: [
    "🏙️ Delhi",
    "🌸 Jaipur",
    "🕌 Agra",
    "✨ Amritsar",
    "🏛️ Lucknow",
    "🛕 Varanasi",
    "🎨 Chandigarh",
    "🛶 Srinagar",
    "⛷️ Shimla",
    "🏞️ Dehradun",
  ],
  South: [
    "🌊 Chennai",
    "💻 Bengaluru",
    "💎 Hyderabad",
    "⚓ Kochi",
    "🛕 Madurai",
    "🛕 Vijayawada",
    "🚢 Visakhapatnam",
    "🛕 Trivandrum",
    "🏰 Mysuru",
    "🧵 Coimbatore",
  ],
  East: [
    "🌉 Kolkata",
    "🛕 Bhubaneswar",
    "🛕 Guwahati",
    "📜 Patna",
    "🏞️ Ranchi",
    "⛏️ Dhanbad",
    "✨ Cuttack",
    "🏭 Jamshedpur",
    "🍒 Muzaffarpur",
    "🌾 Purnia",
  ],
  West: [
    "🎬 Mumbai",
    "🧵 Ahmedabad",
    "🌴 Goa",
    "🎓 Pune",
    "🛶 Udaipur",
    "💎 Surat",
    "🎨 Vadodara",
    "🍊 Nagpur",
    "🍇 Nashik",
    "⚙️ Rajkot",
  ],
  Central: [
    "🏞️ Bhopal",
    "🥙 Indore",
    "🏰 Gwalior",
    "⛰️ Jabalpur",
    "🏭 Raipur",
    "🐅 Bilaspur",
    "🙏 Satna",
    "🏞️ Rewa",
    "🏞️ Sagar",
    "💵 Dewas",
  ],
  "North-East": [
    "☁️ Shillong",
    "🏞️ Imphal",
    "⛰️ Aizawl",
    "🧱 Itanagar",
    "🏔️ Gangtok",
    "🐦 Kohima",
    "🏛️ Agartala",
    "🫖 Dispur",
    "🏺 Dimapur",
    "🌳 Tura",
  ],
};

const India = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <main className="india-root" aria-labelledby="india-title">
      <header className="india-header">
        <h1 id="india-title">Explore India</h1>
      </header>

      {!selectedRegion ? (
        <>
          <h2 className="section-title">Select a Region</h2>
          <div className="region-list">
            {Object.keys(regionCityMap).map((region) => (
              <button
                key={region}
                className="region-button"
                onClick={() => setSelectedRegion(region)}
                aria-label={`Select ${region} region`}
              >
                {region}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <section className="city-section" aria-label={`${selectedRegion} Famous Cities`}>
            <div className="city-list">
              {regionCityMap[selectedRegion].map((city) => (
                <button
                  key={city}
                  className="city-button"
                  onClick={() => alert(`Clicked on ${city}`)} // Replace with fetch logic later
                  aria-label={`View details for ${city.replace(/^\w+\s/, '')}`} // Remove emoji for clarity
                  type="button"
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="city-section-footer">
              <button
                onClick={() => setSelectedRegion(null)}
                className="back-button"
                aria-label="Back to Regions"
              >
                <FaArrowLeft aria-hidden="true" /> Back to Regions
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default India;

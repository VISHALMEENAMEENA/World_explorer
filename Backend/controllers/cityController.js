import fs from 'fs';
import path from 'path';

export const getCityData = (req, res) => {
  const dataPath = path.join(process.cwd(), 'data', 'cityData.json');

  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to fetch city data' });
    }
    res.json(JSON.parse(jsonData));
  });
};

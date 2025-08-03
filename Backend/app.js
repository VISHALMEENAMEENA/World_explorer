const express = require('express');
const app = express();
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
import cityRoutes from './routes/cityRoutes.js';

app.use(cors());
app.use(express.json());

app.use('/api/city', cityRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

import express from 'express';
import { getCityData } from '../controllers/cityController.js';

const router = express.Router();

router.get('/cities', getCityData);

export default router;

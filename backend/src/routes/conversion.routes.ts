import { Router } from 'express';
import { convertCurrency, getConversions } from '../controllers/conversion.controller';

const router = Router();

// POST /api/convert - Converts a currency amount
router.post('/convert', convertCurrency);

// GET /api/conversions - Retrieves conversion history
router.get('/conversions', getConversions);

export default router;

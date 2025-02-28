import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY || '';
export const CURRENCY_API_URL = process.env.CURRENCY_API_URL || 'https://api.freecurrencyapi.com/v1/latest';
export const ALLOWED_CURRENCIES = process.env.ALLOWED_CURRENCIES || 'USD,EUR,CAD,JPY,AUD'; // Default if not set
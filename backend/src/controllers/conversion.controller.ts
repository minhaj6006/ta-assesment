import { Request, Response } from 'express';
import axios from 'axios';
import { ALLOWED_CURRENCIES, CURRENCY_API_KEY, CURRENCY_API_URL } from '../config';

// In-memory storage for conversion logs
let conversionLogs: any[] = [];

export const convertCurrency = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { from, to, amount } = req.body;
    const allowedCurrencies = ALLOWED_CURRENCIES.split(',').map(c => c.trim().toUpperCase());

    if (!from || typeof from !== 'string' || !allowedCurrencies.includes(from.toUpperCase())) {
        return res.status(422).json({ error: "Invalid base_currency" });
    }
    if (!to || typeof to !== 'string' || !allowedCurrencies.includes(to.toUpperCase())) {
        return res.status(422).json({ error: "Invalid currencies" });
    }
    if (amount === undefined || isNaN(amount)) {
        return res.status(422).json({ error: "Wrong format: value" });
    }

    try {
        const response = await axios.get(CURRENCY_API_URL, {
            params: { base_currency: from.toUpperCase(), currencies: to.toUpperCase() },
            headers: { 'apikey': CURRENCY_API_KEY }
        });
        const rateData = response.data.data[to.toUpperCase()];
        if (rateData === undefined) {
            return res.status(400).json({ error: 'Currency rate not found' });
        }
        const rate = typeof rateData === 'object' ? rateData.value : rateData;
        const convertedAmount = amount * rate;

        const log = {
            date: new Date(),
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            amount,
            convertedAmount,
            rate
        };
        conversionLogs.push(log);

        return res.json({ convertedAmount, rate });
    } catch (error) {
        console.error('Error in conversion:', error);
        return res.status(500).json({ error: 'Conversion failed' });
    }
};

export const getConversions = (
    req: Request,
    res: Response
): Response<any, Record<string, any>> => {
    const sortedLogs = conversionLogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return res.json({ logs: sortedLogs });
};

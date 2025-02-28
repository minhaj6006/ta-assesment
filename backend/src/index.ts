// backend/src/index.ts
import express from 'express';
import cors from 'cors';
import conversionRoutes from './routes/conversion.routes';
import { PORT } from './config'; // Import PORT from config

const app = express();

app.use(cors());
app.use(express.json());

// Mount the conversion routes at /api
app.use('/api', conversionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

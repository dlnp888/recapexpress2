import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import taskRouter from './routes/tasks.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to the api of the tasks');
});

app.use('/tasks', taskRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

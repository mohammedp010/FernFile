import express from 'express';
import router from './Routes/routes.js';
import cors from 'cors';
import dbCon from './db/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use('/', router);

const PORT = process.env.PORT || 8000;

dbCon();
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
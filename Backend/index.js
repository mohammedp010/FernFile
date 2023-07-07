import express from 'express';
import router from './Routes/routes.js';
import cors from 'cors';
import dbCon from './db/db.js';

const app = express();

app.use(cors());
app.use('/', router);

const PORT = 8000;

dbCon();
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
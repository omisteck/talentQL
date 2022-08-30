import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

import indexRoute from "./controllers/index.controller"
import { requestRateLimiter } from './middlewares/rateLimiter';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/howold', requestRateLimiter , indexRoute.calculate );

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
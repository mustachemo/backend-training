import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import ejs from 'ejs';
import logger from 'morgan';
import indexRoute from './routes/index.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
console.log('filename', __filename);
const __dirname = path.dirname(__filename);
console.log('dirname', __dirname);

app.set('/views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT);

app.use('/public', express.static('public'));
app.use(logger('dev'));

app.use('/', indexRoute);

export default app;

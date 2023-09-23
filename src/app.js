import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import logger from 'morgan';
import indexRoute from './routes/index.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
console.log('fileURLToPath(import.meta.url): ', fileURLToPath(import.meta.url));
const __dirname = path.dirname(__filename);
console.log('path.dirname(__filename): ', path.dirname(__filename));

nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');
app.set('port', process.env.PORT);

app.use('/public', express.static('public'));
app.use(logger('dev'));

app.use('/', indexRoute);

export default app;

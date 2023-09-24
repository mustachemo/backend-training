import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import nunjucks from 'nunjucks';
import logger from 'morgan';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');
app.set('port', process.env.PORT);

app.use('/public', express.static('public'));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

export default app;

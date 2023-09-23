import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';

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

export default app;

import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import nunjucks from 'nunjucks';
import logger from 'morgan';
import connectDB from './configs/db.js';

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

import mongoose from 'mongoose';

const message = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: 'message', versionKey: false }
);

const Message = mongoose.model('message', message);

app.get('/', async (req, res) => {
  try {
    await connectDB();
    const messages = await Message.find();
    const plainMessages = messages.map((message) => message.toObject());

    plainMessages.forEach((message) => {
      const date = new Date(message.createdAt);
      message.createdAt = format(date, 'dd/MM/yyyy');
    });
    res.render('index', {
      messages: plainMessages,
    });
  } catch (error) {
    console.error(error);
    res.render('index', {
      connectionMessage: 'Error getting messages from database',
    });
  }
  res.render('index');
});

app.get('/add', async (req, res) => {
  try {
    await connectDB();
    res.render('add', {
      resolutionMessage: 'Connected to database!',
    });
  } catch (error) {
    console.error(error);
    res.render('add', {
      resolutionMessage: 'Could not connect to database...',
    });
  }
});

app.post('/add', async (req, res) => {
  const { author, message } = req.body;
  const newMessage = new Message({ name: author, message: message });
  try {
    await newMessage.save();
    res.render('form', {
      resolutionMessage: 'collection item successfully added!',
    });
  } catch (error) {
    console.error(error);
    res.render('form', {
      resolutionMessage: 'Error inputting data into database',
    });
  }
});

export default app;

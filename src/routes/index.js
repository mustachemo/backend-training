import express from 'express';

const indexRoute = express.Router();

indexRoute.get('/', (req, res) => {
  res.render('index');
});

export default indexRoute;

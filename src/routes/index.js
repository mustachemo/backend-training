import express from 'express';

const indexRoute = express();

indexRoute.get('/', (req, res) => {
  res.render('index');
});

export default indexRoute;

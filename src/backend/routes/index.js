const { Router } = require('express');
const jobsRouter = require('./jobs');

const apiRouter = Router();

apiRouter.use('/jobs', jobsRouter);

apiRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello, im api endpoint',
  });
});

module.exports = apiRouter;

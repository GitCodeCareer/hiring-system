const { Router } = require('express');
const jobsRouter = require('./jobs');
const path = require('path');
const { appRootDir } = require("../settings")

const apiRouter = Router();

apiRouter.use('/jobs', jobsRouter);

module.exports = apiRouter;

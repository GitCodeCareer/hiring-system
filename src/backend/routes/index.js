const { Router } = require('express');
const jobsRouter = require('./jobs');
const path = require('path');
const { appRootDir } = require("../settings")

const apiRouter = Router();

apiRouter.use('/jobs', jobsRouter);
apiRouter.get("/", (req, res) => {
  res.sendFile(path.resolve(appRootDir + '/public/index.html'));
});

module.exports = apiRouter;

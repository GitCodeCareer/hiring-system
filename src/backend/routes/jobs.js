const { Router } = require('express');
const jobsController = require('../controllers/jobs');

const jobsRouter = Router();

jobsRouter.get('/', jobsController.listJobs);

module.exports = jobsRouter;

const { Router } = require('express');
const jobsController = require('../controllers/jobs');

const jobsRouter = Router();

jobsRouter.get('/:jobId', jobsController.getJobById);
jobsRouter.post('/', jobsController.createJob);
jobsRouter.get('/', jobsController.listJobs);

module.exports = jobsRouter;

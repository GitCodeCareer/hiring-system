const { Router } = require('express');
const jobsController = require('../controllers/jobs');

const jobsRouter = Router();

jobsRouter.get('/:jobId', jobsController.getJobById);
jobsRouter.post('/new', jobsController.createJob);
jobsRouter.patch('/:jobId', jobsController.editJobById);
jobsRouter.get('/', jobsController.listJobs);

module.exports = jobsRouter;

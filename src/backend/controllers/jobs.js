const listOfJob = [
  {
    id: '1',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Addison',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '2',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Berkeley County',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '3',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Cambridge',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '4',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Chandler',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '5',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Clarksville',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '6',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Detroit',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '7',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Dallas',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '8',
    title: 'Senior backend developer',
    company: 'Facebook',
    location: 'Salt Lake City',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '9',
    title: 'Senior backend developer',
    company: 'Netflix',
    location: 'Sunnyvale',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '10',
    title: 'Senior backend developer',
    company: 'Amazon',
    location: 'Washington D.C.',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
];

module.exports.listJobs = (req, res) => {
  return res.json(listOfJob);
};

module.exports.getJobById = (req, res) => {
  const { jobId } = req.params;
  if (!jobId) {
    return res.status(400).json({
      error: 'Job id parameter required',
    });
  }
  const job = listOfJob.find((job) => job.id === jobId);
  if (!job) {
    return res.status(404).json({
      error: 'Job not found',
    });
  }
  return res.status(200).json(job);
};

module.exports.createJob = (req, res) => {
  const { title, company, location, jobType, date } = req.body;
  if (!title || !company || !location || !jobType || !date) {
    return res.status(400).json({ error: 'Required arguments not sent' });
  }
  const job = { title, company, location, jobType, date };

  listOfJob.push(job);
  res.json(job);
};

module.exports.editJobById = (req, res) => {
  const { jobId } = req.params;
  const { title, company, location, jobType, date } = req.body;
  if (!jobId) {
    return res.status(400).json({
      error: 'Job id parameter required',
    });
  }
  const job = listOfJob.find((job) => job.id === jobId);
  if (!job) {
    return res.status(404).json({
      error: 'Job not found',
    });
  }
  job.title = title;
  job.company = company;
  job.location = location;
  job.jobType = jobType;
  job.date = date;
  res.json(job);
};

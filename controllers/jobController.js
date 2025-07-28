const Job = require('../models/Job');

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new job
exports.createJob = async (req, res) => {
  const { title, company, type, location, description } = req.body;

  if (!title || !company || !type || !location || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newJob = new Job({ title, company, type, location, description });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

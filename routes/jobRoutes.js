const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/api/jobs', jobController.getJobs);
router.get('/api/jobs/:id', jobController.getJobById);
router.post('/api/jobs', jobController.createJob);

module.exports = router;

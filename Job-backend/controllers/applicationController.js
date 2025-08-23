const Application = require('../models/Application');
const Job = require('../models/Job');

// @desc  Apply to a job
exports.applyToJob = async (req, res) => {
    try {
        if (req.user.role !== "jobseeker") {
            return res.status(403).json({ message: "Only job seekers can apply"});
        }

        const existing = await Application.findOne({
            job: req.params.jobId,
            applicant: req.user._id,
        });

        if (existing) {
            return res.status(400).json({ message: "Already applied to this job"})
        }

        const application = await Application.create({
            job: req.params.jobId,
            applicant: req.user._id,
            resume: req.user.resume, // assuming resume is stared in user profile ou En supposant que le cv est fixe dans le profil utilisateur
            });

        res.status(201).json(application)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

// @desc    Get logged-in user's Applications / obtenir tous les demandes de l'user connecté
exports.getMyApplications = async (req, res) => {
     try {
        const apps = await Application.find({ applicant: req.user._id })
        .populate('job', 'title company location type')
        .sort({ createdAt: -1 });

        res.json(apps)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

// @desc    Get all applicants for a job {Employer} / Obtenir tous les candidats pour un emploi
exports.getApplicantsForJob = async (req, res) => {
     try {
        const job = await Job.findById(req.params.jobId);

        if (!job || job.company.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: "Not authorized to view applicants" })
        }

        const applications = await Application.find({ job: req.params.jobId })
            .populate('job', 'title location category type')
            .populate('applicant', 'name email avatar resume');

        res.json(applications)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

// @desc    Get all applications by Id {Jobseeker or Employer}
exports.getApplicationById = async (req, res) => {
     try {
        const app = await Application.findById(req.params.id)
            .populate('job', 'title')
            .populate('applicant', 'name email avatar resume');

            if (!app) return res.status(404).json({ message: "Application not found", id: req.params.id});

            const isOwner = 
                app.applicant._id.toString() === req.user._id.toString() ||
                app.job.company.toString() === req.user._id.toString();

            if (!isOwner) {
                return res.status(403).json({ message: "Not authorized to view this application"})
            }

            res.json(app);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

//@desc     Update applications status {Employer}
exports.updateStatus = async (req, res) => {
     try {
        const { status } = req.body;
        const app = await Application.findById(req.params.id).populate('job')

        if (!app || app.job.company.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to update this application" })
        }

        app.status = status;
        await app.save();

        res.json({ message: "Application status update", status})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
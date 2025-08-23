const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },  // Offre d'emploi ciblée
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Candidat qui postule

    resume: { type: String}, // URL du CV ou chemin du fichier uploadé or link
    status: {
        type: String,
        enum: ['Applied', 'In Review', 'Rejected', 'Accepted'],
        default: 'Applied'
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema)
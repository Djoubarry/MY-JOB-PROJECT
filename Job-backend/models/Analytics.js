const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, // Employeur qui a publié l’offre
    totalJobsPosted: { type: Number, default: 0 }, 
    totalApplicationsReceived: { type: Number, default: 0}, // Nombre de candidatures reçues
    totalHired: { type: Number, default: 0} // Nombre de candidats embauchés
},{
    timestamps: true
})

module.exports = mongoose.model('Analytics', analyticsSchema)
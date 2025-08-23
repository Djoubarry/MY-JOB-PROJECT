require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes')
const applicationRoutes = require('./routes/applicationRoutes');
const savedJobsRoutes = require('./routes/savedJobsRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes')

const app = express();

// Middleware pour lire le JSON
app.use(express.json());

// Middleware pour gérer CORS
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Connexion à la base de données
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/save-jobs', savedJobsRoutes);
app.use('/api/analytics', analyticsRoutes);

// Servir le dossier uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {}));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

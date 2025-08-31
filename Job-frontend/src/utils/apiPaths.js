export const BASE_URL = 'http://localhost:8000';

export const API_PATHS = {
    AUTH: {
        REGISTER: '/api/auth/register', // Inscription
        LOGIN: '/api/auth/login',       // Connexion
        GET_PROFILE: '/api/auth/profile', // Profil utilisateur
        UPDATE_PROFILE: '/api/user/profile', // Mettre à jour le profil utilisateur
        DELETE_RESUME: '/api/user/resume', // Supprimer le profil utilisateur
    },
    


DASHBOARD: {
    OVERVIEW: '/api/analytics/overview', // Vue d'ensemble des analyses
},

JOBS: {
    GET_ALL_JOBS: '/api/jobs', // Obtenir toutes les offres d'emploi
    GET_JOB_By_ID: (id) => `/api/jobs/${id}`, // Obtenir une offre d'emploi par ID
    POST_JOB: '/api/jobs', // Publier une nouvelle offre d'emploi
    POST_JOBS_EMPLOYER: "/api/jobs/get-jobs-employer", // Obtenir les offres d'emploi publiées par un recruteur
    GET_JOB_BY_ID: (id) => `/api/jobs/${id}`, // Obtenir une offre d'emploi par ID
    UPDATE_JOB: (id) => `/api/jobs/${id}`, // Mettre à jour une offre d'emploi
    TOGGLE_CLOSE: (id) => `/api/jobs/${id}/toggle-close`, // Fermer ou rouvrir une offre d'emploi
    DELETE_JOB: (id) => `/api/jobs/${id}`, // Supprimer une offre d'emploi
    DELETE_JOB: (id) => `/api/jobs/${id}`, // Supprimer une offre d'emploi

    SAVE_JOB: (id) => `/api/save-jobs/${id}`, // Sauvegarder une offre d'emploi
    UNSAVE_JOB: (id) => `/api/save-jobs/${id}`, // Retirer une offre d'emploi des sauvegardes
    GET_SAVED_JOBS: '/api/save-jobs/my', // Obtenir les offres d'emploi sauvegardées   
},

APPLICATIONS: {
    
    APPLY_TO_JOB: (id) => `/api/applications/${id}`,
    GET_ALL_APPLICATIONS: (id) => `/api/applications/${id}`,
    UPDATE_STATUS: (id) => `api/applications/${id}/status`,
},

IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload profile picture
},
};
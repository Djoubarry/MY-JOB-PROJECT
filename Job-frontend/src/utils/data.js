import {
    Search,
    Users,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus,
    FileText,
    Award,
} from "lucide-react";

export const jobSeekerFeatures = [
    {
        icone: Search,
        title:  "Recherche intelligente d'emploi",
        description: 
            "Un algorithme intelligent vous propose des offres adaptées à vos compétences et préférences.",
    },
    {
        icone: FileText,
        title:  "Créateur de CV",
        description: 
            "Créez un CV professionnel grâce à notre outil intuitif et nos modèles conçus par des experts.", 
    },
    {
        icone: MessageSquare,
        title:  "Communication directe",
        description: 
            "Échangez directement avec les recruteurs via notre messagerie sécurisée.", 
    },
    {
        icone: Award,
        title:  "Évaluation des compétences",
        description: 
            "Mettez en avant vos compétences avec des tests certifiés et obtenez des badges reconnus."
    },
];
export const employerFeatures = [
    {
        icone: Users,
        title:  "Accès à la base de talents",
        description: 
            "Accédez à une vaste base de candidats présélectionnés et trouvez le profil idéal pour votre équipe."
    },
    {
        icone: BarChart3,
        title:  "Suivi des recrutements",
        description: 
            "Suivez vos performances de recrutement avec des analyses détaillées et des statistiques d'engagement."
    },
    {
        icone: Shield,
        title:  "Candidats vérifiés",
        description: 
            "Tous les candidats sont vérifiés pour garantir des recrutements fiables et sécurisés.", 
    },
    {
        icone: Clock,
        title:  "Recrutement rapide",
        description: 
            "Un processus simplifié qui réduit le temps d'embauche grâce à des outils automatisés."
    },
];

// Navigation items configuration
export const NAVIGATION_MENU  = [
    { id: "employer-dashboard", name: "Tableau de bord", icon: LayoutDashboard },
    { id: "post-job", name: "Publier une offre", icon: Plus },
    { id: "manage-jobs", name: "Gérer les offres", icon: Briefcase },
    { id: "company-profile", name: "Profil entreprise", icon: Building2 },
]

// Categories and job types
export const CATEGORIES = [
    { value: "Engineering", label: "Ingénierie"},
    { value: "Design", label: "Design"},
    { value: "Marketing", label: "Marketing"},
    { value: "Sales", label: "Ventes"},
    { value: "IT & Software", label: "IT & Développement logiciel”"},
    { value: "Customer-service", label: "Service client"},
    { value: "Product", label: "Gestion de produit"},
    { value: "Operations", label: "Opérations"},
    { value: "Finance", label: "Finance"},
    { value: "HR", label: "Ressources humaines"},
    { value: "Other", label: "Autre"},
];
// export const CATEGORIES = [
//     { value: "Engineering", label: "Ingénierie" },
//     { value: "Design", label: "Design / UX-UI" },
//     { value: "Marketing", label: "Marketing / Digital" },
//     { value: "Sales", label: "Ventes / Commercial" },
//     { value: "IT & Software", label: "Informatique & Développement logiciel" },
//     { value: "Customer-service", label: "Service client" },
//     { value: "Product", label: "Gestion de produit" },
//     { value: "Operations", label: "Opérations" },
//     { value: "Finance", label: "Finance" },
//     { value: "HR", label: "Ressources humaines" },
//     { value: "Logistics", label: "Logistique / Supply Chain" },
//     { value: "Education", label: "Éducation / Formation" },
//     { value: "Communication", label: "Communication / RP" },
//     { value: "Healthcare", label: "Santé / Médical" },
//     { value: "Arts", label: "Arts / Création" },
//     { value: "Other", label: "Autre" }
// ];

// Job types and salary ranges
export const JOB_TYPES = [
    { value: "Remote", label: "Télétravail" },
    { value: "Full-Time", label: "Temps plein" },
    { value: "Part-Time", label: "Temps partiel" },
    { value: "Contract", label: "Contrat" },
    { value: "Internship", label: "Stage" },
];

export const SALARY_RANGES = [
    "À négocier",
    "Moins de 1000$",
    "1000$ - 5 000$",
    "5000$ - 10 000$",
    "Plus de 10 000$"
];

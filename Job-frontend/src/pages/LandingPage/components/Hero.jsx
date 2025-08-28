
// Importation de motion pour les animations (framer-motion)
import { motion } from 'framer-motion';
// Importation d'icônes depuis lucide-react
import { Search, ArrowRight, Users, Building, TrendingUp } from 'lucide-react';
// Importation de la fonction de navigation de react-router-dom (probablement une faute, voir commentaire plus bas)
import { useNavigate } from 'react-router-dom';


// Composant principal Hero
const Hero = () => {
  // Variable pour vérifier si l'utilisateur est authentifié (à remplacer par la vraie logique d'authentification)
  const isAuthenticated = true
  // Objet utilisateur fictif (à remplacer par les vraies données utilisateur)
  const user = {fullName: "Djoulde", role: "employer"};

  // Hook de navigation (attention : la bonne fonction est useNavigate, pas userNavigate)
  const navigate = useNavigate();

    // Statistiques affichées en français
    const stats = [
        { icon: Users, label: 'Utilisateurs actifs', value: '2,4M+' },
        { icon: Building, label: 'Entreprises', value: '50K+' },
        { icon: TrendingUp, label: 'Offres publiées', value: '150K+' },
    ];

  // Rendu du composant (à compléter avec le vrai contenu de la section Hero)
  return (
    <section className="pt-24 pb-16 bg-white min-h-screen flex items-center ">
        <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
                {/* Titre principal et bouton d'appel à l'action */}
                <motion.h1
                    initial={{ opacity: 0, y: 38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6}}
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'
                >
                    Trouvez l'emploi de vos rêves ou
                    <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pt-2'>
                        le talent parfait
                    </span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0, y: 38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-xl md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'
                >
                    Bhantal Work connecte les meilleurs talents aux entreprises ambitieuses. <br/>
                    Trouvez l’opportunité idéale ou le collaborateur qu’il vous faut, en un clic.
                </motion.p>

                {/* Boutons d'appel à l'action */}
                <motion.div
                    initial={{ opacity: 0, y: 38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg  hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2'
                        onClick={() => navigate("/find-jobs")}
                    >
                        <Search className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        <span>Voir les offres</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md'
                        onClick={() => {
                            navigate(
                                isAuthenticated && user?.role === "employer"
                                ? "/employer-dashboard"
                                : "/login"
                            );
                        }}
                    >
                        Publier une offre
                    </motion.button>
                </motion.div>

                {/* Statistiques */}
                <motion.div
                    initial={{ opacity: 0, y: 38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 max-auto '
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}  
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                            className='flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors'
                        >
                            <div className='w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-2'>
                                <stat.icon className=' w-6 h-6 text-blue-600' />
                            </div>
                            <div className='text-2xl font-bold text-gray-900'>{stat.value}</div>
                            <div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </div>
        {/* Subtle Background Elements  */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none '>
            <div className='absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30'/>
            <div className='absolute bottom-20 right-10 w-40 bg-purple-100 rounded-full blur-3xl opacity-30'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-gradient-to-r from-blue-50  to-purple-50 rounded-full blur-3xl opacity-20 '/>
        </div>
    </section>
  )
}

// Exportation du composant Hero pour l'utiliser ailleurs dans l'application
export default Hero
import { color, motion } from "framer-motion"
import { TrendingUp, Users, Building, Target, Briefcase } from "lucide-react"

const Analytics = () => {

    const stats = [
        { 
            icon: Users,
            label: 'Utilisateurs actifs',
            value: '2,4M+',
            growth: '+15%',
            color: 'blue'
        },
        {
            icon: Briefcase,
            label: 'Offres publiées',
            value: '150K+',
            growth: '+22%',
            color: 'purple'
        },
        {
            icon: Target,
            label: 'Recrutements réussis',
            value: '89K+',
            growth: '+18%',
            color: 'green'
        },
        {
            icon: TrendingUp,
            label: 'Taux de correspondance',
            value: '94%',
            growth: '+8%',
            color: 'orange'
        },
        // {
        //     icon: Building,
        //     label: 'Companies',
        //     value: '50K+',
        //     growth: '+12%',
        //     color: 'teal'
        // },
    ];

  return (

    <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    Statistiques de la
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> plateforme</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Données en temps réel et résultats concrets qui illustrent la puissance de notre plateforme pour connecter les talents aux opportunités.
                </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 38 }}
                        whileInView={{ opacity: 1, y: 0 }}  
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer text-center"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mb-2`}>
                                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                            </div>
                            <span className="text-green-500 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                                {stat.growth}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Analytics
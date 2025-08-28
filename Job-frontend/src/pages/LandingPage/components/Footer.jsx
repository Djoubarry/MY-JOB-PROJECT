import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  // Fonction pour gérer les clics sur les liens
  const handleClick = (e, name) => {
    e.preventDefault()
    // alert(`${name} — Cette fonctionnalité arrive bientôt !`)
  }

  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden border-t border-gray-300">
      <div className="relative z-10 px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Bhantal Work
                </h3>
              </div>
              <p className="text-base text-gray-600">
                Plateforme de recrutement et de gestion de carrière, propulsée par l'intelligence artificielle.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="javascript:void(0)" onClick={(e) => handleClick(e, "Facebook")} aria-label="Facebook" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="javascript:void(0)" onClick={(e) => handleClick(e, "Twitter")} aria-label="Twitter" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="javascript:void(0)" onClick={(e) => handleClick(e, "LinkedIn")} aria-label="LinkedIn" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="javascript:void(0)" onClick={(e) => handleClick(e, "Instagram")} aria-label="Instagram" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Commencez ici Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">COMMENCEZ ICI</h4>
              <ul className="space-y-2">
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Créer un CV")} className="text-base text-gray-600 hover:text-purple-700 transition-colors hover:underline">Créer un CV</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Trouver un emploi")} className="text-base text-gray-600 hover:text-purple-700 transition-colors hover:underline">Trouver un emploi</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Trouver une entreprise")} className="text-base text-gray-600 hover:text-purple-700 transition-colors hover:underline">Trouver une entreprise</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Modèles de CV")} className="text-base text-gray-600 hover:text-purple-700 transition-colors hover:underline">Modèles de CV</a></li>
              </ul>
            </div>

            {/* À propos Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">À PROPOS</h4>
              <ul className="space-y-2">
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Tarification CV")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Tarification CV</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Aide candidat")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Aide candidat</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Nous contacter")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Nous contacter</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Espace recruteur")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Espace recruteur</a></li>
              </ul>
            </div>

            {/* Liens utiles Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">LIENS UTILES</h4>
              <ul className="space-y-2">
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Mentions légales")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Mentions légales</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Politique de confidentialité")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Politique de confidentialité</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => handleClick(e, "Conditions Générales d'utilisation")} className="text-base text-gray-600 hover:text-purple-700 transition-colors">Conditions Générales d'utilisation</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-10"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-base text-gray-800">
              Fièrement conçu en Guinée <span className="text-purple-600">♡</span>
            </div>
            <div className="text-base text-gray-800">
              © {new Date().getFullYear()} Bhantal Work. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

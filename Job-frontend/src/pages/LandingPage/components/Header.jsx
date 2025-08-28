import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const isAuthenticated = true
    const user = {fullName: "Djoulde", role: "employer"};
    const navigate = useNavigate();

  return <motion.header
    initial={{ opacity: 0 , y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100'>
    <div className="container mx-auto px-4">
      <div className='flex items-center justify-between h-16'>
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
            <Briefcase className='w-5 h-5 text-white' />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Bhantal Work
</span>

        </div>
        

          {/* Liens de navigation - Cachés sur mobile */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
            onClick={() => navigate("/find-jobs")}
            className='text-gray-600 hover:text-gray-900 transition-colors font-medium'>
              Offres d'emploi
            </a>
            <a
            onClick={() => {
              navigate(
                isAuthenticated && user?.role === "employer"
                  ?"/employer-dashboard"
                  :"/login"
              );
            }}
            className='text-gray-600 hover:text-gray-900 transition-colors font-medium'>Espace Recruteur</a>
          </nav>

          {/* Boutons d'authentification */}
          <div className='flex items-center space-x-3'>
            {isAuthenticated ? (
              <div className='flex items-center space-x-3'>
                <span className='text-gray-700'>Bienvenue, {user?.fullName}</span>
                <a 
                  href={
                    user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/find-jobs"}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md'>
                    Tableau de bord
                  </a>
              </div>
            ) : (
              <>
                <a
                  href='/login'
                  className='text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-500 '
                >
                  Connexion
                </a>
                <a 
                  href=""
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md'
                  >
                    Inscription
                  </a>
              </>
            )}
          </div>

      </div>
    </div>
  </motion.header>
  
};

export default Header
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { validateEmail } from '../../utils/helper';
import { useAuth } from '../../context/AuthContext';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const {login} = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const[formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    success: false,
  });

  // Validation des champs
  // const validateEmail = (email) => {
  //   if (!email.trim()) return "L'adresse e-mail est obligatoire";
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) return "Veuillez entrer une adresse e-mail valide";
  //   return '';
  // };

  const validatePassword = (password) => {
    if (!password) return "Le mot de passe est obligatoire";
    return ''
  };

  const validateForm = () => {
    const errors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    // Retirer les erreurs vides
    Object.keys(errors).forEach(key => {
      if (!errors[key]) delete errors[key];
    });

    setFormState(prev => ({...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  // Gérer les inputs
  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Effacer l’erreur quand on retape
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: null
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState(prev => ({...prev, loading: true }));

    try {
      // Appel API login à ajouter ici
       const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
              email: formData.email,
              password: formData.password,
              rememberMe: formData.rememberMe
            });

             setFormState(prev => ({
                ...prev,
                loading: false,
                success: true,
                errors: {}
              }));
      
            const { token, role } = response.data;
      
            if (token) {
              login(response.data, token);
              // Redirection selon le rôle
              setTimeout(() => {
                window.location.href = 
                  role === "employer"
                    ? "/employer-dashbord"
                    : "/find-jobs"
              }, 2000);
            }

            // Redirect based on user role
            setTimeout(() => {
              const redirectPath = user.role === 'employer'
                ? '/employer-dashbord'
                : '/find-jobs';
                window.location.href = redirectPath;
            }, 1500)
            
            
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        loading: false,
        errors: {
          submit: error.reponse?.message || 'Échec de connexion. Vérifiez vos identifiants.'
        }
      }));
    }
  };

  if (formState.success) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center'
        >
          <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Bienvenue !</h2>
          <p className='text-gray-600 mb-6'>
            Vous êtes connecté avec succès.
          </p>
          <div className='animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto' />
            <p className='text-sm text-gray-500 mt-2'>Redirection vers votre tableau de bord...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4 '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full'
      >
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Heureux de vous revoir</h2>
          <p className='text-gray-600'>Connectez-vous à votre compte Bhantal Work</p>
        </div>

        <form className='space-y-6' onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Adresse e-mail
            </label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formState.errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder='Entrez votre e-mail'
              />
            </div>
            {formState.errors.email && (
              <p className='text-red-500 text-sm mt-1 flex items-center'>
                <AlertCircle className='w-4 h-4 mr-1' />
                {formState.errors.email}
              </p>
            )}
          </div>

          {/* Mot de passe */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
               Mot de passe
            </label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input 
                type={formState.showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Entrez votre mot de passe'
                className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                  formState.errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
              <button
                type='button'
                onClick={() => setFormState(prev => ({...prev, showPassword: !prev.showPassword}))}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
              >
                {formState.showPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            </div>
            {formState.errors.password && (
              <p className='text-red-500 text-sm mt-1 flex items-center'>
                <AlertCircle className='w-4 h-4 mr-1' />
                {formState.errors.password}
              </p>
            )}
          </div>

          {/* Erreur globale */}
          {formState.errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className='text-red-700 text-sm flex items-center'>
                <AlertCircle className='w-4 h-4 mr-2' />
                {formState.errors.submit}
              </p>
            </div>
          )}

          {/* Bouton */}
          <button
            type="submit"
            disabled={formState.loading}
            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center space-x-2'
          >
            {formState.loading ? (
              <>
                <Loader className='w-5 h-5 animate-spin' />
                <span>Connexion...</span>
              </>
            ) : (
              <span>Se connecter</span>
            )}
          </button>

          {/* Lien vers inscription */}
          <div className='text-center text-sm text-gray-600'>
            <p className='text-gray-600'>
              Vous n'avez pas encore de compte ?{' '}
              <a href="/signup" className='text-blue-600 hover:text-blue-700 font-medium'>
                Créez-en un ici
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Login

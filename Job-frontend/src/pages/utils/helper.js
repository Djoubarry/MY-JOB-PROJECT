  // Validation des champs
  export const validateEmail = (email) => {
    if (!email.trim()) return "L'adresse e-mail est obligatoire";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Veuillez entrer une adresse e-mail valide";
    return '';
  };

  export const validatePassword = (password) => {
    if (!password) return "Le mot de passe est obligatoire";
    if (password.length < 6) return "Le mot de passe doit contenir au moins 6 caractères";
    if (!/(?=.*[a-z])/.test(password)) return "Le mot de passe doit contenir au moins une lettre minuscule";
    if (!/(?=.*[A-Z])/.test(password)) return "Le mot de passe doit contenir au moins une lettre majuscule";
    if (!/(?=.*\d)/.test(password)) return "Le mot de passe doit contenir au moins un chiffre";

    return ''
  }

  export const validateAvatar = (file) => {
    if (!file) return "" // Pas obligatoire

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return "Le format de l'image doit être JPG, JPEG ou PNG";
    }
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSizeInBytes) {
      return "La taille de l'image ne doit pas dépasser 5MB";
    }
    return '';
  };

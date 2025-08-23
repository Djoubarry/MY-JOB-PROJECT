const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true, unique: true},
    password:{ type: String, require: true},
    role:{ type: String, enum:["jobseeker","employer"], required: true},
    avatar: String,
    resume: String,
    
    // for employer
    companyName: String,
    companyDescription: String,
    companyLogo: String,
},{
    timestamps: true
});
// Middleware avant sauvegarde pour hacher le mot de passe
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
});

// Méthode pour vérifier le mot de passe entré avec celui en base
userSchema.methods.matchPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
};

// Création et exportation du modèle
module.exports = mongoose.model('User', userSchema)
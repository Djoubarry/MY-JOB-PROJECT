const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log("MongoBD connectée");
    } catch (err) {
        console.error("Erreur lors de la connection à mongoBD", err)
        process.exit(1);
    }
}

module.exports = connectDB;

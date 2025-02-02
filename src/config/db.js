const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = 'mongodb://mongo:CcOcHDqAUpxkGAxGbdMfoVIRNTwHWYQd@mongodb.railway.internal:27017';
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

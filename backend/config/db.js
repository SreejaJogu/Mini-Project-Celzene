// config/db.js
const { MONGO_URI } = require('../env/env')
const mongoose = require('mongoose');
const connectDB = async () => {
 // Connect to MongoDB
 mongoose.connect(MONGO_URI, {});

 // Event listeners for MongoDB connection
 mongoose.connection.on('connected', () => {
     console.log("Connected to MongoDB successfully");
 })
};
module.exports = connectDB;
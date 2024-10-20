//config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001, //listening port
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", //implementation of JWT (later stage)
  mongoUri: process.env.MONGODB_URI //location of mongodb database instance
};
console.log('MONGODB_URI in config.js:', process.env.MONGODB_URI); //troubleshooting mongo uri being undefined in server.js

export default config;

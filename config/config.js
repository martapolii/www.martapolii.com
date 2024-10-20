//config.js
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001, //listening port
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", //implementation of JWT (later stage)
  mongoUri: process.env.MONGODB_URI //location of mongodb database instance
}

export default config

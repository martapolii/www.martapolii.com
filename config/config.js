//config.js
  const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mernproject'
  }
  export default config

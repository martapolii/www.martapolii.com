//config.js
 const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 5001,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI ||
 "mongodb+srv://mpolish3:OsF5JOg3f03zuUvM@cluster0.8hz0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject'
 }
 export default config

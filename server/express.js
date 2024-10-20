// import modules
import express from 'express' 
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js' //import the template.js file do its served at the root URL
//import the users rotes
import userRoutes from './routes/user.routes.js'
// import contact routes
import contactRoutes from './routes/contact.routes.js'

const app = express()

//serve template at the root URL
app.get('/', (req, res) => {
  res.status(200).send(Template()) 
  })

//configure express to use body-parser as middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure routes
app.use('/api/users', userRoutes)
app.use('/api/contacts', contactRoutes)

//configure express  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app

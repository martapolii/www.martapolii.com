// import modules
import express from 'express' 
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js' //import the template.js file do its served at the root URL


const app = express()

//serve template at the root URL
app.get('/', (req, res) => {
  res.status(200).send(Template()) 
  })

  
//configure express  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app

//define the routes for handling all CRUD opertions for users API

//import express
import express from 'express'
//import the user controller
import userCtrl from '../controllers/user.controller.js'
//import router
const router = express.Router()

// GET - get all users
router.route('api/users').get(userCtrl.read)

// GET - get user by ID
router.route('api/users/:id').get(userCtrl.readById)

// POST - add a new user
router.route('api/users').get(userCtrl.create)

// PUT - update user by ID
router.route('api/users/:id').get(userCtrl.update)

// DELETE - remove user by ID
router.route('api/users/:id').get(userCtrl.remove)

// DELETE - remove all users
router.route('api/users'),get(userCtrl.removeAll)


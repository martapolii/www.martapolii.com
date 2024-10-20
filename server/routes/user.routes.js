//define the routes and API endpoints for handling all CRUD opertions for users 

//import express
import express from 'express';
//import the user Controller  
import userCtrl from '../controllers/user.controller.js';

//import router
const router = express.Router();

// GET - get all users
router.route('/api/users').get(userCtrl.read);

// GET - get user by ID
router.route('/api/users/:id').get(userCtrl.readById);

// POST - add a new user
router.route('/api/users').post(userCtrl.create);

// PUT - update user by ID
router.route('/api/users/:id').put(userCtrl.update);

// DELETE - remove user by ID
router.route('/api/users/:id').delete(userCtrl.remove);

// DELETE - remove all users
router.route('/api/users').delete(userCtrl.removeAll);

// middleware to fetch the user by id:
router.param('id', userCtrl.userByID);

export default router;


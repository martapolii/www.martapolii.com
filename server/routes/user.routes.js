//define the routes and API endpoints for handling all CRUD opertions for users 

import express from 'express'; //import express
import userCtrl from '../controllers/user.controller.js'; //import the user Controller

const router = express.Router(); //import router

router.route('/api/users').get(userCtrl.read); // GET - get all users
router.route('/api/users/:id').get(userCtrl.readById); // GET - get user by ID
router.route('/api/users').post(userCtrl.create); // POST - add a new user
router.route('/api/users/:id').put(userCtrl.update); // PUT - update user by ID
router.route('/api/users/:id').delete(userCtrl.remove); // DELETE - remove user by ID
router.route('/api/users').delete(userCtrl.removeAll); // DELETE - remove all users

router.param('id', userCtrl.userByID); // middleware to fetch the user by id

export default router;


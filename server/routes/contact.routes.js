//define the routes for handling all CRUD opertions for contacts API

//import express
import express from 'express';

//import the contact controller
import contactCtrl from '../controllers/contact.controller.js';

//import router
const router = express.Router();

// GET - get all contacts
//router.route('url')l.get(controllername.methodname)
router.route('api/contacts').get(contactCtrl.read);

// GET - get contacts by ID
router.route('api/contacts/:id').get(contactCtrl.readById);

// POST - add a new contact
router.route('api/contacts').post(contactCtrl.create);

// PUT - update contact by ID
router.route('api/contacts/:id').put(contactCtrl.update);

// DELETE - remove contact by ID
router.route('api/contacts/:id').delete(contactCtrl.remove);

// DELETE - remove all contacts
router.route('api/contacts').delete(contactCtrl.removeAll);

export default router;
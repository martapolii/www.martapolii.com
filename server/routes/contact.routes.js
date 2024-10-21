//define the routes and API endpoints for handling all CRUD opertions for contacts API

import express from 'express'; //import express
import contactCtrl from '../controllers/contact.controller.js'; //import the contact controller
const router = express.Router(); //import router


//router.route('url')l.get(controllername.methodname)
// GET - get all contacts
router.route('/api/contacts').get(contactCtrl.read); 
// GET - get contacts by ID
router.route('/api/contacts/:id').get(contactCtrl.readById); 
// POST - add a new contact
router.route('/api/contacts').post(contactCtrl.create); 
// PUT - update contact by ID
router.route('/api/contacts/:id').put(contactCtrl.update); 
 // DELETE - remove contact by ID
router.route('/api/contacts/:id').delete(contactCtrl.remove);
// DELETE - remove all contacts
router.route('/api/contacts').delete(contactCtrl.removeAll); 

// middleware to fetch a contact by id
router.param('id', contactCtrl.contactByID); 

export default router;
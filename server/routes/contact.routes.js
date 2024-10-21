//define the routes and API endpoints for handling all CRUD opertions for contacts API

import express from 'express'; //import express
import contactCtrl from '../controllers/contact.controller.js'; //import the contact controller
const router = express.Router(); //import router


//router.route('url')l.get(controllername.methodname)
router.route('/api/contacts').get(contactCtrl.read); // GET - get all contacts
router.route('/api/contacts/:id').get(contactCtrl.readById); // GET - get contacts by ID
router.route('/api/contacts').post(contactCtrl.create); // POST - add a new contact
router.route('/api/contacts/:id').put(contactCtrl.update); // PUT - update contact by ID
router.route('/api/contacts/:id').delete(contactCtrl.remove); // DELETE - remove contact by ID
router.route('/api/contacts').delete(contactCtrl.removeAll); // DELETE - remove all contacts

router.param('id', contactCtrl.contactByID); // middleware to fetch a contact by id

export default router;
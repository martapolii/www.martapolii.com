// controller methods for contact controller

// import model + lodash + error handler
import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

//GET - Read/get all contacts 
const read = async (req, res) => {
  try {
    const contact = await Contact.find(); 
    res.status(200).json(contact); 
  } catch (error) {
    res.status(500).json({
      error: 'Could not retrieve Contact'
    });
  } 
};

// GET - get contacts by ID
const readById = async (req, res) => {
  try {
    let contact = req.profile
    return res.json(contact)
  } catch (err) { 
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
    });
  }
}

//POST - Create/add a new contact
const create = async (req, res) => { 
  const contact = new Contact(req.body) 
  try {
    await contact.save()
    return res.status(200).json({ 
      message: "Successfully created new contact!"
    })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
    });
  } 
};

// PUT - Update a contact by ID
const update = async (req, res) => { 
  try {
    let contact = req.profile
    contact = extend(contact, req.body); 
    contact.updated = Date.now(); 
    await contact.save()
    res.json(contact) 
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err) 
    });
  } 
};

  //DELETE -  remove a contact by ID
  const remove = async (req, res) => { 
    try {
      let contact = req.profile
      let deletedContact = await contact.deleteOne(); 
      res.json(deletedContact) 
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
    });
  } 
};

// DELETE - remove all contacts
const removeAll = async (req, res) => {
  try {
    let contacts = await Contact.deleteMany();
    res.json(contacts);
  } catch (error) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(error)
    });
  }
};

//middleware to find contact by ID and populate req.profile (handles fetching the contact object and passing it to the above methods when needed)
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact) {
      return res.status(400).json({
        error: 'Contact not found'
      });
    }
    req.profile = contact;  
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'Could not retrieve contact'
    });
  }
};

//export all functions
export default { read, readById, create, update, remove, removeAll, contactByID};

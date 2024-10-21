// controller methods for user controller CRUD operations

import User from '../models/user.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

//GET - Read/get all users
const read = async (req, res) => {
  console.log("is this working???");
  try {
    const user = await User.find(); 
    res.status(200).json(user); 
  } catch (error) {
    res.status(500).json({
      error: 'Could not retrieve user stories'
    });
  } 
};

// GET - get user by ID
const readById = async (req, res) => {
  try {
    let user = req.profile
    return res.json(user)
  } catch (err) { 
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
    });
  }
}

//POST - Create/add a new user 
const create = async (req, res) => { 
const user = new User(req.body) 
try {
    await user.save()
    return res.status(201).json({ 
      message: "Successfully created user!"
      })
    } catch (err) {
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err) 
    });
  } 
};

// PUT - Update a user by ID
const update = async (req, res) => { 
  try {
    let user = req.profile
    user = extend(user, req.body); 
    user.updated = Date.now(); 
    await user.save()
    res.json(user) 
    } catch (err) {
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err) 
    });
  } 
};

//DELETE -  remove a user by ID
  const remove = async (req, res) => { 
    try {
      let user = req.profile
      let deletedUser = await user.deleteOne(); 
      res.json(deletedUser) 
    } catch (err) {
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err) 
    });
    } 
    };

// DELETE - remove all users
const removeAll = async (req, res) => {
  try {
    let users = await User.deleteMany();
    res.json(users);
  } catch (error) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(error)
    });
  }
};

//middleware to find user by ID and populate req.profile
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    req.profile = user;  
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'Could not retrieve user'
    });
  }
};

//export all functions
export default { read, readById, create, update, remove, removeAll, userByID };

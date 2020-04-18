const express = require('express');

const db = require('../data/db-config.js');
const usersModel = require('./model.js')

const router = express.Router();

router.get('/', (req, res) => {
  usersModel.findAll()
    .then(users => {
      res.json(users);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  usersModel.findById(id)
    .then(user => {
      user
        ? res.json(user)
        : res.status(404).json({ message: 'Could not find user with given id' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
});

router.post('/', (req, res) => {
  const userData = req.body;

  usersModel.createNewUser(userData)
    .then(ids => {
      res.status(201).json({ created: `New user, ID: ${ids[0]}` });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new user' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  usersModel.editUser(id, changes)
    .then(count => {
      count
        ? res.json({ update: count })
        : res.status(404).json({ message: 'Could not find user with given id' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update user' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  usersModel.editUser(id)
    .then(count => {
      count
        ? res.json({ removed: count })
        : res.status(404).json({ message: 'Could not find user with given id' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
});

module.exports = router;
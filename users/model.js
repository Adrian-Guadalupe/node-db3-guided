const db = require('../data/db-config.js');

const findAll = () => {
   return db('users') // select * from users
} 

const findById = (id) => {
   return db('users')
      .where({ id })
      .first()
}

const createNewUser = (user) => {
   return db('users')
      .insert(user, 'id') // must include this 'id', especially when working with postgres
}

const editUser = (id, changes) => {
   return db('users')
      .where({ id })
      .update(changes)
}

const deleteUser = (id) => {
   return db('users')
      .where({ id })
      .del()
}

module.exports = {
   findAll,
   findById,
   createNewUser,
   editUser,
   deleteUser
}
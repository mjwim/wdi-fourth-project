const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { db, env } = require('../config/environment');
const User = require('../models/user');
const Transaction = require('../models/transaction');

mongoose.connect(db[env]);

User.collection.drop();
Transaction.collection.drop();

User
  .create([{
    username: 'Matt',
    email: 'matt@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    transactions: []
  }, {
    username: 'John',
    email: 'john@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    transactions: []
  }, {
    username: 'wallis',
    email: 'wallis@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    transactions: []
  }])
  .then((users => {
    console.log(`${users.length} users created!`);

    return Transaction
      .create([{
        amount: 20,
        date: new Date(1511111111111),
        counterParty: {
          name: 'Tesco',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[0]
      }]);
  }))
  .then((transactions) => {
    console.log(`${transactions.length} transactions created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));

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
        amount: -20,
        date: new Date(1511111111111),
        category: 'Utilities',
        counterParty: {
          name: 'BT',
          address: {
            lat: 51.51,
            lng: -0.07
          }
        },
        taxRelevant: false,
        belongsTo: users[0]
      },{
        amount: 1499,
        date: new Date(1591111111111),
        category: 'Salary',
        counterParty: {
          name: 'General Assembly',
          address: {
            lat: 51.5,
            lng: -0.072
          }
        },
        taxRelevant: true,
        belongsTo: users[0]
      },{
        amount: -6.50,
        category: 'Transport',
        date: new Date(1511111111111),
        counterParty: {
          name: 'TFL',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[0]
      },{
        amount: -75.99,
        category: 'Utilities',
        date: new Date(1511111111111),
        counterParty: {
          name: 'British Gas',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[0]
      },{
        amount: 32,
        category: 'Interest',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Monzo',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: true,
        belongsTo: users[0]
      },{
        amount: -30.59,
        category: 'Groceries',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Waitrose',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[1]
      },{
        amount: 260,
        category: 'Freelance',
        date: new Date(1511111111111),
        counterParty: {
          name: 'BREG',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: true,
        belongsTo: users[1]
      },{
        amount: -450,
        category: 'Holidays',
        date: new Date(1511111111111),
        counterParty: {
          name: 'EasyJet',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[1]
      },{
        amount: -95,
        category: 'Clothing',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Rag and Bone',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[1]
      },{
        amount: -789.44,
        category: 'Mortgage',
        date: new Date(1511111111111),
        counterParty: {
          name: 'First Direct',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[1]
      },{
        amount: 94,
        category: 'Groceries',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Whole Foods',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[2]
      },{
        amount: 2380,
        category: 'Freelance',
        date: new Date(1511111111111),
        counterParty: {
          name: 'BREG',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: true,
        belongsTo: users[2]
      },{
        amount: -1100.99,
        category: 'Electronics',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Apple',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: true,
        belongsTo: users[2]
      },{
        amount: 79.99,
        category: 'Leisure',
        date: new Date(1511111111111),
        counterParty: {
          name: 'Virgin Active',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[2]
      },{
        amount: 150.94,
        category: 'Eating Out',
        date: new Date(1511111111111),
        counterParty: {
          name: 'KFC',
          address: {
            lat: 51.515548,
            lng: -0.072170
          }
        },
        taxRelevant: false,
        belongsTo: users[2]
      }]);
  }))
  .then((transactions) => {
    console.log(`${transactions.length} transactions created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));

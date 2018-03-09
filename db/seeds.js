const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
const rp          = require('request-promise');
const { db, env } = require('../config/environment');
const User        = require('../models/user');
const Transaction = require('../models/transaction');
const { categoryArray } = require('./CategoryArray');

mongoose.connect(db[env]);

User.collection.drop();
Transaction.collection.drop();

let globalUsers     = [];
let globalTransactions = [];

let categoryIndexSelected = null;

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//Radomising transaction dates/values/categories/counterparties within set parameters functions

function newDate() {
  return new Date((Math.random()*(1519991254000-1459900800000)+1459900800000));
}

const amountSizes = [lowAmount, midAmount, highAmount, vHighAmount];

function lowAmount() {
  return (Math.random()*10).toFixed(2)*categoryArray[categoryIndexSelected].creditDebit;
}
function midAmount() {
  return (Math.random()*100).toFixed(2)*categoryArray[categoryIndexSelected].creditDebit;
}

function highAmount() {
  return (Math.random()*1000).toFixed(2)*categoryArray[categoryIndexSelected].creditDebit;
}

function vHighAmount() {
  return (Math.random()*10000).toFixed(2)*categoryArray[categoryIndexSelected].creditDebit;
}

function categorySelector() {
  categoryIndexSelected = Math.floor(Math.random()*categoryArray.length);
  return categoryArray[categoryIndexSelected].category;
}

function counterPartySelector() {
  const counterPartySelectorIndex = Math.floor(Math.random()*categoryArray[categoryIndexSelected].counterparties.length);
  return categoryArray[categoryIndexSelected].counterparties[counterPartySelectorIndex];
}

rp('https://randomuser.me/api/?results=100&nat=gb')
  .then(data => {
    const { results } = JSON.parse(data);

    results.forEach(result => {
      const user = new User({
        first: capitalize(result.name.first),
        last: capitalize(result.name.last),
        image: result.picture.large,
        email: `${result.name.first}@${result.name.last}.com`,
        password: 'password',
        passwordConfirmation: 'password'
      });

      globalUsers.push(user);

      // console.log(`${user.first} was created`);

      return User.create(user)
        .then(user => {
          for (let i = 0; i < 100; i++) {
            Transaction
              .create([{
                date: newDate(),
                category: categorySelector(),
                counterParty: counterPartySelector(),
                amount: amountSizes[categoryArray[categoryIndexSelected].amountSize](),
                taxRelevant: false,
                belongsTo: user
              }]).then(transaction => {
                globalTransactions.push(transaction);
              });
          }
        });

    });
  })

  .then(() => {
    return User.create({
      first: 'Matthew',
      last: 'Wallis',
      image: 'https://avatars0.githubusercontent.com/u/25264577?s=400&u=d2cd11ee0c8d642bc9cedbda43d8a60324985ee6&v=4',
      email: 'matt@ga.co',
      password: 'password',
      passwordConfirmation: 'password'
    });
  })
  .then(user => {
    globalUsers.push(user);
    console.log(`${globalUsers.length} users were created!`);
    return Transaction
      .create([{
        amount: -20,
        date: newDate(),
        category: 'Utilities',
        counterParty: {
          name: 'BT',
          address: {
            lat: 51.51,
            lng: -0.07
          },
          website: 'www.bt.com'
        },
        taxRelevant: false,
        belongsTo: user
      },{
        amount: 1499,
        date: newDate(),
        category: 'Salary',
        counterParty: {
          name: 'General Assembly',
          address: {
            lat: 51.5,
            lng: -0.072
          },
          website: 'www.ga.co'
        },
        taxRelevant: false,
        belongsTo: user
      },{
        amount: -6.50,
        category: 'Transport',
        date: newDate(),
        counterParty: {
          name: 'TFL',
          address: {
            lat: 51.515548,
            lng: -0.072170
          },
          website: 'www.tfl.gov.uk'
        },
        taxRelevant: false,
        belongsTo: user
      },{
        amount: -75.99,
        category: 'Utilities',
        date: newDate(),
        counterParty: {
          name: 'British Gas',
          address: {
            lat: 51.515548,
            lng: -0.072170
          },
          website: 'www.britishgas.co.uk'
        },
        taxRelevant: false,
        belongsTo: user
      },{
        amount: 32,
        category: 'Interest',
        date: newDate(),
        counterParty: {
          name: 'Monzo',
          address: {
            lat: 51.515548,
            lng: -0.072170
          },
          website: 'www.monzo.com'
        },
        taxRelevant: false,
        belongsTo: user
      }]).then(transaction => {
        globalTransactions.push(transaction); //This has pushed whole array in as one transaction. Wrong at the moment but wont matter.
        // console.log(`${globalTransactions.length} tranasctions were created!`);
        console.log(globalTransactions);
      });
  })
  .catch(err => console.log(err))
  .finally(() =>  mongoose.connection.close());

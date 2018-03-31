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

const globalUsers = [];
const globalTransactions = [];

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
    })
      .then(user => {
        globalUsers.push(user);
        console.log(`${globalUsers.length} users were created!`);
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
  })
  .catch(err => console.log(err))
  .finally(() =>  mongoose.connection.close());

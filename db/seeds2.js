function newDate() {
  return new Date((Math.random()*(1519991254000-1459900800000)+1459900800000));
}

function lowAmount() {
  return ((Math.random()+1)*10).toFixed(2);
}
function midAmount() {
  return ((Math.random()+1)*100).toFixed(2);
}
function highAmount() {
  return ((Math.random()+1)*1000).toFixed(2);
}
function vHighAmount() {
  return ((Math.random()+1)*10000).toFixed(2);
}

return Transaction
  .create([{
    amount: midAmount(),
    date: newDate(),
    category: 'Utilities',
    counterParty: {
      name: 'BT',
      address: {
        lat: 51.51,
        lng: -0.07
      }
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
      }
    },
    taxRelevant: true,
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
      }
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
      }
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
      }
    },
    taxRelevant: true,
    belongsTo: user
  },{
    amount: -30.59,
    category: 'Groceries',
    date: newDate(),
    counterParty: {
      name: 'Waitrose',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: 260,
    category: 'Freelance',
    date: newDate(),
    counterParty: {
      name: 'BREG',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: true,
    belongsTo: user
  },{
    amount: -450,
    category: 'Holidays',
    date: newDate(),
    counterParty: {
      name: 'EasyJet',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: -95,
    category: 'Clothing',
    date: newDate(),
    counterParty: {
      name: 'Rag and Bone',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: -789.44,
    category: 'Mortgage',
    date: newDate(),
    counterParty: {
      name: 'First Direct',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: 94,
    category: 'Groceries',
    date: newDate(),
    counterParty: {
      name: 'Whole Foods',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: 2380,
    category: 'Freelance',
    date: newDate(),
    counterParty: {
      name: 'BREG',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: true,
    belongsTo: user
  },{
    amount: -1100.99,
    category: 'Electronics',
    date: newDate(),
    counterParty: {
      name: 'Apple',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: true,
    belongsTo: user
  },{
    amount: 79.99,
    category: 'Leisure',
    date: newDate(),
    counterParty: {
      name: 'Virgin Active',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  },{
    amount: 150.94,
    category: 'Eating Out',
    date: newDate(),
    counterParty: {
      name: 'KFC',
      address: {
        lat: 51.515548,
        lng: -0.072170
      }
    },
    taxRelevant: false,
    belongsTo: user
  }]);

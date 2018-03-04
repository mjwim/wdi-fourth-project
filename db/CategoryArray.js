const categoryArray = [
  {category: 'Utilities',
    counterparties: [
      {
        name: 'BT',
        address: {
          lat: 51.5157408,
          lng: -0.0979
        }
      },
      {
        name: 'British Gas',
        address: {
          lat: 51.514345,
          lng: -0.104811
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1
  },
  {category: 'Salary',
    counterparties: [{
      name: 'General Assembly',
      address: {
        lat: 51.5152149,
        lng: -0.0723318
      }}],
    creditDebit: 1,
    amountSize: 2
  },
  {category: 'Groceries',
    counterparties: [
      {
        name: 'Waitrose',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Tesco',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Sainsbury\'s',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Tranport',
    counterparties: [
      {
        name: 'TfL',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Uber',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'South West Trains',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Interest',
    counterparties: [
      {
        name: 'Monzo',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'HSBC',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'First Direct',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: 1,
    amountSize: 0},
  {category: 'Freelance',
    counterparties: [
      {
        name: 'BERG',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Local Authority',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Company Limited',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: 1,
    amountSize: 2},
  {category: 'Holidays',
    counterparties: [
      {
        name: 'Easyjet',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'British Airways',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Hotel',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: 1,
    amountSize: 2},
  {category: 'Clothing',
    counterparties: [
      {
        name: 'Primark',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Selfridges',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'John Lewis',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Electronics',
    counterparties: [
      {
        name: 'Apple',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Maplin',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Curry\'s',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Leisure',
    counterparties: [
      {
        name: 'Virgin Active',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Theatre',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Football tickets',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Eating Out',
    counterparties: [
      {
        name: 'KFC',
        address: {
          lat: 51.4802193,
          lng: -0.199417
        }
      },
      {
        name: 'Pizza Express',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        }
      },
      {
        name: 'Hawksmoor',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        }
      }
    ],
    creditDebit: -1,
    amountSize: 1}];

module.exports = {
  categoryArray: categoryArray
};

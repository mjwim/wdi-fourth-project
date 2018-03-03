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
    amountSize: 1}];

module.exports = {
  categoryArray: categoryArray
};

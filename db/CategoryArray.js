const categoryArray = [
  {category: 'Utilities',
    counterparties: [
      {
        name: 'BT',
        address: {
          lat: 51.5157408,
          lng: -0.0979
        },
        website: 'www.bt.com'
      },
      {
        name: 'British Gas',
        address: {
          lat: 51.514345,
          lng: -0.104811
        },
        website: 'www.britishgas.co.uk'
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
      },
      website: 'www.ga.co'
    }
    ],
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
        },
        website: 'www.waitrose.com'
      },
      {
        name: 'Tesco',
        address: {
          lat: 51.5111163,
          lng: -0.1251733
        },
        website: 'www.tesco.com'
      },
      {
        name: 'Sainsbury\'s',
        address: {
          lat: 51.5081002,
          lng: -0.1433614
        },
        website: 'www.sainsburys.co.uk'
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Tranport',
    counterparties: [
      {
        name: 'TfL',
        address: {
          lat: 51.496424,
          lng: -0.143921
        },
        website: 'www.tfl.gov.uk'
      },
      {
        name: 'Uber',
        address: {
          lat: 51.514278,
          lng: -0.071724
        },
        website: 'www.uber.com'
      },
      {
        name: 'South West Trains',
        address: {
          lat: 51.503165,
          lng: -0.112305
        },
        website: 'www.southwesternrailway.com'
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Interest',
    counterparties: [
      {
        name: 'Monzo',
        address: {
          lat: 51.528616,
          lng: -0.093234
        },
        website: 'www.monzo.com'
      },
      {
        name: 'HSBC',
        address: {
          lat: 51.514317,
          lng: -0.108379
        },
        website: 'www.hsbc.com'
      },
      {
        name: 'Revolut',
        address: {
          lat: 51.504924,
          lng: -0.019504
        },
        website: 'www.revolut.com'
      }
    ],
    creditDebit: 1,
    amountSize: 0},
  {category: 'Freelance',
    counterparties: [
      {
        name: 'BBC',
        address: {
          lat: 51.3802193,
          lng: -0.200417
        },
        website: 'www.bbc.co.uk'
      },
      {
        name: 'Local Authority',
        address: {
          lat: 51.548586,
          lng: -0.142561
        },
        website: 'www.lbhf.gov.uk'
      },
      {
        name: 'Company Limited',
        address: {
          lat: 51.504924,
          lng: -0.3195041
        },
        website: 'www.companieshouse.gov.uk'
      }
    ],
    creditDebit: 1,
    amountSize: 2},
  {category: 'Holidays',
    counterparties: [
      {
        name: 'Easyjet',
        address: {
          lat: 51.523484,
          lng: -0.158057
        },
        website: 'www.easyjet.com'
      },
      {
        name: 'British Airways',
        address: {
          lat: 51.469776,
          lng: -0.459462
        },
        website: 'www.ba.com'
      },
      {
        name: 'Hotel',
        address: {
          lat: 51.518387,
          lng: -0.135057
        },
        website: 'www.hotel.com'
      }
    ],
    creditDebit: -1,
    amountSize: 2},
  {category: 'Clothing',
    counterparties: [
      {
        name: 'Primark',
        address: {
          lat: 51.516534,
          lng: -0.131188
        },
        website: 'www.primark.com'
      },
      {
        name: 'Selfridges',
        address: {
          lat: 51.514564,
          lng: -0.153811
        },
        website: 'www.selfridges.com'
      },
      {
        name: 'John Lewis',
        address: {
          lat: 51.515341,
          lng: -0.145212
        },
        website: 'www.johnlewis.com'
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Electronics',
    counterparties: [
      {
        name: 'Apple',
        address: {
          lat: 51.514220,
          lng: -0.141984
        },
        website: 'www.apple.com'
      },
      {
        name: 'Maplin',
        address: {
          lat: 51.510528,
          lng: -0.083859
        },
        website: 'www.maplin.com'
      },
      {
        name: 'Curry\'s',
        address: {
          lat: 51.466189,
          lng: -0.190157
        },
        website: 'www.currys.co.uk'
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Leisure',
    counterparties: [
      {
        name: 'Virgin Active',
        address: {
          lat: 51.513228,
          lng: -0.157078
        },
        website: 'www.virginactive.com'
      },
      {
        name: 'Theatre',
        address: {
          lat: 51.509310,
          lng: -0.131678
        },
        website: 'www.theatre.com'
      },
      {
        name: 'Football tickets',
        address: {
          lat: 51.481663,
          lng: -0.190956
        },
        website: 'www.thefa.com'
      }
    ],
    creditDebit: -1,
    amountSize: 1},
  {category: 'Eating Out',
    counterparties: [
      {
        name: 'KFC',
        address: {
          lat: 51.521706,
          lng: -0.157139
        },
        website: 'www.kfc.com'
      },
      {
        name: 'Pizza Express',
        address: {
          lat: 51.508451,
          lng: -0.126156
        },
        website: 'www.pizzaexpress.com'
      },
      {
        name: 'Hawksmoor',
        address: {
          lat: 51.509721,
          lng: -0.136162
        },
        website: 'www.thehawksmoor.com'
      }
    ],
    creditDebit: -1,
    amountSize: 1}];

module.exports = {
  categoryArray: categoryArray
};

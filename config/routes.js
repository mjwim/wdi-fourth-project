const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const transactions  = require('../controllers/transactions');
const secureRoute = require('../lib/secureRoute');

router.route('/users/:id')
  .get(secureRoute, users.show);

router.route('/users')
  .get(users.index);

router.route('/transactions/:id')
  .get(secureRoute, transactions.show)
  .put(transactions.update);

router.route('/transactions')
  .get(secureRoute, transactions.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

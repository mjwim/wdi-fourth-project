const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const transactions  = require('../controllers/transactions');
// const secureRoute = require('../lib/secureRoute');

router.route('/users/:id')
  .get(users.show);
//   .put(secureRoute, users.update)
//   .delete(secureRoute, users.delete);
//
router.route('/transactions/:id')
  .get(transactions.show);

router.route('/transactions')
  .get(transactions.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

const Transaction = require('../models/transaction');

function indexRoute(req, res, next) {
  Transaction
    .find()
    .exec()
    .then((transactions) => res.json(transactions))
    .catch(next);
}

function showRoute(req, res, next) {
  Transaction
    .findById(req.params.id)
    .exec()
    .then((transaction) => {
      if(!transaction) return res.notFound();

      res.json(transaction);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};

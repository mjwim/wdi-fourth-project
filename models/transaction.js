const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  counterParty: {
    name: { type: String, required: true },
    address: {
      lat: { type: Number, required: true},
      lng: { type: Number, required: true}
    }
  },
  taxRelevant: {type: Boolean, required: true, default: false},
  belongsTo: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
});

transactionSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);

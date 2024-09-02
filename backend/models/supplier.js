const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      contactInfo: {
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        }
      },
      productsSupplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }]
});

module.exports = mongoose.model('Supplier', supplierSchema);

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    text: String,
    age: Number,
});
const customerData = mongoose.model('CustomerData', customerSchema);

module.exports = customerData;
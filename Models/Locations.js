
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('locations', LocationsSchema, 'Locations');

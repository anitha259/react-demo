const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    Location_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('restaurants', RestaurantsSchema, 'Restaurants');

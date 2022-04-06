const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId: {
        type: Number,
        required: true
    },
    placedOn:{
         type: String,
         required: true
    },
    items:{
        type: Array,
        required: true
    },
    Amount:{
        type:Number,
        required:true
    },
    restaurantid:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', OrderSchema, 'Order');
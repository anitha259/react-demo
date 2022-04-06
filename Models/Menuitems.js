const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuitemsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    restaurantId:{
        type:String,
        required: true,
    }
      
})

module.exports = mongoose.model('Menuitems', MenuitemsSchema, 'Menuitems');

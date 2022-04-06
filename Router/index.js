const express = require('express');

const route = express.Router();

const LocationController = require('../Controllers/Locations');
const MealTypesController = require('../Controllers/MealTypes');
const RestaurantsController = require('../Controllers/Restaurants');
const UserController = require("../Controllers/User");
const MenuitemsController = require("../Controllers/Menuitems");
const OrderController = require("../Controllers/Order");
const PaymentGatewayController = require("../Controllers/Payment.js");

route.get('/Locations',LocationController.getLocations);
route.get('/MealTypes', MealTypesController.getMealTypes);
// route.get('/Restaurants/:locId', RestaurantsController.getRestaurantsByLocation);
// route.post('/Login', UserController.UserLogin);
// route.post('/SignUp', UserController.UserSignUp);
// route.post('/filter', RestaurantsController.RestaurantsFilter);
// route.get('/Restaurant/:resId', RestaurantsController.getRestaurantsDetailsById);
// route.get('Menuitems/:resId', MenuitemsController.getMenuitemsByResId);
// route.get('Order', OrderController.saveOrderDetails);
// route.get('Order/:userId', OrderController.getOrderByUserId);
// route.post('/payment', PaymentGatewayController.Payment);
// route.post('/callback', PaymentGatewayController.Callback);


module.exports = route;
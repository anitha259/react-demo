const Order = require('../Models/Order');

exports.saveOrderDetails = (req, res) => {
    const { placedByUserName, placedByUserId, placedOn, items, Amount, restaurantId } = req.body;

    let OrderObj = new Order({
        placedBy: placedByUserName, 
        placedByUserId, 
        placedOn, 
        items, 
        Amount, 
        restaurantId 
 
    })

    OrderObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "Order SignedUp Successfully",
                    Order: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getOrderByUserId = (req, res) => {
    const userId = req.params.userId;
    Order.find({ placedByUserId: UserId})
        .then(response => {
            res.status(200).json(
                {
                    message: " Order Fetched Successfully",
                    Order : response
                }
            )
        })

        .catch(err => {
            res.status(500).json({ error: err })
        })
}
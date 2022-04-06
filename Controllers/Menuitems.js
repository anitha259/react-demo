const Menuitems = require('../Models/Menuitems');

exports.getMenuitemsByResId = (req, res) => {
    const resId = req.params.resId;
    Menuitems.find({ RestaurantsId: resId })
        .then(response => {
            res.status(200).json(
                {
                    message: " Menuitems Fetched Successfully",
                    Menuitems : response
                }
            )
        })

        .catch(err => {
            res.status(500).json({ error: err })
        })
}
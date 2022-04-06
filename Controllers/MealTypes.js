const MealTypes = require('../Models/mealTypes');

exports.getMealTypes = (req, res) => {
    MealTypes.find()
        .then(response => {
            res.status(200).json(
                {
                    message: "MealTypes Fetched Successfully",
                    mealTypes: response
                }
            )
        })

        .catch(err => {
            res.status(500).json({ error: err })
        })
}
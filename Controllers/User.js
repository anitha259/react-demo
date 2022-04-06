const User = require('../Models/User');

exports.UserLogin = (req, res) => {
    const { username, password } = req.body;
    let isAuthenticated, message;
    User.find({
         username, password
        
    })
        .then(response => {

             if (response.length == 0) {
                 isAuthenticated = false;
                 message= "User Not Authenticated"
             }
             else {
                 isAuthenticated = true;
                 message ="User Authenticated"
             }

            res.status(200).json(
                {
                   isAuthenticated,
                   message,
                   User: response
                }
            )
        })

        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.UserSignUp = (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    let UserObj = new User({
        username, password, firstname, lastname
    })

    UserObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "User SignedUp Successfully",
                    user: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}
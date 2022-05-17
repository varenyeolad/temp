const User = require("../models/User");
const bcrypt = require("bcrypt");



module.exports = {
    register:
        async (req, res) => {
            const userFound = await User.findOne({email: req.body.email})

            if (userFound) {
                req.flash('error', 'User already exist')
                res.redirect('/Register')
            } else {
                try {
                    const hashedPassword = await bcrypt.hash(req.body.password, 10)
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword
                    })

                    await user.save() //Add to DB
                    res.redirect('/SignIn')

                } catch (e) {
                    console.log(e)
                    res.redirect('/Register')
                }
            }
        },
    logout: (req, res) => {
        req.logOut()
        res.redirect('/SignIn')
    },



}




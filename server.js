require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose')
const { createServer } = require('http')
const port = process.env.PORT || 3000;
/* for to validate and authentication*/

const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const User = require('./models/User')
const AuthRoutes = require("./route/authRoutes");

const {
    checkAuthenticated,
    checkNotAuthenticated
} = require('./middlewares/auth')



/*------------------------------------------*/

const app = express()


app.use(session({ secret: 'somevalue' }));

//Find users
const initializePassport = require('./passport-config')
const {check} = require("express-validator");

initializePassport(
    passport,
    async(email)=>{
        const userFound = await User.findOne({email})
        return userFound
    },
    async(id) =>{
        const userFound = await User.findOne({_id: id})
        return userFound
    }
)
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))



app.use(express.static('/static'));

app.set('views', './views');
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'));


app.use("/", require("./views/routes/index"));
app.use("/bestdesigns", require("./views/routes/bestdesigns"));
app.use("/Register", require("./views/routes/Register"));
app.use("/Burabay", require("./views/routes/Burabay"));
app.use("/about", require("./views/routes/about"));
app.use("/main", require("./views/routes"));
app.use("/Charyn", require("./views/routes/Charyn"));
app.use("/contacts", require("./views/routes/contacts"));
app.use("/portfolio1", require("./views/routes/portfolio1"));
app.use("/services", require("./views/routes/services"));
app.use("/Shymbulak", require("./views/routes/Shymbulak"));
app.use("/SignIn", require("./views/routes/SignIn"));
app.use("/team", require("./views/routes/team"));
app.use("/profile", require("./views/routes/profile"));

app.post('/SignIn',checkNotAuthenticated, passport.authenticate('local',{
        successRedirect: '/profile',
        failureRedirect: '/SignIn',
        failureFlash: true,
    })
)
app.use(AuthRoutes);

///---MongoDB connect---///
mongoose.connect('mongodb+srv://adelya:WFHDfaLaNrt7PsLz@cluster0.kr4gl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}).then(()=>console.log('MongoDb connected'))
    .catch(e => console.log(e))

const server = createServer(app)
server.listen(port, ()=>console.log('server is up.'))
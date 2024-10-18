const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth');
const {connectMongoDb} = require('./connect');
const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const PORT = 8001;

//connection
connectMongoDb("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDb Connected!"))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls,
    });
});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(cookieParser()); 

//Routes
app.use('/url', restrictToLoggedinUserOnly, urlRoute);
app.use('/user', userRoute);
app.use('/', checkAuth, staticRoute);

app.use('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    });
    res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));

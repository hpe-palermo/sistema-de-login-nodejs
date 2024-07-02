// app.js

import express from "express";
import router from "./router.js";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();

app.use(session({secret:'hgj5678g9hpjoiho9'}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', "./views");

// Use the router for all routes starting with '/'
app.use('/', router);

// Define a basic route for the homepage
app.get('/', (req, res) => {
    res.sendFile('index');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine.js"
import initWebRoutes from "./route/web.js"
import connectDB from "./config/connectDB.js"
import 'dotenv/config';

let app = express();

//Config APP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

connectDB();

//Port = undefined => port = 3105//
let port = process.env.PORT || 3105;

app.listen(port, () => {
    console.log("Server Nodejs is running on the port:" + port);
})

import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';
import apiRouter from "./router/apiRouter";

//initialization
const app:express.Application = express();

//configuration
app.use(cors());
app.use(express.json()); //configure express to receive the form data
dotEnv.config({path : './.env'}); //config dotEnv

//to read data dynamically
const port = Number(process.env.EXPRESS_PORT);
const hostname = process.env.EXPRESS_HOST_NAME;

//connect to MongoDB
let dbURL = process.env.MONGO_DB_LOCAL_URL;
if(dbURL) {
    mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then((response) => {
        console.log(`connected to MongoDB...`);
    }).catch((error) => {
        console.log(error);
        process.exit(1); //stop the Node js process
    });
}

app.get('/' , (request, response) => {
    // response.send(`<h2>Welcome to Express Server</h2>`)
    response.status(200).json({
        message : 'Express is Up and Running'
    });
});

//configure the Router
app.use('/api/v1/products', apiRouter);

if(port && hostname) {
    app.listen(port , hostname , () => {
        console.log(`server is started at http://${hostname}:${port}`);
    });
}

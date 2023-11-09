const express = require('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
const convertToRomanRoutes = require('./src/route/convert.route');
const cors = require("cors");

const corOptions = {
    origin: "*",
    Credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposeHeaders: ["sessionId"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    preflightContinue: false,
    allowedHeaders: ["Content-Type"],
  };
  app.use(cors(corOptions));
app.use(express.json());
const port = process.env.PORT || '7000'

app.use("/api",convertToRomanRoutes)
app.listen(port,()=>console.log(`listening on port ${port}`));

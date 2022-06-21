require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//INVOCANDO RUTAS
app.use("/api",require("./routes"))

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Tu app esta lista por http://localhost:${port}`);
});

dbConnect();
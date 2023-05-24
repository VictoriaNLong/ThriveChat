const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

app.listen(3000, () => {
    console.log("running")
})
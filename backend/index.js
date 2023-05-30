const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const messageRoute = require("./routes/messages")
const conversationRoute = require("./routes/conversations")


dotenv.config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("connected to mongo") }
  )

  app.use(express.json())

  app.use("/backend/users", userRoute)
  app.use("/backend/auth", authRoute)
  app.use("/backend/conversations", conversationRoute)
  app.use("/backend/messages", messageRoute)

app.listen(process.env.PORT, () => {
    console.log("running")
})
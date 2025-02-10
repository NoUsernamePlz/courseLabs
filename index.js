const dotenv = require('dotenv')
const express = require("express");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { default: mongoose } = require("mongoose");
const Router = express.Router();

dotenv.config()


const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/course",adminRouter)

app.listen(process.env.PORT,()=>{
 
    console.log(`server is running on port: `+ process.env.PORT)
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database successfully!")
})

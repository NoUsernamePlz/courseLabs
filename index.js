const express = require("express");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const Router = express.Router();


const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/course",adminRouter)

app.listen(8000,()=>{
 
    console.log(`server is running on port 8000 : `)
})

const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup",function(req,res){

    res.json({
        message:"admin signup endpoint"
    })
})


adminRouter.post("/signin",function(req,res){

    res.json({
        message:"signup endpoint"
    })
})

adminRouter.post("/",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

adminRouter.put("/",function(req,res){
    res.json({
        message:"updated course"
    })
})

adminRouter.get("/bulk",function(req,res){
    res.listenerCount({
        message:"courses are here!"
    })
})

module.exports={
    adminRouter:adminRouter
}

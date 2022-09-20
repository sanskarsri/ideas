const router = require("express").Router();

// model
const DEMO__MODEL = require("../../models/Demo");

router.get("/",(req,res)=>{
    res.send("Demo working");
})

module.exports = router;
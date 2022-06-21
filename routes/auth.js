const express = require("express");
const { matchedData } = require("express-validator");
const { validatorRegister } = require("../validators/auth");
const router = express.Router();

//TODO http://localhost/api/tracks GET, POST, DELETE, PUT

router.post("/register", validatorRegister, (req,res)=>{

    req =matchedData(req);
    res.send({data:req})

});

module.exports = router;
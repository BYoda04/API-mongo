const express = require("express");
const { getItems, createItems, getItem, deleteItems } = require("../controllers/storage");
const { customHeader } = require("../middleware/customHeader");
const uploadMidleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();

//TODO http://localhost/api/storage GET, POST, DELETE, PUT
router.get("/",getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/",uploadMidleware.single("myfile"), customHeader,createItems);
//router.put("/:id", updateItems);
router.delete("/:id", validatorGetItem, deleteItems);

module.exports = router;
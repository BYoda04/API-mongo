const express = require("express");
const { getItems, createItems, getItem, updateItems, deleteItems } = require("../controllers/tracks");
const { customHeader } = require("../middleware/customHeader");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

//TODO http://localhost/api/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, customHeader, createItems);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItems);
router.delete("/:id",validatorGetItem, deleteItems);

module.exports = router;
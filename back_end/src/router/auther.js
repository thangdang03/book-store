const express = require("express");
const router = express.Router();
const authorcontroller = require('../cotroller/authcontroller');

router.get("/",authorcontroller.getallauthor);
router.get("/:id",authorcontroller.getAnAuther);
router.post("/",authorcontroller.addauthor);
router.put("/:id",authorcontroller.uppdateathor);
router.delete("/:id",authorcontroller.delteauthor);
module.exports = router
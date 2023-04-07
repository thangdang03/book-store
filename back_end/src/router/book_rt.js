const express = require("express");
const router = express.Router();
const bookcontroller = require('../cotroller/bookcontroller');

router.post("/",bookcontroller.addbook);
router.get("/",bookcontroller.getallbook);
router.get("/:id",bookcontroller.getabook);
router.put("/:id",bookcontroller.updatebook);
router.delete("/:id",bookcontroller.detlebook);


module.exports = router
const express = require("express");
const router = express.Router();
const ingresosCtrl = require("../controllers/ingresos.controller");

router.get("/", ingresosCtrl.getIngresos);
router.post("/", ingresosCtrl.createIngreso);

module.exports = router;

const express = require("express");


const adminRoutes = require("./admin_routes");

const router = express();


router.use("/admin", adminRoutes);


module.exports = router;

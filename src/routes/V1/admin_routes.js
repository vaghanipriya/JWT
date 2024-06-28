const express = require("express");
const { admin_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-admin",
    // callback = controller
    admin_controller.create_admin
);

router.post(
    "/create-token",
    // callback = controller
    admin_controller.create_token
);

router.post(
    "/create-decode",
    // callback = controller
    admin_controller.create_decode
);

router.get(
    "/get-admin",
    // callback = controller
    admin_controller.get_admin
);

module.exports = router;

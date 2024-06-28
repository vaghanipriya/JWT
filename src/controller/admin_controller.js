const { admin_services } = require("../services");

const jwt = require("jsonwebtoken");

const create_admin = async (req, res) => {
    try {
        //    services

        const data = req.body;
        const create_admin = await admin_services.create_admin_S(data);
        res.status(200).json({
            success: true,
            data: create_admin,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const create_token = async (req, res) => {
    try {
        //    services

        const payload = req.body;
        const token = await jwt.sign(payload, "key");

        console.log(token);
        if (!token) {
            throw new Error("Enter.....signature...!!!");
        }

        res.status(200).json({
            success: true,
            token: token,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const create_decode = async (req, res) => {
    try {
        //    services

        const token = req.body.token;
        const data = await jwt.verify(token, "key");

        console.log(token);
        if (!data) {
            throw new Error("data.....not...!!!");
        }

        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_admin = async (req, res) => {
    try {
        //    services

        const get_admin = await admin_services.get_admin_S();
        res.status(200).json({
            success: true,
            data: get_admin,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_admin,
    get_admin,
    create_token,
    create_decode,
};

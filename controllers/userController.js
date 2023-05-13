const User = require("../models/User");

async function index(req, res) {
    try {
        const foundUsers = await User.find({});
        res.status(200).json(foundUsers);
    } catch (err) {
        console.log(err);
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    index,
    createUser,
};

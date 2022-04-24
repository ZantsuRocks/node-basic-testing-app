module.exports = () => {
    // const customerWalletsDB = require('../data/customer-wallets.json');
    const controller = {};

    controller.post = (req, res) => res.status(200).json({});
    controller.get = (req, res) => res.status(200).send('OK');

    controller.postImage = (req, res) => res.status(200).send('');
    controller.getImage = (req, res) => res.status(200).send('');

    return controller;
}
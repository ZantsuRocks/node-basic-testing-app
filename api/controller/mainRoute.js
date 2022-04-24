const fs = require('fs');

module.exports = () => {
    // const customerWalletsDB = require('../data/customer-wallets.json');
    const controller = {};

    controller.post = function (req, res) {
        let json = req.body;
        console.log('Recebido:');
        console.log(json);


        res.status(200).send('OK');
    }

    controller.get = (req, res) => res.status(200).json({
        nome: "rex",
        raca: "pastor",
        idade: 5,
        peso: 20,
        tipoRacao: "DogS",
        pesoDispenser: 22,
        pesoPote: 1.2,
        agendas: [
            {
                hora: 1,
                minuto: 10,
                peso: 10
            },
            {
                hora: 20,
                minuto: 20,
                peso: 30
            },
        ]
    });

    controller.postImage = (req, res) => res.status(200).send('');
    controller.getImage = function (req, res) {
        //let foto = fs.readFileSync('../data/hello.png');
        let currDir = __dirname.replace('\\controller', '').replace('/controller', '');
        res.status(200).sendFile(`${currDir}/data/hello.png`)

    };

    return controller;
}
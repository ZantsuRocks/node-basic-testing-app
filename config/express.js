const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cosign = require('consign');

module.exports = () => {
    const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES
    app.use(bodyParser.json());

    // ROTAS
    cosign({ cwd: 'api' })/* .then('data') */.then('controller').then('routes').into(app);
    require('../api/routes/mainRoute')(app);

    return app;
};
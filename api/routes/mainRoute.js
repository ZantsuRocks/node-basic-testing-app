module.exports = app => {
    // const controller = require('../controllers/mainRoute')();
    const controller = app.controller.mainRoute;

    app.route('/api/v1/post')
        .post(controller.post);
    app.route('/api/v1/get')
        .get(controller.get);

    app.route('/api/v1/image-post')
        .post(controller.postImage);
    app.route('/api/v1/image-get')
        .get(controller.getImage);
}
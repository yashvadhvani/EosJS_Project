const uploadcontroller = require('./../controllers/upload.ctrl')
// const multipart = require('connect-multiparty');
// const multipartWare = multipart();

module.exports = (router) => {
    router
        .route('/upload')
        .get(uploadcontroller.upload)
}
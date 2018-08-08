const getTrxcontroller =require('./../controllers/getTransaction.ctrl')
const multipart =require('connect-multiparty');
const multipartWare =multipart();

module.exports= (router) => {
    // router
    // .route('/upload')
    // .get(uploadcontroller.upload)

    router
    .route('/getTransaction')
    .get(getTrxcontroller.getTransaction)
}
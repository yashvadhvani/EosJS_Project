const getTableController =require('./../controllers/getTable.ctrl')
// const getTa =require('./../controllers/upload.ctrl')
// const multipart =require('connect-multiparty');
// const multipartWare =multipart();

module.exports= (router) => {
    router
    .route('/getTable')
    .get(getTableController.getTable);
}
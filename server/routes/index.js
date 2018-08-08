const upload= require('./upload')
const getTable= require('./getTable')
const getTransaction= require('./getTransaction')
module.exports =(router) => {
    upload(router);
    getTable(router);
    getTransaction(router);
}
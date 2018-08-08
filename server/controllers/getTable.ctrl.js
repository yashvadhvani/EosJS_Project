const config=require('./shared/config');
const getTable=require('./shared/getTableRows')

module.exports= {
    getTable:(req,res,next) => {
        // console.log('hello');
        config.then((eos) =>{
            getTable(eos,'s','s','files');
        })
    }
}
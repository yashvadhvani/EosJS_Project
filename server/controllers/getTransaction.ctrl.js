const config=require('./shared/config');
const getTransaction=require('./shared/getTransaction')

module.exports= {
    getTransaction:(req,res,next) => {
        config.then((eos) =>{
            getTransaction(eos,'17173e20fbe0d5cc80cd0dd0d4318b7d1a268bc704f43668cce9bcf132dcfdac');
        })
        // console.log("Hello");
    }
}
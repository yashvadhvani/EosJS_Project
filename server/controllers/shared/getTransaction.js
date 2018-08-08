const getTransaction=(eos,trx_id)=>{
    eos.getTransaction(trx_id).then((res)=>{
        console.log(res);
    })
}

module.exports=getTransaction;
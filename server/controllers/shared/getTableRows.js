const getTable = (eos, code, scope, table) => {
    eos.getTableRows({
        code,
        scope,
        table,
        json: true
    }).then(res => console.log(res));
}
module.exports=getTable;
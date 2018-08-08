const Eos = require('eosjs');
var resolvedProm = Promise.resolve(Eos().getInfo({}));
const keyProvider = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
const httpEndpoint = 'http://127.0.0.1:8888';

module.exports = thenProm = resolvedProm.then(function (value) {
    return Eos({
        chainId: value.chain_id,
        keyProvider,
        httpEndpoint
    });
})
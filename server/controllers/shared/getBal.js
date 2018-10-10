const config = require("./config");
// let Eos = require("eosjs");

config.then(eos => {
  // eos = Eos(eos);
  console.log(eos);
  eos
    .getCurrencyBalance("eosio.token", "myaccount", "eos")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
});

// eos.newaccount();;
// module.exports = transfer;
// transfer();

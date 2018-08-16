const fs = require("fs");
let transfer = eos => {
  eos.contract("eosio.token").then(contract => {
    // console.log(contract.issue());
    contract
      .transfer(
        {
          from: "user",
          to: "tester",
          quantity: "5.0000 SYS",
          memo: "m"
        },
        {
          authorization: ["user@active"]
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
module.exports = transfer;

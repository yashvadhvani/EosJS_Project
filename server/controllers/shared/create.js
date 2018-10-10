const fs = require("fs");
let create = eos => {
  eos.contract("eosio.token").then(contract => {
    // console.log(contract.issue());
    contract
      .issue(
        {
          to: "user",
          quantity: "100.0000 SYS",
          memo: "Hello"
        },
        {
          authorization: ["eosio@active"]
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
  console.log("hello");
};
module.exports = issue;

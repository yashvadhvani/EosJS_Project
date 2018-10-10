const fs = require("fs");
let transfer = (eos, cb) => {
  console.log("hello");
  eos.contract("eosio.token").then(contract => {
    // console.log(contract.issue());
    contract
      .transfer(
        {
          from: "myaccount",
          to: "myaccount2",
          quantity: "1.0000 RWE",
          memo: Math.random().toString()
        },
        {
          authorization: ["myaccount@active"]
        }
      )
      .then(res => {
        console.log(res);
        return cb(null, res);
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      });
  });
};
module.exports = transfer;

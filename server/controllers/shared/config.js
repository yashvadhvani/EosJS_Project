const Eos = require("eosjs");
const fs = require("fs");
var resolvedProm = Promise.resolve(Eos().getInfo({}));
const keyProvider = [
  "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
  "5JYugiMycAKTacDANEteHavz7TLCLKSQ7HGTL1Fo5vTmeb5f82R",
  "5KPcxz632NJdXMS1ZiLSTZLyGGow7kANi1fgn9R6h37Sdyue9B7",
  "5JuZDjuzP1QhxodcLMZGHKWPuZAR84iEfQ4aGrLf26NyoSchPNN",
  "5KTacVDRiUxaQdqCCBVkRdeXRFkax32J3A6ivSCknSimYkEdsET"
];

const httpEndpoint = "http://127.0.0.1:8888";

module.exports = thenProm = resolvedProm.then(function(value) {
  return Eos({
    chainId: value.chain_id,
    keyProvider,
    httpEndpoint,
    expireInSeconds: 600
  });
});
// console.log(Eos);
// console.log(Eos().create());
// });

// var axios = require("axios");

// var request = require("request");
// var formdata = "myname";
// var options = {
//   method: "POST",
//   url: "http://127.0.0.1:9999/v1/wallet/create",
//   headers: {
//     "Cache-Control": "no-cache",
//     "Content-Type": "application/json"
//   },
//   body: formdata,
//   json: true
// };

// request(options, function(error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

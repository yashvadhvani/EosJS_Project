const fs = require("fs");
const ecc = require("eosjs-ecc");
const config = require("./config");
var request = require("request");
let Eos = require("eosjs");

ecc.randomKey().then(privateKey => {
  console.log(privateKey);
  var options = {
    method: "POST",
    url: "http://127.0.0.1:9999/v1/wallet/import_key",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json"
    },
    body: ["default", privateKey],
    json: true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  let keyProvider = JSON.parse(
    fs.readFileSync(__dirname + "/keyProvider.json").toString()
  );

  keyProvider.push(privateKey);

  fs.writeFileSync(
    __dirname + "/keyProvider.json",
    JSON.stringify(keyProvider)
  );

  let public = ecc.privateToPublic(privateKey);
  config.then(eos => {
    // eos = Eos(eos);
    console.log(eos);
    eos
      .newaccount("eosio", "yash4", public, public)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
});

// eos.newaccount();;
// module.exports = transfer;
// transfer();

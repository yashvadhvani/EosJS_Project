var CryptoJS = require("crypto-js");

let upload = (eos, result, str) => {
  let ciphertext = CryptoJS.AES.encrypt(str, "hello");
  eos.contract("storage").then(contract => {
    contract
      .upload(
        {
          author: "myaccount",
          id: Math.floor(Math.random() * 10000),
          hash: ciphertext
        },
        {
          authorization: ["myaccount@active"]
        }
      )
      .then(res => {
        console.log(res);
        result.json(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
module.exports = upload;

var CryptoJS = require("crypto-js");

const getTable = (eos, code, scope, table, id, result) => {
  eos
    .getTableRows({
      code,
      scope,
      table,
      json: true
    })
    .then(res => {
      for (let i = 0; i < res.rows.length; i++) {
        if (res.rows[i].id === id) {
          //   CryptoJS.AES.decrypt(ciphertext.toString(), "hello");
          result.json({
            id: res.rows[i].id,
            data: CryptoJS.AES.decrypt(
              res.rows[i].hash.toString(),
              "hello"
            ).toString(CryptoJS.enc.Utf8)
          });
        }
      }
    });
};
module.exports = getTable;

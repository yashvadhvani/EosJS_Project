const fs = require("fs");
const getTransaction = (eos, trx_id) => {
  eos.getTransaction(trx_id).then(res => {
    fs.writeFileSync("ReturnSampleTextFile_500kb.json", JSON.stringify(res), {
      flag: "w"
    });
  });
};

module.exports = getTransaction;

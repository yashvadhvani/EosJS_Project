const config = require("./shared/config");
const transfer = require("./shared/transfer");
module.exports = {
  transfer: (req, res, next) => {
    config.then(eos => {
      transfer(eos);
      //   console.log(eos);
    });
  }
};

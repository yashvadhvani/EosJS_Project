const config = require("./shared/config");
const transfer = require("./shared/transfer");
module.exports = {
  transfer: (req, res, next) => {
    config.then(eos => {
      console.log("eos :", eos);
      transfer(eos, function(err, response) {
        res.json(response);
      });
      //   console.log(eos);
    });
  }
};

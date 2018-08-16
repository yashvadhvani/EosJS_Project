const config = require("./shared/config");
const getTransaction = require("./shared/getTransaction");

module.exports = {
  getTransaction: (req, res, next) => {
    config.then(eos => {
      getTransaction(
        eos,
        "847c9020d383a691b0389e7b7ee66a47f2358c48de1a6c3aefdeb42968377c12"
      );
    });
    // console.log("Hello");
  }
};

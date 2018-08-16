const config = require("./shared/config");
const issue = require("./shared/issue");
module.exports = {
  issue: (req, res, next) => {
    config.then(eos => {
      issue(eos);
      //   console.log(eos);
    });
  }
};

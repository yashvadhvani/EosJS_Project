const config = require("./shared/config");
const getTable = require("./shared/getTableRows");

module.exports = {
  getTable: (req, res, next) => {
    // console.log('hello');
    config.then(eos => {
      console.log(req.body.id);
      getTable(eos, "storage", "storage", "files", req.body.id, res);
    });
  }
};
